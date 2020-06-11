import React, {useState} from 'react'; 
import axios from 'axios'; 

export default function AuthForm ({role}){
    const [authInfo, setAuthInfo] = useState({
        username: "", 
        password:""
    })

    const handleChange = e => {
       setAuthInfo({
           ...authInfo,
           [e.target.name]: e.target.value
       })
    }
   
    const handleSubmit = e =>{
        
        e.prevenDefault();
        console.log(authInfo)
        axios.post(`https://strapi-crea.5ika.org/auth/${role}`, authInfo)
            .then(res =>
           localStorage.setItem("token", res.data.token)
            )
            .catch(err => console.log(err))    
            
    }
    return ( 
        <div>
            <h1>please {role}</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    name="username"
                    value={authInfo.username}
                    onChange={handleChange}
                    placeholder="votre nom"
                    />
                <input
                    name="password"
                    type="password"
                    value={authInfo.password}
                    onChange={handleChange} 
                    />
                    <button type="submit">Connection</button>
                    
            </form>
        </div>
    )
}