"use client";

import "./statusbar.css";

interface StatusBarProps {
  status: "Completed" | "In-Progress" | "Needs-Approval" | "Action-Needed";
}

const StatusBar = ({ status }: StatusBarProps) => {
  return (
    //generalized component circular
    <button
      className={`status-bar status-${status} rounded-full text-center px-4 py-2 font-bold`}
      onClick={() => console.log(`${status}`)}
    >
      {status}
    </button>
  );
};

export default StatusBar;
