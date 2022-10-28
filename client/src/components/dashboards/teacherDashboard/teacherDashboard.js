import Header from "../../reuse/header";
import OdRequestCard from "./odRequestCard";
import {useState} from "react";
import ReportReview from "./reportReview";

export default () => {

    const [type, setType] = useState("Od Request")

    const handleType = (e) => {
        document.getElementsByClassName("text-blue-600")[0].classList.remove("text-blue-600")
        e.target.classList.add("text-blue-600");
        setType(e.target.innerText);
        console.log(type);
    };

    return (
        <div className={"pt-24 bg-slate-100 min-h-screen"}>

            <Header />

            <div>
                <div className={"px-5 mt-5"}>

                    <p className={"text-4xl text-cyan-700 text-center"}>Welcome back, Faculty Name</p>

                    <div className={"mt-8 flex space-x-8 justify-center"}>
                        <div className={"cursor-pointer text-blue-600"} onClick={handleType}>Od Request</div>
                        <div className={"cursor-pointer" } onClick={handleType}>Reports</div>
                    </div>

                    <div className={"mt-3 mx-auto h-1 w-4/5 border-b border-zinc-400"}></div>

                    <p className={"mt-4 text-2xl text-gray-700 tracking-wider text-center"}>{type}</p>

                    <div className={"container mx-auto px-6"}>
                        {type === "Od Request"?
                            <>
                                <OdRequestCard />
                                <OdRequestCard />
                                <OdRequestCard />
                                <OdRequestCard />
                            </>:<>
                                <ReportReview />
                                <ReportReview />
                                <ReportReview />
                                <ReportReview />
                            </>}
                    </div>

                </div>

            </div>
        </div>
    )
}