import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ngoId = localStorage.getItem('ngoId');
    const history = useHistory();

    function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            api.post('incidents', data, {
                headers: {
                    Authorization: ngoId,
                }
            })

            history.push('/profile');

        } catch (err){
            alert("Error when registering the incident");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"></img>
                    <h1>Register new case</h1>
                    <p>Describe the case as detailed as possible to find a hero to solve the problem</p>

                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041"/>Back to profile</Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder ="Case Name" 
                        value = {title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder ="Description" 
                        value = {description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder ="Value in CAD$"
                        value = {value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Register</button>

                </form>
            </div>
        </div>
    )
}