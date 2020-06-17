import axios from 'axios';

const axiosWithAuth = () => {

    
    const data = JSON.parse(localStorage.getItem('data')) ;
    
    
    return axios.create({
        baseURL: "",
        headers: {
            authorization: `Bearer ${data.jwt}`,
            
        }

    })

}
export default axiosWithAuth;


