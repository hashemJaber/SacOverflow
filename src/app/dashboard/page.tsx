import Dashboard from "@/components/StatusBar/StatusBar";
import StatusBar from "@/components/StatusBar/StatusBar";

import './dashboard.css'
import LoginForm from "@/components/Login/LoginForm";
import SearchBar from "@/components/SearchBar/SearchBar";

const dashboard = () => {
    return (
        //left navbar section
        <section className="test">
            <div className="navLeft w-80 h-screen">NavBar</div>
            
            {/* this is going to be right of navbar and under top navbar */}
            <div className="projectTitle h-10 text-primary-green-600 text-2xl mt-1 font-bold">Projects</div>
            {/*right of 'Projects' and left of colored statuses*/}
            <SearchBar />
            <div>
                <StatusBar
                status="In-Progress"
                />
            </div>
            <div>
                <StatusBar
                status="Completed"
                />
            </div>
            <div>
                <StatusBar
                status="Needs-Approval"
                />
            </div>

            <div>
                <StatusBar
                status="Action-Needed"
                />
            </div>
        </section>
    ); 
}

export default dashboard; 