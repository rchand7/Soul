import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://arjunmatrimonial7.netlify.app/',
});

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;
