import Header from "../reuse/header";
import SectionMain from "./section-main";
import Footer from "../reuse/footer";
import SectionAbout from "./sectionAbout";

export default () => {
    return (
        <div className={"bg-slate-100"}>
            <div className={"hidden"}>
                <Header />
            </div>

            <SectionMain />

            <SectionAbout />

            <Footer />
        </div>
    )
}