export default () => {
    return (
        <div className={"h-screen w-full flex justify-center items-center"}>
            <div className={"h-5/6 w-5/6 rounded-xl bg-slate-400 grid grid-cols-2"}>
                <div className={"flex items-center"}>
                    <form className={"flex p-x-6 flex-wrap justify-center"}>
                        <div>
                            <input
                                placeholder={"Event Name"}
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>
                        <div>
                            <input
                                placeholder={"Venue"}
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>
                        <div>
                            <input
                                placeholder={"Time"}
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>
                        <div>
                            <input
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>
                        <div>
                            <input
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>
                        <div>
                            <input
                                className={"basis-1/2 mr-4 inputFieldClassSemi"}
                            />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}