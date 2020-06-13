import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('jwt');
    return axios.create({
        baseURL: "",
        headers: {
            autorization: token
        }
    })

}
export default axiosWithAuth;


