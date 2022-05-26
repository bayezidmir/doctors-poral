import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner setDate={setDate} date={date} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointments;
