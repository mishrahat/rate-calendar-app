import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { Rooms } from "../types";

type Props = {
  rooms: Rooms;
};

// const data = [
//   {
//     id: "2",
//     name: "Canary Delux Double",
//     occupancy: 2,
//     inventory_calendar: [
//       {
//         id: "971",
//         date: "2024-04-30T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "975",
//         date: "2024-05-01T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "979",
//         date: "2024-05-02T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "983",
//         date: "2024-05-03T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "987",
//         date: "2024-05-04T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "991",
//         date: "2024-05-05T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "995",
//         date: "2024-05-06T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "999",
//         date: "2024-05-07T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//       {
//         id: "1003",
//         date: "2024-05-08T18:00:00.000Z",
//         available: 10,
//         status: true,
//         booked: 0,
//       },
//     ],
//   },
// ];

const RateCalenderTwo = ({ rooms }: Props) => {
  const data = [...rooms.data];

  console.log(data[0]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: format(date, "EEE"),
      date: format(date, "dd"),
      monthYear: format(date, "MMM yyyy"),
    };
  };

  const roomTypes = data.map((room) => ({
    name: room.name,
    status: room.inventory_calendar.map((day) =>
      day.status ? "Open" : "Close"
    ),
    roomsToSell: room.inventory_calendar.map((day) => day.available),
    netBooked: room.inventory_calendar.map((day) => day.booked),
    standardRate: Array(room.inventory_calendar.length).fill(4000), // Sample rate, replace with actual data if available
  }));

  const dates = data[0].inventory_calendar.map((day) =>
    formatDate(day.date.toLocaleString())
  );

  const groupedByMonthYear = dates.reduce((acc: any, cur, idx) => {
    const { monthYear } = cur;
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push({
      ...cur,
      idx,
    });
    return acc;
  }, {});

  return (
    <Box p={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {Object.keys(groupedByMonthYear).map((monthYear) => (
              <React.Fragment key={monthYear}>
                <TableRow>
                  <TableCell
                    colSpan={groupedByMonthYear[monthYear].length}
                    align="center"
                  >
                    {monthYear}
                  </TableCell>
                </TableRow>
                <TableRow>
                  {groupedByMonthYear[monthYear].map(
                    ({ day, date, idx }: any) => (
                      <TableCell key={idx} align="center">
                        <div>{day}</div>
                        <div>{date}</div>
                      </TableCell>
                    )
                  )}
                </TableRow>
              </React.Fragment>
            ))}
          </TableHead>
          <TableBody>
            {roomTypes.map((roomType, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell rowSpan={5} component="th" scope="row">
                    {roomType.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Room status</TableCell>
                  {roomType.status.map((status, idx) => (
                    <TableCell
                      key={idx}
                      align="center"
                      style={{
                        backgroundColor: status === "Open" ? "green" : "red",
                        color: "white",
                      }}
                    >
                      {status}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>Rooms to sell</TableCell>
                  {roomType.roomsToSell.map((rooms, idx) => (
                    <TableCell key={idx} align="center">
                      {rooms}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>Net booked</TableCell>
                  {roomType.netBooked.map((booked, idx) => (
                    <TableCell key={idx} align="center">
                      {booked}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>Standard Rate</TableCell>
                  {roomType.standardRate.map((rate, idx) => (
                    <TableCell key={idx} align="center">
                      {rate}
                    </TableCell>
                  ))}
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RateCalenderTwo;
