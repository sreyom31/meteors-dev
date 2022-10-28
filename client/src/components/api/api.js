import axios from "axios";

// const url = "http://localhost:5000"
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

export const getSingleEvent = async (id) => {
    return await axios.get(url+"/events/"+id, config)
}

export const checkIsRegistered = async (userId, eventId) => {
    return await axios.get(url+`/registrations/?user=${userId}&event=${eventId}`, config);
}

export const findRegisteredEvents = async (userId) => {
    return await axios.get(url+`/registrations/?user=${userId}`, config)
}

export const getEventOdData = async (userId, eventId) => {
    return await axios.get(url+`/odrequests/?user=${userId}&event=${eventId}`, config)
}

export const registerEvent = async (userId, eventId) => {
    const formData = {
        user: userId,
        event: eventId,
    }

    console.log(formData);

    return await axios.post(url+"/registrations/", formData, config);
}