export default () => {
    return (
        <div>
            <div className={"text-md text-base bg-slate-200 w-screen pt-16"}>
                <div className={"text-5xl font-light text-center tracking-wider leading-loose"}>Your Tap Events</div>

                <div className={"mt-5 flex space-x-8 justify-center"}>
                    <div className={"cursor-pointer"}>All</div>
                    <div className={"cursor-pointer text-blue-600"}>Upcoming</div>
                    <div className={"cursor-pointer"}>Past</div>
                </div>

                <div className={"mt-3 container mx-auto h-1 w-full border-b border-zinc-400"}></div>

                <div className={"pt-4 pb-4 container mx-auto"}>

                </div>

            </div>
        </div>
    )
}