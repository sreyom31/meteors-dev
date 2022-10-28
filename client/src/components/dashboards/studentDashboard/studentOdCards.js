import {useEffect, useState} from "react";
import {getALlUsers, makeOdRequest} from "../../api/api";
import {toast, ToastContainer} from "react-toastify";

export default (props) => {

    const [formData, setFromData] = useState({
        user: JSON.parse(localStorage.getItem('User')).id,
        event: props.eventId,
        title: "",
        description: "",
        faculty:"",
        od:"",
    })

    const [facultyList, setFacultyList] = useState([])

    const handleChange = (e) => {
        setFromData(prevState => {

            if(e.target.type === "file") {
                    return {
                        ...prevState,
                        'od': e.target.files[0],
                    }
                }
            else {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value.trim(),
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        makeOdRequest(formData).then(res => {
            if(res) toast("Od Request Made")
        }).catch(err => console.log(err));
    }

    useEffect(()=>{
        getALlUsers().then(res=>setFacultyList(res.data.results)).catch(err => console.log(err));
    }, [])

    return (
        <div className={"mt-5"}>
            <form onSubmit={handleSubmit}>
                <input
                    name={"title"}
                    placeholder={"title"}
                    value={formData.title}
                    onChange={handleChange}
                    className={"inputFieldClass"}
                />
                <input
                    name={"description"}
                    placeholder={"description"}
                    value={formData.description}
                    onChange={handleChange}
                    className={"inputFieldClass"}
                />
                <select
                    name={"faculty"}
                    placeholder={"faculty"}
                    value={formData.faculty}
                    onChange={handleChange}
                    className={"inputFieldClass"}
                >
                    <option>Select A Faculty</option>
                    {facultyList.filter(fac => fac.role === "faculty").map(fac => {
                        return (
                            <option value={fac.id}>{fac.name}</option>
                        )
                    })}
                </select>
                <input
                    name={"od"}
                    type={"file"}
                    onChange={handleChange}
                    className={"inputFieldClass"}
                />

                <button className={"btn btn-blue w-full mt-3 py-3"} type={"submit"}>Request Od</button>

            </form>

            <ToastContainer />
        </div>
    )
}