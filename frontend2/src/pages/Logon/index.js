import React from 'react'
import './styles.css'
import {FiLogIn} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import {Link} from 'react-router-dom'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faca seu Logon</h1>
                    <input placeholder="Sua ID"/>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}