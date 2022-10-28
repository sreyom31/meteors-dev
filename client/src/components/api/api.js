import axios from "axios";

// const url = "http://localhost:5000"
const url = "http://44.204.83.105"

let config;

const setAuth = () => {
    config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("Token")
        }
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
    setAuth();
    return await axios.get(url+"/events/", config);
}

export const getSingleEvent = async (id) => {
    setAuth();
    return await axios.get(url+"/events/"+id, config)
}

export const checkIsRegistered = async (userId, eventId) => {
    setAuth();
    return await axios.get(url+`/registrations/?user=${userId}&event=${eventId}`, config);
}

export const findRegisteredEvents = async (userId) => {
    setAuth();
    return await axios.get(url+`/registrations/?user=${userId}`, config)
}

export const getEventOdData = async (userId, eventId) => {
    setAuth();
    return await axios.get(url+`/odrequests/?user=${userId}&event=${eventId}`, config)
}

export const getFacultyOds = async (id) => {
    setAuth();
    return await axios.get(url+'/odrequests/?faculty='+id, config);
}

export const getFacultyReport = async (id) => {
    setAuth();
    return await axios.get(url+'/reports/?faculty='+id, config);
}

export const makeOdRequest = async (formData) => {

    config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("Token"),
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Content-Type': 'multipart/form-data',
        }
    }

    return await axios.post(url+'/odrequests', formData, config);
}

export const makeReportRequest = async (formData) => {

    config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("Token"),
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Content-Type': 'multipart/form-data',
        }
    }

    return await axios.post(url+'/reports', formData, config);
}

export const markOd = async (id, data) => {
    setAuth();
    return await axios.patch(url+"/odrequests/"+id, data, config)
}

export const markReport = async (id, data) => {
    setAuth();
    return await axios.patch(url+"/reports/"+id, data, config)
}

export const getALlUsers = async () => {
    setAuth();
    return await axios.get(url+"/users/", config);
}

export const registerEvent = async (userId, eventId) => {
    setAuth();
    const formData = {
        user: userId,
        event: eventId,
    }

    console.log(formData);

    return await axios.post(url+"/registrations/", formData, config);
}

export const exportClubEvents = async (clubId) => {
    setAuth();
    return await axios.get(url+`/events/?hostingClub=${clubId}`, config)
}