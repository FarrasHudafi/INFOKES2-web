// import axios from 'axios';
const { default: axios } = require("axios");


const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL: 'https://infokes2-1.onrender.com/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
 
})
const getCategory = () => axiosClient.get('/categories?populate=*');

const getDoctorList = () => axiosClient.get('/doctors?populate=*')

const getDoctorByCategory=(category)=>axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*")

const getDoctorById=(id)=>axiosClient.get('/doctors/'+id+'?populate=*')

const BookAppoinment = (data) => axiosClient.post('/appointments',data);

    const sendEmail=(data)=>axios.post('/api/sendEmail',data);

    // const getUserBookingList=(userEmail)=>axiosClient.get('/appointments?[filters][Email][$eq]='+userEmail+"&populate=[doctor][populate][image][populate][0]=url&populate=*");
const getUserBookingList = (userEmail) => {
    const url = `/appointments?filters[Email][$eq]=${encodeURIComponent(userEmail)}&populate=doctor.image`;
    // console.log("Requesting URL:", url);
    return axiosClient.get(url);
};

const deleteBooking =(documentId)=>axiosClient.delete('/appointments/'+documentId)


export default {
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    BookAppoinment,
    sendEmail,
    getUserBookingList,
    deleteBooking
}