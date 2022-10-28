export default () => {

    return (
        <div className={"container mx-auto py-2 px-8 rounded-xl grid grid-cols-3 items-center"}>
            <div className={"text-4xl tracking-widest text-cyan-600 uppercase"}><a href={"/"}>Blitz</a></div>
            <ul className={"list-none flex justify-center space-x-8"}>
                <li><a href={"/"} className={"pb-1 px-3 border-b border-b-transparent duration-300 hover:border-b-cyan-600 hover:text-cyan-600"}>Home</a></li>
                <li><a href={"/events"} className={"pb-1 px-3 border-b border-b-transparent duration-300 hover:border-b-cyan-600 hover:text-cyan-600"}>Events</a></li>
                <li><a href={"/dashboard"} className={"pb-1 px-3 border-b border-b-transparent duration-300 hover:border-b-cyan-600 hover:text-cyan-600"}>Dashboard</a></li>
            </ul>
            <div className={"space-x-4 text-right"}>
                <a className={"btn-blue btn py-2 px-6"} href={"/signup"}>Register</a>
                <a className={"btn btn-ghost py-2 px-6"} href={"/login"}>Sign In</a>
            </div>
        </div>
    )
}