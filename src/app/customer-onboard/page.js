import Navbar from "../../components/Navbar"
import UserForm from "../../components/UserOnboardForm"

export default function CustomerOnboarding(){
    return(
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <div className="flex flex-row mt-28 mx-20">
                <div className="w-1/2 h-96 pl-32"><UserForm /></div>
                <div className="w-1/2 text-center text-white text-6xl font-bold">Our Onboarding <br/> process is <br/> very Based ! <br/> <span className=""></span>
                </div>
            </div>
        </div>
    )
}