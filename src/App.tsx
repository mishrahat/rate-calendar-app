import { Box } from "@mui/material";
import DatePicker from "./components/DatePicker";
import Header from "./components/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetRooms } from "./api/DateApi";
import RateCalenderTwo from "./components/RateCalenderTwo";

//2024-05-01
//2024-05-15

function App() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  console.log(startDate, endDate);

  const { rooms, isLoading, error } = useGetRooms(startDate, endDate);

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  if (isLoading) {
    return <span>...loading</span>;
  }

  if (error) {
    return <span>Error Found</span>;
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          m: 3,
          py: 2,
          borderRadius: "30px",
        }}
      >
        <Header title="Rate Calender" />
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
        />
      </Box>
     
      {rooms && <RateCalenderTwo rooms={rooms} />}
    </>
  );
}

export default App;
