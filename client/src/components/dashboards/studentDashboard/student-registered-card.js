import clubImage from "../../../images/logo.svg";

export default () => {
    return (
        <div className={"bg-gray-50 shadow-md pl-4 pr-4 py-2 shadow-gray-300"}>
            <div className={"flex mt-2 pt-2 pb-4 border-b space-x-6 items-center"}>
                <div className={"ml-4 text-center border px-1 py-1 rounded-full border-gray-500"}>
                    <img src={clubImage} alt={"Club Logo"} className={"w-16"}/>
                </div>
                <div>
                    <p className={"text-3xl text-cyan-600"}>Heading</p>
                    <p className={"text-slate-500"}>1243 Registered</p>
                </div>
            </div>
            <div className={"ml-4 mt-2"}>
                <div className={"text-cyan-600 text-lg mb-1"}>11 Sept 2022</div>
                <div className={"text-gray-700"}>Tp 401 @ 9:00 - 13:00 </div>
                <div className={"text-cyan-600 mt-8 text-xl tracking-wide"}>BlockChain Club</div>
            </div>
        </div>
    )
}