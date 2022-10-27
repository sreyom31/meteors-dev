export default () => {
    return (
        <div className={"pb-3 rounded-xl bg-gray-50"}>
            <div className={"rounded-t-xl h-60 bg-event-img bg-no-repeat bg-cover bg-center"}></div>

            <div className={"flex mt-4 pt-2 pb-2 pl-4 pr-4 space-x-6 items-center"}>
                <div className={"ml-4 text-center border px-5 py-1 rounded-full border-gray-500"}>
                    <p className={"text-blue-800 text-2xl"}>4</p>
                    <p>Oct</p>
                </div>
                <div>
                    <p className={"text-3xl text-cyan-600"}>Heading</p>
                    <p className={"text-slate-500"}>1243 Registered</p>
                </div>
            </div>

            <div className={"mt-4 ml-6 mr-6 mx-auto h-1 border-b border-zinc-400"}></div>

            <div className={"mt-3 pl-6 pr-6 flex items-center"}>
                <div className={"ml-5 text-2xl"}>Bc Club</div>
                <a href={"/events/eventId"} className={"ml-auto mr-8 py-4 px-5 text-blue-600 rounded-full border border-blue-600 duration-300 hover:bg-blue-600 hover:text-white"}>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    )
}