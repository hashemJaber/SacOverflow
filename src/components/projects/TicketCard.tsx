import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCheck, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-gray-100 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2">
      <Link href={"/projects/someID"}>
        <div className="flex justify-between place-items-center space-x-2">
          <FontAwesomeIcon icon={faCheck} size="2x" className="flex-1"/>
          <div className="font-medium flex-1">10/01/2023</div>
          <div className="bg-green-900 py-1 px-2 rounded-full text-gray-100 flex-1 text-center">
            Completed
          </div>
        </div>
        <div className="font-bold flex justify-center text-lg">
          Project Title
        </div>
        <div>
          <div className="flex justify-center text-md">
            <FontAwesomeIcon
              icon={faWarehouse}
              size="4x"
              className="text-yellow-950"
            />
          </div>
          <div className="flex flex-col place-items-center text-md">
            <div>1234 Main Street</div>
            <div>Sacramento, CA 95826</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
