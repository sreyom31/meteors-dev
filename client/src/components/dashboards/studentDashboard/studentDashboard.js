import Header from "../../reuse/header";
import clubImage from "../../../images/logo.svg";
import StudentRegisteredCard from "./student-registered-card";
import StudentPastEventCard from "./studentPastEventCard";
import StudentOdCards from "./studentOdCards";

export default() => {
    return (
        <div className={"bg-slate-100 py-3 min-h-screen"}>
            <Header />

            <div className={"py-4 mt-24 container mx-auto"}>
                <p className={"text-3xl font-semibold tracking-wide"}>Registered Events</p>

                <div className={"mt-8 grid grid-cols-3 px-4 gap-x-20"}>
                    <StudentRegisteredCard />
                    <StudentRegisteredCard />
                    <StudentRegisteredCard />
                </div>

                <div className={"mt-28 grid grid-cols-[2fr_1fr] gap-x-16"}>
                    <div>
                        <p className={"text-3xl font-semibold tracking-wide"}>Past Events</p>
                        <div className={"mt-5 grid grid-cols-3 gap-x-12"}>
                            <StudentPastEventCard />
                            <StudentPastEventCard />
                            <StudentPastEventCard />
                        </div>
                    </div>
                    <div>
                        <p className={"text-3xl font-semibold tracking-wide"}>Apply ODs</p>
                        <div className={"mt-5"}>
                            <StudentOdCards />
                            <StudentOdCards />
                            <StudentOdCards />
                            <StudentOdCards />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}