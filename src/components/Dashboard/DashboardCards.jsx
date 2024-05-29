import React from "react";
import HistoricalTable from "./HistoricalTable";
import GraphBookingDistributionByStatus from "./Grapghs/GraphBookingDistributionByStatus";
import GraphSalesByAgents from "./Grapghs/GraphSalesByAgents";
import GraphSalesByService from "./Grapghs/GraphSalesByService";
import CompanyPerformanceGraph from "./Grapghs/CompanyPerformanceGraph";
import GraphLookToBookRatio from "./Grapghs/GraphLookToBookRatio";
import TopSellingAirlinesData from "./Grapghs/TopSellingAirlinesData";
import TopSellingHotelCitiesData from "./Grapghs/TopSellingHotelCitiesData";
import TopSellingAgentsData from "./Grapghs/TopSellingAgentsData";
import TopCityWisePurchase from "./Grapghs/TopCityWisePurchase";
import TopHotelsData from "./Grapghs/TopHotelsData";
import BookingByOrigin from "./Grapghs/BookingByOrigin";
import BookingByDestination from "./Grapghs/BookingByDestination";

const DashboardCards = () => {

    const data = [
        { count: "100", name: "Bookings", color: 'bg-[#FFBE33]' },
        { count: "7", name: "Customer", color: 'bg-[#D86542]' },
        { count: "2", name: "Agents", color: 'bg-[#7376CA]' },
    ];

    return (
        <div className=" p-10">

<div className="grid grid-cols-3 gap-4 mb-5">
                {data.map((item, index) => (
                    <div key={index} className={` p-3 shadow-md text-center ${item.color || 'bg-white'}`}>
                        <p className="text-xl text-white"> <span className=" font-bold">{item.count}</span> {item.name}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10 overflow-hidden ">
                <GraphBookingDistributionByStatus />
                <GraphSalesByAgents/>
                <GraphSalesByService/>
                <CompanyPerformanceGraph/>
                <BookingByOrigin/>
                <BookingByDestination/>
                <GraphLookToBookRatio/>
                <TopSellingAirlinesData/>
                <TopSellingHotelCitiesData/>
                <TopSellingAgentsData/>
                <TopCityWisePurchase/>
                <TopHotelsData/>
            </div>


            <HistoricalTable/>
        </div>
    );
};

export default DashboardCards;
