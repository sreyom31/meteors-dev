import SectionMain from "./section-main";
import Footer from "../reuse/footer";
import SectionAbout from "./sectionAbout";

export default () => {
    return (
        <div className={"bg-slate-100"}>

            <SectionMain />

            <SectionAbout />

            <Footer />
        </div>
    )
}