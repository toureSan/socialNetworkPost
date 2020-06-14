import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('data');
    return axios.create({
        baseURL: "",
        headers: {
            autorization: token
        }
    })

}
export default axiosWithAuth;


