import React, { use, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const user = "moises";
    const pass = "kelly";

    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleAttempts = () => {
        if (counter < 3) {
            if (password === pass && username === user) {
                alert("Si se pudo");
                navigate('/home')
            } else {
                alert("Inválido");
                setCounter(counter + 1);
            }
        } else {
            alert("Intentos quemados");
        }
    };

    return (
        <div className='container-fluid d-flex mt-5 gap-3 row d-flex justify-content-center align-items-center'>
            <div className='mt-5 gap-3 col-4 justify-content-center align-items-center bg-secondary p-4'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address de {user}</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleFormControlInput2" 
                        placeholder="******" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleAttempts} className="mt-4 btn btn-primary">
                    Entrar
                </button>
            </div>
        </div>
    );
};
