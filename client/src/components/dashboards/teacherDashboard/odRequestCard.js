import {downloadApi, markOd} from "../../api/api";
import {capitalize} from "../../captalize";

export default (props) => {

    const acceptOd = () => {
        markOd(props.event.id, {status: 'approved'})
            .then(res=> {
                console.log(res.data)
                window.location.reload();
            })
            .catch(err => console.log(err));

    }

    const rejectOd = () => {
        markOd(props.event.id, {status: 'rejected'}).then(res=> {
            console.log(res.data)
            window.location.reload();
        }).catch(err => console.log(err));

    }

    // const downloadProof = () => {
    //     downloadApi(props.event.id).then(res => console.log(res)).catch(err=>console.log(err));
    // }

    return (
        <div className={"border-b border-sky-400 mt-6 px-8 pb-4 shadow-gray-300 flex justify-between items-center"}>
            <div>{capitalize(props.event.user.name)}</div>
            <div>Event Name: {capitalize(props.event.event.slug)}</div>
            <div>{capitalize(props.event.description)}</div>
            <div>
                {/*<span className={"text-lg text-green-600"}><button className={"btn btn-ghost px-4 py-1"} onClick={downloadProof}>Download Proof</button></span>*/}
                <span className={"text-lg text-green-600"}><a className={"btn btn-ghost px-4 py-1"} href={"http://44.204.83.105/odrequests/downloads/"+props.event.id} download>Download Proof</a></span>
                <span className={"text-lg text-red-600 ml-3"}><button className={"btn btn-ghost-red px-4 py-1"} onClick={rejectOd}>Decline</button></span>
                <span className={"text-lg text-green-600 ml-3"}><button className={"btn btn-ghost-green px-4 py-1"} onClick={acceptOd}>Accept</button></span>
            </div>
        </div>
    )
}