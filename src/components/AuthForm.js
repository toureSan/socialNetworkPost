import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 

export default function AuthForm ({role}){
    const [jwt, setJwt] = useState({
        identifier: "", 
        password:""
    })
    const [user, setUser] = useState([]);

    const handleChange = e => {
        setJwt({
           ...jwt,
           [e.target.name]: e.target.value
       })
    }
   
    const handleSubmit = e =>{
        
      
        console.log(jwt)
        axios.post(`https://strapi-crea.5ika.org/auth/local${role}`, jwt)
            .then(res => {
            setJwt(res.data.jwt); 
            setUser(res.data.user); 
            })
            .catch(err => console.log(err))    
            
    }

    useEffect(() =>{
        handleSubmit();
    });
    
    return ( 
        <div>
            <h1>please {role}</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    name="username"
                    type="text"
                    value={jwt.identifier}
                    onChange={handleChange}
                    placeholder="votre nom"
                    />
                <input
                    name="password"
                    type="password"
                    value={jwt.password}
                    onChange={handleChange} 
                    />
                    <button type="submit">Connection</button>
                    
            </form>
        </div>
    )
}