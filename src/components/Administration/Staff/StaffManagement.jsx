import React from 'react'

function StaffManagement() {
    const BranchData = [
        { id: 1, branchName: "Branch 1", action: "Action 1",  content: "Content for Branch 1" },
        { id: 2, branchName: "Branch 2", action: "Action 2" },
      ];
  return (
    <div>
      <div className=" bg-white shadow-md rounded-sm">
        <div className=" text-[20px] py-3 px-5 font-bold">Manage Staff Team</div>
      </div>

      <div className='bg-white shadow-md rounded-sm mt-3 border-t-2 border-t-[#ffbe33] p-5'>
      <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className=" border px-4 py-2">Sl No</th>
            <th className=" border px-4 py-2">Branch Name</th>
            <th className=" border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {BranchData.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.branchName}</td>
              <td className="border px-4 py-2">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )
}

export default StaffManagement
