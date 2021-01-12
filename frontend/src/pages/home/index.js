import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiTrash2,FiEdit2 } from "react-icons/fi";

import api from '../../services/api'
import './styles.css'

export default function Initial(){
    const [procuraMedico, setProcuraMedico] = useState([])
    const [deletaMedico, setDeletaMedico] = useState([])
    const [editaMedico, setEditaMedico] = useState([])
    const [procuraPorEspecialidade, setProcuraPorEspecialidade] = useState([])
    const [medicos, setMedicos] = useState([])

    useEffect(()=> {
        
        api.get('medicos').then(response =>{
            setMedicos(response.data)
        })
        
    })

    async function HandleProcurarMedico(e){
        e.preventDefault()
        e.target.reset()
        var data = procuraMedico
        data = data.replace(/ /g,"_")

        
        await api.post('medicos/', data,{})        
        
    }


    return (
        <div className = "Screen">
            <header className = "header">
                <Link className="buttonCadastro" to="/cadastrarMedico">Cadastrar Medico</Link>
            </header>
            <div className = "content">
                <div className="leftSide">
                    <form>
                        <input placeholder="Procurar Médico" 
                            className="searchMedico"
                            onChange={(e => setProcuraMedico(e.target.value))}
                        />
                    </form>
                </div>
                <div className = "medicos">
                    <ul>
                        {medicos.map(medico =>(
                            <li key={medico.id}>
                                <button type="button">
                                    <FiTrash2 size={20} color="#a8a8b3" onClick={setDeletaMedico}/>
                                </button> 
                                <h1>{medico.nome}</h1>
                                <p>{medico.crm}</p>
                                <p>{medico.tel_fixo}</p>
                                <p>{medico.tel_celular}</p>
                                <p>{medico.cep}</p>
                                <p>{medico.logradouro}</p>
                                <p>{medico.numero}</p>
                                <p>{medico.complemento}</p>
                                <p>{medico.bairro}</p>
                                <p>{medico.cidade}</p>
                                <p>{medico.uf}</p>
                                <button onClick={setEditaMedico} className="editButton" type="button">
                                    <FiEdit2 size={18} color="#E02041"/>
                                </button>
                            </li>
                        ))} 
                    </ul>                   
                </div>
            </div>
            
        </div>

    )

}