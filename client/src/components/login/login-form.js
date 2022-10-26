import {useState} from "react";

export default () => {

    const inputFieldClass = "w-full form-input rounded-lg px-5 py-3 border-2 border-slate-400 bg-slate-100 block mt-4";

    const [formData, SetFormData] = useState(
        {
            email: "",
            password: "",
        }
    );

    const handleChange = (e) => {
        SetFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    };

    return(
        <div>
            <form className={"w-full"}>
                <input
                    type={"text"}
                    required={true}
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"Email"}
                    className={inputFieldClass}
                />
                <input
                    type={"password"}
                    required={true}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={"Password"}
                    className={inputFieldClass}
                />

                <button className={"w-full text-white rounded-lg px-5 py-3 mt-4 duration-300 bg-blue-700 hover:bg-blue-600"}>Login</button>
            </form>
        </div>
    )
}