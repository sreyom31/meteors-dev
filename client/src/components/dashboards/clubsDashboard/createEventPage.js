import {useState} from "react";
import {createEvent} from "../../api/api";
import {ToastContainer, toast} from "react-toastify";

export default (props) => {

    const [formData, setFormData] = useState({
        slug:"",
        desc:"",
        hostingClub: JSON.parse(localStorage.getItem('User')).id,
        venue:"",
        date:"",
        time:"",
        maxCount:"",
        availableCount:0
    });

    const onChange = (e) => {
        console.log(typeof formData.maxCount)
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.name==='maxCount'?Number(e.target.value):e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(prevState => {
            return {
                ...prevState,
                'maxCount': Number(prevState.maxCount),
                'availableCount':Number(prevState.maxCount),
            }
        });

        console.log(typeof formData.maxCount);

        createEvent(formData).then(res=> {
            toast("Event Created")
            console.log(res.data)
            props.setModal();
        }).catch(err=>console.log(err));
    }

    return (
        <div className={""}>
            <form onSubmit={handleSubmit}>
                <input
                    name={"slug"}
                    type={"text"}
                    placeholder={"Event Name"}
                    onChange={onChange}
                    value={formData.slug}
                    className={"inputFieldClass"}
                />
                <input
                    name={"desc"}
                    type={"text"}
                    placeholder={"Event Description"}
                    onChange={onChange}
                    value={formData.desc}
                    className={"inputFieldClass"}
                />
                <input
                    name={"venue"}
                    type={"text"}
                    placeholder={"Event Venue"}
                    onChange={onChange}
                    value={formData.venue}
                    className={"inputFieldClass"}
                />
                <input
                    name={"date"}
                    type={"text"}
                    placeholder={"mm/dd/yy"}
                    onChange={onChange}
                    value={formData.date}
                    className={"inputFieldClass"}
                />
                <input
                    name={"time"}
                    type={"text"}
                    placeholder={"Event Start Time"}
                    onChange={onChange}
                    value={formData.time}
                    className={"inputFieldClass"}
                />
                <input
                    name={"maxCount"}
                    type={"number"}
                    placeholder={"Max Event Seats"}
                    onChange={onChange}
                    value={formData.maxCount}
                    className={"inputFieldClass"}
                />

                <input
                    type={"submit"}
                    className={"btn btn-blue w-full py-2 mt-4"}
                    value={"Create Event"}
                />

                <ToastContainer />
            </form>
        </div>
    )
}