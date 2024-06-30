import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h5" fontWeight={800}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
