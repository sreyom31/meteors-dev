import StudentDashboard from "./studentDashboard/studentDashboard";
import TeacherDashboard from "./teacherDashboard/teacherDashboard";
import ClubsDashboard from "./clubsDashboard/clubsDashboard";

export default () => {
    const role = JSON.parse(localStorage.getItem("User")).role;
    return(
        (role==="student")?<StudentDashboard />:
            (role === "faculty")?<TeacherDashboard />:
                (role==="club")?<ClubsDashboard />:
                    <></>
    )
}