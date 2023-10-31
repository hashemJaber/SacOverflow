import Dashboard from "@/components/StatusBar/StatusBar";
import StatusBar from "@/components/StatusBar/StatusBar";

import './dashboard.css'

const dashboard = () => {
    return (
        <section className="test">
            <StatusBar
                status="In-Progress"
                />
             <StatusBar
                status="Completed"
                />
            <StatusBar
                status="Needs-Approval"
                />
            <StatusBar
                status="Action-Needed"
                />
        </section>
    ); 
}

export default dashboard; 