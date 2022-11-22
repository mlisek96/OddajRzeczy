import {ThreeColumns} from "../components/ThreeColumns/ThreeColumns";
import {SimpleSteps} from "../components/SimpleSteps/SimpleSteps";
import {Header} from "../components/Header/Header";
import {AboutUs} from "../components/AboutUs/AboutUs";
import {WhoWeHelp} from "../components/WhoWeHelp/WhoWeHelp";
import {ContactUs} from "../components/ContactUs/ContactUs";

export function Home() {
    return (
        <div className='Home'>
            <Header />
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <ContactUs />
        </div>
    )
}