import {useEffect, useState} from "react";
import {getALlUsers, makeReportRequest} from "../../api/api";
import {toast} from "react-toastify";

export default (props) => {

    const [formData, setFromData] = useState({
        user: JSON.parse(localStorage.getItem('User')).id,
        event: props.eventId,
        title: "",
        description: "",
        faculty:"",
        report:"",
    })

    const [facultyList, setFacultyList] = useState([])

    const handleChange = (e) => {
        setFromData(prevState => {

            if(e.target.type === "file") {
                return {
                    ...prevState,
                    'report': e.target.files[0],
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
        makeReportRequest(formData).then(res => {
            if(res) {
                toast("Report Request Made");
                props.setModal("");
            }
        }).catch(err => console.log(err));
    }

    useEffect(()=>{
        getALlUsers().then(res=>setFacultyList(res.data.results)).catch(err => console.log(err));
    }, [])

    return (
        <div className={"py-3 px-4"}>
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
                    name={"report"}
                    type={"file"}
                    onChange={handleChange}
                    className={"inputFieldClass"}
                />

                <button className={"btn btn-blue w-full mt-4 py-3"} type={"submit"}>Upload Report</button>

            </form>
        </div>
    )
}