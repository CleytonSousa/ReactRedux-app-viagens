import React from 'react'
import { Container } from './reservasStyle'
import { MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions'

const Reservas = () => {
    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeReserve(id))
    }

    const decrementAmount = (trips) => {
        dispatch(updateAmountReserve(trips.id, trips.amount - 1))
    }

    const incrementAmount = (trips) => {
        dispatch(updateAmountReserve(trips.id, trips.amount + 1))
    }

    return (
        <Container>
            <h1 id="title">Voce solicitou {reserves.length} reserva</h1>

            {reserves.map((reservas) => (
                <section key={reservas.id}>
                    <img src={reservas.image} alt={reservas.title} />
                    <strong>{reservas.title}</strong>
                    <div id="amount">
                        <button
                            type="button"
                            onClick={() => decrementAmount(reservas)}
                        >
                            <MdRemoveCircle size={20} color="#191919" />
                        </button>
                        <input  readOnly type="text" value={reservas.amount} />
                        
                        <button
                            type="button"
                            onClick={() => incrementAmount(reservas)}
                        >
                            <MdAddCircle size={20} color="#191919" />
                        </button>
                    </div>
                    <button type="button"
                        onClick={() => handleRemove(reservas.id)}
                    >
                        <MdDelete size={20} color="#191919" />
                    </button>
                </section>
            ))}
            <footer>
                <button type="button">
                    Solicitar reserva
                </button>
            </footer>
        </Container>
    )
}

export default Reservas