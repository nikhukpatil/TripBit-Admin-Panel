import React from "react";

function Company() {
  const labels1 = [
    "Company Name",
    "Address",
    "Address 1",
    "Country",
    "State",
    "PostCode",
    "Email",
    "City",
    "Website",
    "Alt Email",
    "Mobile",
    "Landline",
    "Service Tax No",
    "RNAVT Number",
    "VAT Number",    
  ];


  return (
    <div>
      <div className=" bg-white shadow-md rounded-sm">
        <div className=" text-[20px] py-3 px-5 font-bold">Company Details</div>
      </div>

      <div className="bg-white shadow-md rounded-sm mt-3 border-t-2 border-t-[#ffbe33]">
        <div className=" w-full">
          <form className="max-w-full mx-auto p-6">
           
              <div className=" w-full">
                {labels1.map((label, index) =>
                  index % 2 === 0 ? (
                    <div key={index} className="flex mb-4">
                      <div className={` ${ label === "VAT Number" ? "w-[49%]" : "w-full"} mr-3`}>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={label.replace(/\s+/g, "").toLowerCase()}
                        >
                          {label}:
                        </label>
                        <input
                          type="text"
                          id={label.replace(/\s+/g, "").toLowerCase()}
                          name={label.replace(/\s+/g, "").toLowerCase()}
                          className="border border-[#ccc] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={`Enter ${label}`}
                        />
                      </div>
                      {labels1[index + 1] && (
                        <div className=" w-full">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor={labels1[index + 1]
                              .replace(/\s+/g, "")
                              .toLowerCase()}
                          >
                            {labels1[index + 1]}:
                          </label>
                          <input
                            type="text"
                            id={labels1[index + 1]
                              .replace(/\s+/g, "")
                              .toLowerCase()}
                            name={labels1[index + 1]
                              .replace(/\s+/g, "")
                              .toLowerCase()}
                            className="border border-[#ccc] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={`Enter ${labels1[index + 1]}`}
                          />
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
           
            <button
              type="submit"
              className="bg-[#ffbe33] hover:bg-[#595b61] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Company;
