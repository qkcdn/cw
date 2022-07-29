import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const theme = createTheme({
  palette: {
    primary: {
      main: "#7289DA",
    },
    secondary: {
      main: "#AABEFF",
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        자취를 남기다
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function FirstScreen() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
      <Stack spacing={2}>

        <Button variant="contained" href="/component/Login">
        로그아웃
        </Button>

        <Button variant="contained" href="/component/#">
        탈퇴
        </Button>

      </Stack>
    <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
        </Container>
        </ThemeProvider>
  );
}
