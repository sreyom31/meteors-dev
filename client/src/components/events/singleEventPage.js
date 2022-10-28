import eventImage from "../../images/Recruitments poster.psd.png"
import Header from "../reuse/header";
import {useEffect, useState} from "react";
import {checkIsRegistered, getSingleEvent, registerEvent} from "../api/api";
import {ToastContainer, toast} from "react-toastify";

export default (match) => {

    const [event, setEvent] = useState();
    const [isRegisterd, setIsRegistered] = useState(false);

    useEffect(() => {
        getSingleEvent(match.match.params.id)
            .then(res=>{
                if(res.data) {
                    // console.log(res.data);
                    setEvent(res.data);
                }
            })
            .catch(err => {console.log(err)})

        checkIsRegistered(JSON.parse(localStorage.getItem("User")).id, match.match.params.id)
            .then(res => {
                if(res.data.results.length) {
                    setIsRegistered(true);
                }
            }).catch(err => console.log(err));

    }, [])

    const handleRegister = () => {
        registerEvent(JSON.parse(localStorage.getItem("User")).id, match.match.params.id).then(res=>{
            if(res) {
                toast("Event Registration Successful");
                setIsRegistered(true);
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className={"bg-slate-300 py-4  h-screen flex justify-center items-center"}>

            <Header />

            <div className={"pl-5 w-4/6 rounded-3xl h-4/6 flex bg-gray-50 shadow-md shadow-gray-300"}>

                {event?<div className={"flex-1 flex items-center my-24 px-16 py-6"}>
                        <div>
                            <div className={"flex justify-between items-center"}>
                                <p className={"text-3xl font-semibold tracking-wider"}>{event.slug}</p>
                                <p className={"text-xl font-normal text-cyan-600"}>{event.hostingClub.name}</p>
                            </div>

                            <div className={"mt-6 text-gray-600"}>
                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu augue arcu. Nam non ornare velit. Fusce placerat sapien a quam rhoncus efficitur. Aenean ligula lacus, egestas ut dignissim eget, ornare ac urna. Duis a quam eget velit ullamcorper gravida id convallis lectus. Donec commodo lectus metus, quis condimentum justo vestibulum a. Cras accumsan nunc vel justo congue, sit amet convallis nisi dapibus. Curabitur egestas massa quis nulla scelerisque, id aliquam odio euismod. Nulla sem felis, te*/}
                                {event.desc}
                            </div>

                            <div className={"mt-12 pb-2 border-b border-zinc-400"}>
                                <div className={"flex pr-8 justify-between items-center text-cyan-600"}>
                                    <span>{event.date}</span>
                                    <span>{event.venue}</span>
                                    <span className={"text-green-600"}>Free Registration</span>
                                </div>
                            </div>

                            <div className={"mt-4 text-xl text-orange-600"}>Limited Seats Only</div>

                            <div className={"mt-8"}>
                                {(isRegisterd)?
                                    <div className={"text-2xl text-red-600"}>Already Registered</div>
                                    :(JSON.parse(localStorage.getItem('User')).role === 'club')?
                                        <div className={"text-2xl text-red-600"}>Clubs Can't Register</div>:
                                        <button className={"btn btn-blue px-16 py-3"} onClick={handleRegister}>Register</button>}

                            </div>
                        </div>

                    </div>
                    :<></>}


                <div className={"flex-1 flex justify-end rounded-r-3xl"}>
                        <img src={eventImage} alt={"Event Poster"} className={"rounded-r-3xl"}/>
                </div>

            </div>

            <ToastContainer />

        </div>
    )
}