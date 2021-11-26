import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './HeadersStyle'
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux'

const Headers = () => {
    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <Container>
            <Link to='/'>
                <img id="logo" src={logo} alt="logo" />
            </Link>
            <Link className="reservas" to="/reservas">
                <section>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize} reservas</span>
                </section>
            </Link>
        </Container>
    )
}

export default Headers