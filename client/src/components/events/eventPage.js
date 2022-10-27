import EventCard from "./eventCard";

export default () => {
    return (
        <div>
            <div className={"text-md text-base bg-slate-200 w-full"}>
                <div className={"text-5xl font-light text-center tracking-wider leading-loose"}>Your Tap Events</div>

                <div className={"mt-5 flex space-x-8 justify-center"}>
                    <div className={"cursor-pointer"}>All</div>
                    <div className={"cursor-pointer text-blue-600"}>Upcoming</div>
                    <div className={"cursor-pointer"}>Past</div>
                </div>

                <div className={"mt-3 container mx-auto h-1 w-full border-b border-zinc-400"}></div>

                <div className={"py-4 mt-6 px-8 container mx-auto grid grid-cols-3 gap-x-24 gap-y-16"}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>

            </div>
        </div>
    )
}