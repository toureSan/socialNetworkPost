import axios from 'axios';

const axiosWithAuth = () => {

    
    const data = localStorage.getItem('data');
    
    return axios.create({
        baseURL: "",
        headers: {
            authorization: `Bearer ${data.jwt}`,
            
        }

    })

}
export default axiosWithAuth;


