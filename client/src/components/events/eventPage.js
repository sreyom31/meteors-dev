import EventCard from "./eventCard";
import Header from "../reuse/header";
import Footer from "../reuse/footer";
import {useEffect, useState} from "react";
import {getAllEvents} from "../api/api";

export default () => {

    const [eventsData, setEventsData] = useState([]);

    useEffect(()=>{
        getAllEvents()
            .then(res => {
                if(res) {
                    setEventsData(res.data.results);
                    console.log(res.data.results);
                }
        }).catch(err => {
            console.log(err);
        })
    }, []);

    let eventHtml = ""

    if(eventsData.length) {
        eventHtml = eventsData.map(event => {
            return (
                <EventCard event={event}/>
            )
        })
        console.log(eventHtml);
    }

    return (
        <div>
            <div className={"text-md text-base bg-slate-200 pt-3 w-full h-screen"}>

                <Header />

                <div className={"text-5xl mt-24 font-light text-center tracking-wider leading-loose"}>Your Tap Events</div>

                <div className={"mt-3 mx-auto h-1 w-4/5 border-b border-zinc-400"}></div>

                <div className={"py-4 mt-10 px-16 container mx-auto grid grid-cols-3 justify-center gap-x-24 gap-y-16"}>
                    {
                        eventsData.length?
                            eventsData.map((event) => {
                                return (
                                    <EventCard event={event} />
                                )
                            })
                            :<></>
                    }

                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                    {/*<EventCard />*/}
                </div>

                {/*<Footer />*/}

                <Footer />

            </div>
        </div>
    )
}