export default () => {
    return (
        <div className={"py-6 px-3 bg-gray-50 rounded-md shadow-md shadow-gray-300"}>
            <p className={"text-2xl text-center text-cyan-600 border-b pb-3"}>Heading</p>

            <p className={"text-xl mt-4"}>13 Sept 2022</p>
            <div className={"mt-1 text-gray-500"}>
                <span className={"mr-4"}>Tp 401</span>
                <span>9:00 - 13:00</span>
            </div>

            <div className={"mt-8 text-cyan-600"}>
                <span className={"mr-4"}>Attended</span>
                <span>OD Provided</span>
            </div>
            <a href={"#"} className={"btn mt-5 block text-center btn-blue w-full py-2"}>Download Certificate</a>

        </div>
    )
}