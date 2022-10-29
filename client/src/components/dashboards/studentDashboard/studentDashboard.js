import Header from "../../reuse/header";
import StudentRegisteredCard from "./student-registered-card";
import StudentPastEventCard from "./studentPastEventCard";
import StudentOdCards from "./studentOdCards";
import {useEffect, useState} from "react";
import {findRegisteredEvents} from "../../api/api";

export default() => {
    const [registeredEvents, setRegisteredEvents] = useState([])
    const [selectedEventId, setSelectedEventId] = useState("");

    useEffect(() => {
        findRegisteredEvents(JSON.parse(localStorage.getItem('User')).id).then((res) => {
            if (res) setRegisteredEvents(res.data.results)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className={"bg-slate-100 py-3 min-h-screen"}>
            <Header />

            <div className={"py-4 mt-24 container mx-auto"}>

                <div className={"text-center mb-12"}>
                    <span className={"text-2xl text-center text-cyan-700 pb-3 px-6 border-b border-cyan-700"}>Welcome back, {JSON.parse(localStorage.getItem("User")).name}</span>
                </div>
                <p className={"text-3xl font-semibold tracking-wide"}>Registered Events</p>

                <div className={"mt-8 grid grid-cols-3 px-4 gap-x-20"}>
                    {
                        registeredEvents.length ? registeredEvents.filter(event => event.event.isActive).map(
                            event => {
                                // console.log(event);
                                return (
                                    <StudentRegisteredCard event={event.event}/>
                                )
                            }
                            )
                            : <></>
                    }
                    {/*<StudentRegisteredCard />*/}
                    {/*<StudentRegisteredCard />*/}
                    {/*<StudentRegisteredCard />*/}
                </div>

                <div className={"mt-28 grid grid-cols-[2fr_1fr] gap-x-16"}>
                    <div>
                        <p className={"text-3xl font-semibold tracking-wide"}>Past Events</p>
                        <div className={"mt-5 grid grid-cols-3 gap-x-4"}>
                            {
                                registeredEvents.length ? registeredEvents.filter(event => !event.event.isActive&&event.isPresent).map(
                                        event => {
                                            return (
                                                <StudentPastEventCard
                                                    event={event.event}
                                                    setEventId={setSelectedEventId}
                                                />
                                            )
                                        }
                                    )
                                    : <></>
                            }

                            {/*<StudentPastEventCard />*/}
                            {/*<StudentPastEventCard />*/}
                            {/*<StudentPastEventCard />*/}
                        </div>
                    </div>
                    <div>
                        {selectedEventId.length?
                            <>
                                <p className={"text-3xl font-semibold tracking-wide"}>Apply ODs</p>
                                <StudentOdCards
                                    eventId={selectedEventId}
                                />
                            </>
                            :<></>}

                    </div>
                </div>

            </div>

        </div>
    )
}