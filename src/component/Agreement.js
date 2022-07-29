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

function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[0]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleChange4 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };

  const handleChange5 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };

   const handleChange6 = (event) => {
       setChecked([checked[0], event.target.checked]);
     };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <FormControlLabel
        label="서비스 이용약관 동의 (필수)"
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="개인정보 수집 및 이용 동의 (필수)"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="커뮤니티이용규칙 확인 (필수)"
        control={<Checkbox checked={checked[1]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="본인 명의를 이용하여 가입을 진행하겠습니다."
        control={<Checkbox checked={checked[1]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="만 14세 이상입니다."
        control={<Checkbox checked={checked[1]} onChange={handleChange6} />}
      />
    </Box>
  );

  return (
      <div>
        <FormControlLabel
          label="아래 약관에 모두 동의합니다."
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </div>
    );
  }

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
            약관 동의
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <IndeterminateCheckbox/>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                href="/component/Register"
                sx={{ mt: 2, mb: 2 }}
                size="large"
              >
                휴대폰 인증
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                href="/component/Register"
                sx={{ mt: 0, mb: 1 }}
                size="large"
              >
                이메일 인증
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