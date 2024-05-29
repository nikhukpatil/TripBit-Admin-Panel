import React from "react";
import DESTINATION from '../../../assets/Destination.png'

const BookingByDestination = ()=> {
    return (
        <div className=" p-2">
            <h2 className="text-base font-bold mb-2 uppercase ">BOOKING DISTRIBUTION BY DESTINATION</h2>
            <img src={DESTINATION} alt="DESTINATION" className=" h-60" />
        </div>
    );
}

export default BookingByDestination;