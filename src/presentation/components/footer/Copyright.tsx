import { Box, Link, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";

export function Copyright(props: BoxProps) {
  return (
    <Box marginTop={2}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        component="span"
        ref={null}
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="email:leonardoferreiragraciano@gmail.com">
          LeoGraciano
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
