import Header from "../../reuse/header";
import OdRequestCard from "./odRequestCard";
import {useEffect, useState} from "react";
import ReportReview from "./reportReview";
import {getFacultyOds, getFacultyReport} from "../../api/api";

export default () => {

    const [type, setType] = useState("Od Requests");
    const [odList, setOdList] = useState([]);
    const [reportList, setReportList] = useState([]);

    const handleType = (e) => {
        document.getElementsByClassName("text-blue-600")[0].classList.remove("text-blue-600")
        e.target.classList.add("text-blue-600");
        setType(e.target.innerText);
        console.log(type);
    };

    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem("User")).id);
        getFacultyOds(JSON.parse(localStorage.getItem("User")).id)
            .then(res=> {
                setOdList(res.data.results)
            })
            .catch(err=>console.log(err))

        getFacultyReport(JSON.parse(localStorage.getItem("User")).id)
            .then(res=> {
                setReportList(res.data.results)
            })
            .catch(err=>console.log(err))

    },[])

    return (
        <div className={"pt-24 page-gradient h-screen"}>

            <Header />

            <div>
                <div className={"px-5 mt-5"}>

                    <p className={"text-4xl text-cyan-700 text-center"}>Welcome back, {JSON.parse(localStorage.getItem("User")).name}</p>

                    <div className={"mt-8 flex space-x-8 justify-center"}>
                        <div className={"cursor-pointer text-blue-600"} onClick={handleType}>Od Requests</div>
                        <div className={"cursor-pointer" } onClick={handleType}>Reports</div>
                    </div>

                    <div className={"mt-3 mx-auto h-1 w-4/5 border-b border-zinc-400"}></div>

                    <p className={"mt-4 text-2xl text-gray-700 tracking-wider text-center"}>{type}</p>

                    <div className={"container mx-auto mt-16 px-6"}>
                        {(type === "Od Requests")?
                            <>
                            {(odList.length)?
                                odList
                                    .filter(od => od.status === "pending")
                                    .map(od => {
                                        console.log(od);
                                        return (
                                            <OdRequestCard
                                                event={od}
                                            />
                                        )
                                    }):<p>No Od Requests</p>}
                            </>:
                            <>
                                {(reportList.length)?
                                    reportList
                                        .filter(od => od.status === "pending")
                                        .map(od => {
                                            return (
                                                <ReportReview
                                                    event={od}
                                                />
                                            )
                                        }):<p>No Report Review Requests</p>}
                                {/*<ReportReview />*/}
                                {/*<ReportReview />*/}
                                {/*<ReportReview />*/}
                                {/*<ReportReview />*/}
                            </>}
                    </div>

                </div>

            </div>
        </div>
    )
}