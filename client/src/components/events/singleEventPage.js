import eventImage from "../../images/Recruitments poster.psd.png"
import Header from "../reuse/header";

export default () => {
    return (
        <div className={"bg-slate-300 py-4  h-screen flex justify-center items-center"}>

            <Header />

            <div className={"pl-5 w-4/6 rounded-3xl h-4/6 flex bg-gray-50 shadow-md shadow-gray-300"}>

                <div className={"flex-1 flex items-center my-24 px-16 py-6"}>
                    <div>
                        <div className={"flex justify-between items-center"}>
                            <p className={"text-3xl font-semibold tracking-wider"}>Event Name</p>
                            <p className={"text-xl font-normal text-cyan-600"}>By Blockchain Club Srm</p>
                        </div>

                        <div className={"mt-6 text-gray-600"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu augue arcu. Nam non ornare velit. Fusce placerat sapien a quam rhoncus efficitur. Aenean ligula lacus, egestas ut dignissim eget, ornare ac urna. Duis a quam eget velit ullamcorper gravida id convallis lectus. Donec commodo lectus metus, quis condimentum justo vestibulum a. Cras accumsan nunc vel justo congue, sit amet convallis nisi dapibus. Curabitur egestas massa quis nulla scelerisque, id aliquam odio euismod. Nulla sem felis, te
                        </div>

                        <div className={"mt-12 pb-2 border-b border-zinc-400"}>
                            <div className={"flex pr-8 justify-between items-center text-cyan-600"}>
                                <span>13 Sept 2022</span>
                                <span>T401 @ 9:00 - 13:00</span>
                                <span className={"text-green-600"}>Free Registration</span>
                            </div>
                        </div>

                        <div className={"mt-4 text-xl text-orange-600"}>Limited Seats Only</div>

                        <div className={"mt-8"}>
                            <a href={"#"} className={"btn btn-blue px-16 py-3"}>Register</a>
                        </div>
                    </div>

                </div>

                <div className={"flex-1 flex justify-end rounded-r-3xl"}>
                        <img src={eventImage} alt={"Event Poster"} className={"rounded-r-3xl"}/>
                </div>

            </div>
        </div>
    )
}