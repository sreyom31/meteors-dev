export default () => {
    return (
        <div className={"border mt-4 px-8 py-3 rounded-md shadow-md shadow-gray-300 bg-gray-50 flex justify-between items-center"}>
            <div>BlockChain Club Srm</div>
            <div>For Event Name</div>
            <div>
                <span className={"text-lg text-green-600"}><a href={"#"} className={"btn btn-ghost px-4 py-1"}>Download Report</a></span>
                <span className={"text-lg text-red-600 ml-3"}><a href={"#"} className={"btn btn-ghost-red px-4 py-1"}>Decline</a></span>
                <span className={"text-lg text-green-600 ml-3"}><a href={"#"} className={"btn btn-ghost-green px-4 py-1"}>Accept</a></span>
            </div>
        </div>
    )
}