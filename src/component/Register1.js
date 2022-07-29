import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Link,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Autocomplete from '@mui/material/Autocomplete';


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

function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="StudentId"
      options={StudentId}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="연도 선택(학번)" />}
    />
  );
}

const StudentId = [
    { label: '2022학번', year: 2022 },
    { label: '2021학번', year: 2021 },
    { label: '2020학번', year: 2020 },
    { label: '2019학번', year: 2019 },
    { label: '2018학번', year: 2018 },
    { label: '2017학번', year: 2017 },
    { label: '2016학번', year: 2016 },
    { label: '2015학번', year: 2015 },
    { label: '2014학번', year: 2014 },
    { label: '2013학번', year: 2013 },
    { label: '2012학번', year: 2012 },
    { label: '2011학번', year: 2011 },
    { label: '2010학번', year: 2010 },
    { label: '2009학번', year: 2009 },
    { label: '2008학번', year: 2008 },
  ];

const Register = () => {
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

  // form 전송
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            학교 선택
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
              <Grid item xs={12}>
                <ComboBox/>
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth id="univ" name="univ" label="학교 이름을 검색하세요." />
              </Grid>


              </Grid>
              <Button
                fullWidth
                variant="contained"
                href="/component/Agreement"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                다음
              </Button>
            </FormControl>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );

};
export default Register;