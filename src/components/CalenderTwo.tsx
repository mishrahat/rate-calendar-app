import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const generateDates = () => {
  const dates = [];
  const date = new Date();
  date.setDate(1);
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 0; i < firstDayIndex; i++) {
    dates.push("");
  }

  for (let i = 1; i <= lastDate; i++) {
    dates.push(i.toString());
  }

  for (let i = lastDayIndex + 1; i < 7; i++) {
    dates.push("");
  }

  return dates;
};

const CalenderTwo: React.FC = () => {
  const dates = generateDates();

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {daysOfWeek.map((day) => (
              <TableCell key={day} align="center">
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: Math.ceil(dates.length / 7) }).map(
            (_, weekIndex) => (
              <TableRow key={weekIndex}>
                {dates
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((date, dateIndex) => (
                    <TableCell key={dateIndex} align="center">
                      {date}
                    </TableCell>
                  ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CalenderTwo;
