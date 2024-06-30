import { Box } from "@mui/material";
import { Rooms } from "../types";

type Props = {
  rooms: Rooms | undefined;
};

const Sidebar = ({ rooms }: Props) => {
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
