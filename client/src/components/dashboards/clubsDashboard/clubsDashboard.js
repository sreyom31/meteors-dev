import ClubEventCard from "./clubEventCard";
import {useEffect, useState} from "react";
import {exportClubEvents} from "../../api/api";
import Footer from "../../reuse/footer";
import ReportForm from "./reportForm";
import {ToastContainer} from "react-toastify";
import ClubHeader from "./clubHeader";
import CreateEventPage from "./createEventPage";


export default () => {

    const [registeredEvents, setEventList] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState("");
    const [addEvent, setAddEvent] = useState(false);

    useEffect(() => {
        exportClubEvents(JSON.parse(localStorage.getItem('User')).id).then((res) => {
            if (res) {
                setEventList(res.data.results)
            }
        }).catch(err => console.log(err))
    }, [])

    const addNewEvent = () => {
        setAddEvent(prevState => !prevState);
    }

    return (
        <div>
            <div className={"h-screen"}>
                <div className={"py-4 clubDashBoard relative h-5/6"}>
                    <ClubHeader />
                    <div className={"container mx-auto h-4/5"}>
                        <div className={"text-center text-white tracking-widest text-5xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}>
                            We are India’s largest and fastest growing community of builders.
                            <div className={"mt-4"}>
                                <button className={"btn btn-blue mt-4 px-12 py-1 text-2xl"} onClick={addNewEvent}>Create Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"-mt-24 mb-20 container mx-auto"}>
                <p className={"text-cyan-700 tracking-widest text-4xl text-center pb-6 border-b-2 border-zinc-400 font-semibold"}>Club Events</p>
                <div className={"grid grid-cols-3 mt-16 px-2 gap-x-24 gap-y-16"}>
                    {registeredEvents.length?
                        <>
                            {registeredEvents.map(event => {
                                return (
                                    <ClubEventCard
                                        event={event}
                                        setEventId={setSelectedEventId}
                                    />
                                )
                            })}
                        </>
                        :
                        <></> }

                </div>
            </div>

            {addEvent?
                    <>
                        <div className={"fixed w-full h-screen top-0 left-0 gradient-modal"} onClick={()=>addNewEvent(false)}>
                        </div>
                        <div className={"fixed top-1/2 left-1/2 w-2/6 py-8 px-12 bg-slate-300 rounded-lg -translate-x-1/2 -translate-y-1/2"}>
                            <p className={"text-3xl font-semibold tracking-wider text-cyan-600 mt-2 mb-4 text-center"}>Let's Finish Up</p>
                            <CreateEventPage
                                setModal={addNewEvent}
                            />
                        </div>
                    </>
                :
                <></> }


            {selectedEventId?
                <>
                <div className={"fixed w-full h-screen top-0 left-0 gradient-modal"} onClick={()=>setSelectedEventId("")}>
                </div>

                <div className={"fixed top-1/2 left-1/2 py-6 px-4 bg-slate-300 rounded-lg -translate-x-1/2 -translate-y-1/2"}>
                    <ReportForm
                        eventId={selectedEventId}
                        setModal={setSelectedEventId}
                    />
                </div>
                </>

                : <></> }

            <Footer />
            <ToastContainer />
        </div>
    )
}