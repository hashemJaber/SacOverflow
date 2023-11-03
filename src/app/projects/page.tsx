import AddCard from "@/components/projects/AddCard";
import TicketCard from "@/components/projects/TicketCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div>
        <div className="flex-grow overflow-y-auto bg-white text-default-text">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-4">
            <AddCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
