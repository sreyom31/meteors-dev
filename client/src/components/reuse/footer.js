export default () => {
    return (
        <div>
            <div className={"mt-6 mx-auto h-1 w-4/5 border-b border-zinc-400"}></div>

            <div className={"flex py-8 text-xl  px-8 container mx-auto justify-between"}>
                <div className={"font-semibold text-cyan-600"}>
                    Meteors © 2022.
                </div>
                <ul className={"list-none font-bold flex space-x-10 text-cyan-700"}>
                    <li><a href={""} className={"duration-300 hover:text-red-400"}><i className="fa-brands fa-google"></i></a></li>
                    <li><a href={""} className={"duration-300 hover:text-red-400"}><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href={""} className={"duration-300 hover:text-red-400"}><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href={""} className={"duration-300 hover:text-red-400"}><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>

        </div>

    )
}