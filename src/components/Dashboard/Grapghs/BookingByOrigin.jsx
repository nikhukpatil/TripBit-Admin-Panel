import React from "react";
import ORIGIN from '../../../assets/Origin.png'

const BookingByOrigin = ()=> {
    return (
        <div className=" p-2">
            <h2 className="text-base font-bold mb-2 uppercase ">BOOKING DISTRIBUTION BY ORIGIN</h2>
            <img src={ORIGIN} alt="Origin" className=" h-60" />
        </div>
    );
}

export default BookingByOrigin;