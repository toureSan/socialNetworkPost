import React, {useState} from 'react'; 
import axios from 'axios'; 

export default function AuthForm ({role, history}){
    const [Usernanme, setUsernanme] = useState(''); 
    const [password, setPassword] = useState(''); 
   

    const handleChange = e => {
       setUsernanme(
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
        axios.post(`https://strapi-crea.5ika.org/auth/local`, {Usernanme, password})
           
             .then(
                 res => {
               
                     localStorage.setItem("token",res.data.token);
                     history.push('/posts');
                    }
            )

            .catch(err => console.log(err))    
    }

    return ( 
        <div>
            <h1>please {role}</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    field='Usernanme'
                    value={Usernanme}
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