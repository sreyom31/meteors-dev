import {useEffect, useState} from "react";
import {getEventOdData} from "../../api/api";

export default (props) => {

    const [odStatus, setOdStaus] = useState(false);

    useEffect(()=>{
        getEventOdData(JSON.parse(localStorage.getItem("User")).id, event.id)
            .then(res => setOdStaus(res.data.results[0].status))
            .catch(err => console.log(err));
    }, [])

    const event = props.event;


    return (
        <div className={"py-6 px-3 bg-gray-50 rounded-md shadow-md shadow-gray-300"}>
            <p className={"text-2xl text-center text-cyan-600 border-b pb-3"}>{event.slug}</p>

            <p className={"text-xl mt-4"}>{event.date}</p>
            <div className={"mt-1 text-gray-500"}>
                <span className={"mr-4"}>{event.venue}</span>
                <span>{event.time}</span>
            </div>

            <div className={"mt-8 text-cyan-600"}>
                <span className={"mr-4"}>Attended</span>
                <span>OD {odStatus}</span>
            </div>
            <a href={"#"} className={"btn mt-5 block text-center btn-blue w-full py-2"}>Download Certificate</a>

        </div>
    )
}