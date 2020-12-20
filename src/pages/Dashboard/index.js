import React from 'react'
import { Link } from 'react-router-dom';
import DebitsList from '../../components/DebitsList'
import './styles.css';


export default function Dashboard() {

    return (
        <>
            <h1>Todas as Dívidas</h1>
            <DebitsList />
            <Link to="/new">
                <button className="btn" style={{ flexDirection: 'row' }}>

                    <p>Nova Divida</p>
                </button>
            </Link>
        </>
    )
}