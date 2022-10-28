import {useState} from "react";
import {createUser} from "../api/api";
import {toast, ToastContainer} from "react-toastify";
import {useHistory} from "react-router-dom";

export default () => {

    const history = useHistory();

    const inputFieldClass = "w-full form-input rounded-lg px-5 py-3 border-2 border-slate-400 bg-slate-100 block mt-4";

    const [formData, SetFormData] = useState(
        {
            email: "",
            name: "",
            role: "student",
            password: "",
            dept: "",
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(formData)
            .then((res=>{
                if(res.data) {
                    console.log(res.data);
                    toast("User Created Successfully");
                    setTimeout(() => history.push('/login'), 1500);
                }
            })).catch(err => {
                console.log(err);
                toast.error("Couldn't Create Account");
        });

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        SetFormData(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    };

    return(
        <div>
            <form className={"w-full"} onSubmit={handleSubmit}>
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
                    type={"text"}
                    required={true}
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={"Name"}
                    className={inputFieldClass}
                />

                <select
                    className={inputFieldClass}
                    onChange={handleChange}
                    name={"role"}
                    value={formData.role}
                >
                    <option>student</option>
                    <option>faculty</option>
                    <option>club</option>
                </select>

                <input
                    type={"text"}
                    required={true}
                    name={"dept"}
                    value={formData.dept}
                    onChange={handleChange}
                    placeholder={"Department"}
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

                <button className={"w-full btn btn-blue px-5 py-3 mt-4 duration-300"} type={"submit"}>Create Account</button>
            </form>

            <ToastContainer />

        </div>
    )
}