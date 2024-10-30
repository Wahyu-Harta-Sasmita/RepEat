import React from "react";

function StatsCard({ title, amount }) {
  return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-500">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">{amount}</p>
        </div>
      </div>
  );
}

export default StatsCard;
