import { Box } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  startDate: string;
  endDate: string;
  handleStartDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEndDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DateRangePicker = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  handleSubmit,
}: Props) => {
  return (
    <form onSubmit={() => handleSubmit}>
      <Box
        sx={{
          m: 3,
          px: 2,
          border: "1px solid black",
          width: "25vw",
          display: "flex",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          gap: "1rem",
        }}
      >
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <span>-</span>
        <input
          type="date"
          id="end-date"
          value={endDate}
          style={{ outline: "none" }}
          onChange={handleEndDateChange}
        />
      </Box>
    </form>
  );
};

export default DateRangePicker;
