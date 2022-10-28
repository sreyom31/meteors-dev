import axios from "axios";

const url = "http://44.204.83.105"

const config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("Token")
    }
}

export const loginUser = async (formData) => {
    return await axios.post(url+'/auth/login', formData);
}

export const createUser = async (formData) => {
    console.log(formData)
    return await axios.post(url+'/auth/register', formData);
}

export const getAllEvents = async () => {
    return await axios.get(url+"/events/", config);
}