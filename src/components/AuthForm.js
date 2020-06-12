import React, {useState} from 'react'; 
import axios from 'axios'; 

export default function AuthForm ({role}){
    const [identifier, setIdentifier] = useState(''); 
    const [password, setPassword] = useState(''); 
   

    const handleChange = e => {
       setIdentifier(
           e.target.value
       )
    }

    const handleChangePassword = e => {
        setPassword(
            e.target.value
        )
    }
   
    const handleSubmit = e =>{ 
        e.preventDefault();
        axios.post(`https://strapi-crea.5ika.org/auth/local`, {identifier, password})
           
             .then(
                 res => {JSON.stringify(localStorage.setItem('data',res));}
                )
            .catch(err => console.log(err))    
    }

    return ( 
        <div>
            <h1>please {role}</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    field='identifier'
                    value={identifier}
                    onChange={handleChange}
                    placeholder="votre nom"
                    />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword} 
                    />
                    <button onClick={handleSubmit}>Connection</button>
            </form>

        </div>
    )
}