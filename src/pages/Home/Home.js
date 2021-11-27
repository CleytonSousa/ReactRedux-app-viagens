import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { MdFlightTakeoff } from 'react-icons/md'
import { Container } from '../../pages/Home/HomeStyle'
import { useDispatch } from 'react-redux'
import { addReserveRequest } from "../../store/modules/reserve/actions"
import loading from '../../assets/LO25.gif'

const Home = ({ history }) => {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const loadApi = async () => {
            const response = await api.get('trips');
            setTrips(response.data)
            setLoad(false)
        }

        loadApi()
    }, [])

    const handleAdd = (id) => {
        dispatch(addReserveRequest(id))
        
    }

    return (
        <Container>
            {load ?
                <div className="loadingScreen">
                    <img style={{ margin: "auto" }} src={loading} alt="loading" />
                </div>
                :
                trips.map((trip) => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>status: {trip.status ? "Disponivel" : "indisponivel"}</span>

                        <button type="button"
                            onClick={() => handleAdd(trip.id)}
                        >
                            <MdFlightTakeoff size={16} color="#fff" />
                            Solicitar reserva
                        </button>
                    </li>
                ))}
        </Container>
    )
}

export default Home