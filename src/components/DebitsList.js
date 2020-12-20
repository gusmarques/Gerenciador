import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../services/api'
import { BiEdit, BiTrash } from "react-icons/bi";


import './styles.css';

export default function () {


    const [debits, setDebits] = useState([])

    const [clientes, setClientes] = useState([])


    useEffect(() => {



        async function load() {
            const response = await api.get('/divida/?uuid=1ebdf466-cde7-4b3d-aaf5-1a901b4971ce', {

            })
            setDebits(response.data.result);

        }
        load();

    }, [])

    useEffect(() => {
        async function handleclientes() {

            const response = api.get('https://jsonplaceholder.typicode.com/users', {

            })
            setClientes(response.data)
        }
        handleclientes();

    }, [])

   

    async function handleEdit(_id) {

        await localStorage.setItem('id', _id);


    }

    function handleDel(_id) {
        try {
            api.delete(`/divida/${_id}?uuid=1ebdf466-cde7-4b3d-aaf5-1a901b4971ce`)

            setDebits(debits.filter(debt => debt._id !== _id))

        } catch (err) {
            alert('Erro ao deletar dívida, tente novamente.')
        }

    }


    return (
        <>
            <ul className="debts-list">
                {debits.map(debit => (
                    <div key={debit._id}>
                        <p><strong>ID USUÁRIO</strong>
                            <br />
                            <span>{debit.idUsuario}</span>
                        </p>

                        <p><strong>MOTIVO</strong><br /><span>{debit.motivo}</span></p>
                        <p><strong>VALOR</strong><br /><span>R$ {debit.valor}</span></p>
                        <p><strong>DATA</strong><br /><span>{new Date(debit.criado).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span></p>
                        <section style={{ flexDirection: 'row' }}>
                            <Link to="/edit">
                                <button onClick={() => handleEdit(debit._id)} className="edit" ><BiEdit size={20} color="#fff" /></button>
                            </Link>

                            <button onClick={() => handleDel(debit._id)} className="destroy" >
                                <BiTrash size={20} color="#fff" />
                            </button>
                        </section>

                    </div>

                ))}
            </ul>
        </>
    )
}