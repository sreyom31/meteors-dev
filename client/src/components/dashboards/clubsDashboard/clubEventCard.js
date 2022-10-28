import clubImage from "../../../images/logo.svg"

export default (props) => {

    const event = props.event;

    const handleReport = () => {
        props.setEventId(event.id)
    }

    return (
        <div className={"px-3 pt-3 pb-8 shadow-md shadow-gray-300 rounded-lg bg-zinc-300"}>
            <div className={"flex mt-8 pt-2 pb-2 pl-4 pr-4 space-x-6 items-center"}>
                <div className={"ml-4 text-center border px-1 py-1 rounded-full border-gray-500"}>
                    <img src={clubImage} alt={"Club Logo"} className={"w-16"}/>
                </div>
                <div>
                    <p className={"text-3xl text-cyan-600"}>{event.slug}</p>
                    <p className={"text-slate-500"}>Registerd {event.maxCount - event.availableCount}</p>
                </div>
            </div>

            <div className={"mt-20 ml-6 mr-6 mx-auto h-1 border-b border-zinc-400"}></div>

            <div className={"mt-6 pl-6 pr-6 flex items-center"}>
                <div className={"ml-5 text-2xl"}>{event.date}</div>
                {(!event.isActive)?<button className={"btn btn-ghost px-6 py-2 ml-auto"} type={"submit"} onClick={handleReport}>Upload Report</button>: <></> }
            </div>
        </div>
    )
}