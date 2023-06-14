import React from "react";
import { useNavigate } from "react-router-dom";
const ScheduleConsultation = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center w-full mt-12">
      <button
        onClick={() => navigate("/contact")}
        className="px-8 py-2 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-200 text-lg"
      >
        Schedule a free Consultation
      </button>
    </div>
  );
};

export default ScheduleConsultation;
