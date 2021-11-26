import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { MdFlightTakeoff } from 'react-icons/md'
import { Container } from '../../pages/Home/HomeStyle'
import { useDispatch } from 'react-redux'
import {addReserve} from "../../store/modules/reserve/actions"

const Home = () => {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([])

    useEffect(() => {
        const loadApi = async () => {
            const response = await api.get('trips');
            setTrips(response.data)
        }

        loadApi()
    }, [])

    const handleAdd = (trip) => {
        dispatch(addReserve(trip))
    }

    return (
        <Container>
            {trips.map((trip) => (
                <li key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <span>status: {trip.status ? "Disponivel" : "indisponivel"}</span>

                    <button type="button"
                        onClick={() => handleAdd(trip)}
                    >
                    <MdFlightTakeoff size={16} color="#fff"/>
                        Solicitar reserva
                    </button>
                </li>
            ))}
        </Container>
    )
}

export default Home