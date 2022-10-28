import StudentDashboard from "./studentDashboard/studentDashboard";
import TeacherDashboard from "./teacherDashboard/teacherDashboard";

export default () => {
    const role = "faculty"
    return(
        (role==="student")?<StudentDashboard />:
            (role === "faculty")?<TeacherDashboard />:
                (role==="club")?<></>:
                    <></>
    )
}