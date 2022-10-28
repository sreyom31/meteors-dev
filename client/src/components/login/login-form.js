import {useState} from "react";
import {loginUser} from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from "react-router-dom";

export default () => {

    const history = useHistory();

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

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(formData).then(res => {
            if(res.data) {
                console.log(res.data);

                localStorage.setItem("User", JSON.stringify(res.data.user));
                localStorage.setItem("Token", String(res.data.tokens.access.token));
                toast("Logged In");


                setTimeout(() => history.push('/dashboard'), 1500);
            }
        }).catch(err => console.log(err));
    }

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
                    type={"password"}
                    required={true}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={"Password"}
                    className={inputFieldClass}
                />

                <button className={"w-full btn btn-blue px-5 py-3 mt-4"} type={"submit"}>Login</button>
            </form>

            <ToastContainer />

        </div>
    )
}