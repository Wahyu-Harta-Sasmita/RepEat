import React from "react";
import { Link } from "react-router-dom";

function StatsCard({ title, amount, percentage }) {
  return (
    <Link to="/seller/products">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-500">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">{amount}</p>
          <span className="text-green-500">{percentage}</span>
        </div>
      </div>
    </Link>
  );
}

export default StatsCard;
