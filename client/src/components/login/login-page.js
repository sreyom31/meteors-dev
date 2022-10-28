import LoginForm from "./login-form";

export default () => {
    return (
        <div className={"bg-slate-300 w-full h-screen lg:flex lg:flex-row lg:items-center"}>
            <div className={"container shadow-xl rounded-3xl shadow-gray-400  h-4/5 mx-auto lg:flex lg:items-center lg:items-stretch"}>
                <div className={"hidden lg:flex rounded-tl-3xl rounded-bl-3xl flex-col justify-center items-center w-1/2 bg-blue-600"}>
                    <div className={"w-1/2 h-1/2 bg-login-srm bg-center bg-no-repeat bg-contain"}>

                    </div>
                </div>
                <div className={"w-4/5 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 py-10 rounded-3xl md:w-3/5 lg:relative " +
                    "lg:w-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:rounded-tl-none lg:rounded-bl-none bg-gray-50 flex flex-col justify-center items-center"}>
                    <div className={'py-4 px-5 rounded-full bg-blue-400 mb-5'}><i className="fa-solid fa-key text-4xl text-gray-100"></i></div>
                    <div className={"text-3xl text-cyan-700 capitalize"}>Hello Again</div>
                    <div className={"w-1/2 text-center mt-2"}>Aenean ligula lacus, egestas ut dignissim eget, ornare ac urna. </div>
                    <div className={"w-3/5 text-center mt-4"}>
                        <LoginForm />
                    </div>
                    <div className={"font-lg mt-3"}>Don't have an account yet? <a href={"/signUp"} className={"duration-300 text-blue-500 hover:text-blue-700"}>Sign Up</a></div>
                </div>
            </div>
        </div>
    )
}