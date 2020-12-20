import React,{useEffect, useState} from 'react'
import api from '../../services/api'


export default function New({ history }){

    const [ idUsuario, setId ] = useState('');
    const [ motivo, setMotivo ] = useState('');
    const [ valor, setValor ] = useState('');

    const [nomes, SetNomes ] = useState([]);

    const [cliente, setCliente] = useState("");
 

    useEffect(()=>{

        async function loadNames(){

            const response = await api.get('https://jsonplaceholder.typicode.com/users',{

            })

            SetNomes(response.data)
        }

        loadNames();
    },[])


   function handleSelects(event){
         setCliente(event.target.value);
         setId(event.target.selectedIndex);
         
   }

   
   async function handleSubmit(event){
    event.preventDefault();
    


    await api.post('/divida/?uuid=1ebdf466-cde7-4b3d-aaf5-1a901b4971ce',
        {idUsuario,
        motivo,
        valor,
        
    })

        localStorage.setItem('cl', JSON.stringify(cliente));

   
    history.push('/');
   }

    return(
        <form  onSubmit={handleSubmit}>
         <label htmlFor="idUsuario">Id Usuario - Nome</label>

     <select
     value={cliente} 
     onChange={event => handleSelects(event)}
     >
       <option value="0">Selecione um(a) cliente</option>
        {nomes.map( item => (
           <option key={item.id} value={item.name}>{item.name}</option>
        ))}
        
     </select>
    
          <label htmlFor="motivo">Motivo da divida</label>
         <input
         id="motivo"
         placeholder="Motivo da divida"
         value={motivo}
         onChange={event => setMotivo(event.target.value)}
         />

         <label htmlFor="valor">Valor da divida</label>
         <input
         id="valor"
         placeholder="valor da divida"
         value={valor}
         onChange={event => setValor(event.target.value)}
         />
         
         <button className="btn" type="submit"> Cadastrar Divida</button>
           
        </form>
    )
}