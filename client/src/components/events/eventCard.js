import clubImage from "../../images/logo.svg"

// export default () => {
//     return (
//         <div className={"px-3 pt-3 pb-8 shadow-md shadow-gray-300 rounded-lg bg-gray-50"}>
//             <div className={"flex mt-8 pt-2 pb-2 pl-4 pr-4 space-x-6 items-center"}>
//                 <div className={"ml-4 text-center border px-1 py-1 rounded-full border-gray-500"}>
//                     <img src={clubImage} alt={"Club Logo"} className={"w-16"}/>
//                 </div>
//                 <div>
//                     <p className={"text-3xl text-cyan-600"}>Heading</p>
//                     <p className={"text-slate-500"}>1243 Registered</p>
//                 </div>
//             </div>
//
//             <div className={"mt-20 ml-6 mr-6 mx-auto h-1 border-b border-zinc-400"}></div>
//
//             <div className={"mt-6 pl-6 pr-6 flex items-center"}>
//                 <div className={"ml-5 text-2xl"}>18 Nov 2022</div>
//                 <a href={"/events/eventId"} className={"ml-auto mr-8 py-4 px-5 text-blue-600 rounded-full border border-blue-600 duration-300 hover:bg-blue-600 hover:text-white"}>
//                     <i className="fa-solid fa-arrow-right"></i>
//                 </a>
//             </div>
//         </div>
//     )
// }

// import clubImage from "../../images/logo.svg"

export default (props) => {

    const event = props && props.event

    console.log(event);

    return (
        <div className={"px-3 pt-3 pb-8 shadow-md card-gradient rounded-lg card-gradient"}>
            <div className={"flex mt-8 pt-2 pb-2 pl-4 pr-4 space-x-6 items-center"}>
                <div className={"ml-4 text-center border px-1 py-1 rounded-full border-gray-500"}>
                    <img src={clubImage} alt={"Club Logo"} className={"w-16"}/>
                </div>
                <div>
                    <p className={"text-3xl text-cyan-600"}>{event.slug}</p>
                    <p className={"text-slate-500"}>Seats Available: {event.availableCount}</p>
                </div>
            </div>


            <div className={"ml-6 mr-6 mt-16 text-gray-700"}>Venue: {event.venue}</div>

            <div className={"mt-1 ml-6 mr-6 mx-auto h-1 border-b border-zinc-400"}>

            </div>

            {/*<div className={"mt-20 max-auto h-1 border-b border-zinc-400"}>*/}
            {/*    Venue: {event.venue}*/}
            {/*</div>*/}

            <div className={"mt-6 pl-6 pr-6 flex items-center"}>
                <div className={"ml-5 text-2xl"}>{event.date}</div>
                <a href={`/events/${event.id}`} className={"ml-auto mr-8 py-4 px-5 text-blue-600 rounded-full border border-blue-600 duration-300 hover:bg-blue-600 hover:text-white"}>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    )
}