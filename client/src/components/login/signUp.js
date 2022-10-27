import {useState} from "react";

export default () => {

    const inputFieldClass = "w-full form-input rounded-lg px-5 py-3 border-2 border-slate-400 bg-slate-100 block mt-4";

    const [formData, SetFormData] = useState(
        {
            email: "",
            name: "",
            role: "Student",
            reg: "",
            password: "",
            dept: "",
            club: "",
        }
    );

    const handleChange = (e) => {

        const {name, value} = e.target;

        SetFormData(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })

        console.log(formData);
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
                    type={"text"}
                    required={true}
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={"Name"}
                    className={inputFieldClass}
                />
                <input
                    type={"text"}
                    required={true}
                    name={"reg"}
                    value={formData.reg}
                    onChange={handleChange}
                    placeholder={"Registration Number"}
                    className={inputFieldClass}
                />

                <select
                    className={inputFieldClass}
                    onChange={handleChange}
                    name={"role"}
                    value={formData.role}
                >
                    <option>Student</option>
                    <option>Faculty</option>
                    <option>Club</option>
                </select>

                {(formData.role.trim() === "Faculty")?<input
                    type={"text"}
                    required={true}
                    name={"dept"}
                    value={formData.dept}
                    onChange={handleChange}
                    placeholder={"Department"}
                    className={inputFieldClass}
                />:(formData.role.trim() === "Club")?<input
                    type={"text"}
                    required={true}
                    name={"club"}
                    value={formData.club}
                    onChange={handleChange}
                    placeholder={"Club Name"}
                    className={inputFieldClass}
                />:<></>}

                <input
                    type={"password"}
                    required={true}
                    name={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={"Password"}
                    className={inputFieldClass}
                />

                <button className={"w-full btn btn-blue px-5 py-3 mt-4 duration-300"}>Create Account</button>
            </form>
        </div>
    )
}