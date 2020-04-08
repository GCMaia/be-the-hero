import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi"
import "./styles.css";

import api from '../../services/api';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ngoId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err){
            alert("Error deleting incident, try again");
        }
    }

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Welcome, {ngoName}</span>
            
                <Link className="button" to="/incidents/new">Register a new case</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
        
            <h1>Registered Cases</h1>
        
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASE:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{incident.description}</p>

                        <strong>VALUE:</strong>
                        <p>{Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}