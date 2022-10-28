import HomeHeader from "./homeHeader";

export default () => {
    return (
        <section className={"pt-4 pb-24 w-full h-3/4 bg-zinc-300 top-section"}>
            <HomeHeader />
            <div className={"mx-auto container flex items-center py-32"}>
                <div className={"flex-1"}>
                    <div className={"text-4xl mb-8"}>Hi, there</div>
                    <div className={"text-6xl tracking-wider font-bold text-black"}>Team Meteors a one step solution to all events</div>
                    <div className={"mt-8"}>
                        <a href={"/events"} className={"btn btn-ghost mt-8 py-3 px-16 font-bold text-xl tracking-widest"}>Events</a>
                    </div>
                </div>

                <div className={"flex-1 ml-12"}>
                    <div className={"h-96 w-96 relative rounded-full bg-cyan-700 " +
                        "before:content-[''] before:h-72 before:w-72 before:absolute before:bg-orange-300 " +
                        "before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:z-[-1] before:rounded-full"}>

                    </div>
                </div>
            </div>
        </section>
    )
}