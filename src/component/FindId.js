import * as React from 'react';
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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FindId(){
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
                아이디 찾기
              </Typography>

                <FormControl component="fieldset" variant="standard">
                    <Grid item xs={12}>
                      <TextField
                        required
                        autoFocus
                        fullWidth
                        sx={{ mt: 2, mb: 0 }}
                        type="email"
                        id="email"
                        name="email"
                        label="가입된 이메일 주소"
                      />
                    </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    size="large"
                  >
                    아이디 찾기
                  </Button>
                </FormControl>
              </Box>

          </Container>
          </ThemeProvider>
      );
}

function FindPw(){
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
                비밀번호 찾기
              </Typography>

                <FormControl component="fieldset" variant="standard">
                    <Grid item xs={12}>
                      <TextField
                        required
                        autoFocus
                        fullWidth
                        sx={{ mt: 2, mb: 0 }}
                        type="id"
                        id="id"
                        name="id"
                        label="가입된 아이디"
                      />
                    </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    size="large"
                  >
                    비밀번호 찾기
                  </Button>
                </FormControl>
              </Box>

          </Container>
          </ThemeProvider>
      );
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="아이디 찾기" {...a11yProps(0)} />
          <Tab label="비밀번호 찾기" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FindId/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FindPw/>
      </TabPanel>
    </Box>
  </ThemeProvider>
  );
}
