import "./statusbar.css";

interface StatusBarProps {
    status: 'Completed' | 'In-Progress' | 'Needs-Approval' | 'Action-Needed';

}

const StatusBar = ({status}: StatusBarProps) => {
return (
    //generalized component circular
    <div className={`status-bar status-${status}`} style={{border:"1px solid black"}}>
        {status}
    </div>
    )
}

export default StatusBar;