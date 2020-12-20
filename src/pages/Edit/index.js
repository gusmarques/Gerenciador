import React, { useEffect, useState } from 'react'
import api from '../../services/api'


export default function Edit({ history }) {


    const [idUsuario, setId] = useState('');
    const [motivo, setMotivo] = useState('');
    const [valor, setValor] = useState('');
    const _id = localStorage.getItem('id');

    useEffect(() => {

        async function handleLoad() {

            const response = await api.get(`/divida/${_id}?uuid=1ebdf466-cde7-4b3d-aaf5-1a901b4971ce`, {

            })
            setId(response.data.result.idUsuario);
            setMotivo(response.data.result.motivo);
            setValor(response.data.result.valor);

        }

        handleLoad();

    }, [])


    async function handleSubmit(event) {
        event.preventDefault();

        await api.patch(`/divida/${_id}?uuid=1ebdf466-cde7-4b3d-aaf5-1a901b4971ce`, {
            idUsuario,
            motivo,
            valor
        })

        history.push('/');
    }




    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="idUsuario">Id Usuario - Nome</label>
                <input
                    id="idUsuario"
                    placeholder={idUsuario}
                    value={idUsuario}
                    onChange={event => setId(event.target.value)}
                />
                <label htmlFor="motivo">Motivo da divida</label>
                <input
                    id="motivo"
                    placeholder={motivo}
                    value={motivo}
                    onChange={event => setMotivo(event.target.value)}
                />

                <label htmlFor="valor">Valor da divida</label>
                <input
                    id="valor"
                    placeholder={valor}
                    value={valor}
                    onChange={event => setValor(event.target.value)}
                />

                <button className="btn" type="submit" > Salvar Divida</button>
            </form>

        </>
    )
}