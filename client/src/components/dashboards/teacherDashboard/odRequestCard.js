import {downloadApi, markOd} from "../../api/api";

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
        <div className={"border mt-4 px-8 py-3 rounded-md shadow-md shadow-gray-300 bg-gray-50 flex justify-between items-center"}>
            <div>{props.event.title}</div>
            <div>{props.event.description}</div>
            <div>Event Name: {props.event.event.slug}</div>
            <div>
                {/*<span className={"text-lg text-green-600"}><button className={"btn btn-ghost px-4 py-1"} onClick={downloadProof}>Download Proof</button></span>*/}
                <span className={"text-lg text-green-600"}><a className={"btn btn-ghost px-4 py-1"} href={"http://44.204.83.105/odrequests/downloads/"+props.event.id} download>Download Proof</a></span>
                <span className={"text-lg text-red-600 ml-3"}><button className={"btn btn-ghost-red px-4 py-1"} onClick={rejectOd}>Decline</button></span>
                <span className={"text-lg text-green-600 ml-3"}><button className={"btn btn-ghost-green px-4 py-1"} onClick={acceptOd}>Accept</button></span>
            </div>
        </div>
    )
}