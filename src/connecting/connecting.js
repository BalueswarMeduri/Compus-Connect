import axios from "axios";

const baseURL = String(import.meta.env.VITE_URI);


const apiClient = axios.create({
    baseURL : baseURL,
    headers:{
        "authorization" : `Bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'application/json'
    }
});

const handleApiResponse = (apiCall) => {
    return new Promise((resolve, reject) => {
        apiCall
            .then((res) => resolve(res.data))
            .catch((error) => {
                reject(error);
            });
    });
};

export const sendMail = (credentials) => handleApiResponse(
     apiClient.post(`${baseURL}/email/send-mail`, {...credentials})
);

export const getUserEmails = () => handleApiResponse(
    apiClient.get(`${baseURL}/email/mails`)
);