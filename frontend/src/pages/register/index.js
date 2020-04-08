import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [province, setProv] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email, 
            city, 
            province,
        };

        try {
            const response = await api.post('ngos', data);

            alert(`Your access ID is: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Error during register, try again');
        }


    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"></img>
                    <h1>Register</h1>
                    <p>Register yourself, join the platform and help people finding your ngo cases</p>

                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041"/> back to logon</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="NGO Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="Prov" value={province} onChange={e => setProv(e.target.value)} style={ { width: 100 } }/>
                    </div>

                    <button className="button" type="submit">Register</button>

                </form>
            </div>
        </div>
    )
}