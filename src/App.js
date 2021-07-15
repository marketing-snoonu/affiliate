import React, { useState } from 'react';
import axios from 'axios';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import useStyles from './components/styles';
import theme from './components/theme';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import image from './assets/snoonu.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import FirstIcon from './assets/first.svg';
import SecondIcon from './assets/second.svg';
import ThirdIcon from './assets/third.svg';

function App() {
  const classes = useStyles();
  
  const [values, setValues] = useState({
    username: "",
    passcode: "",
    ranking: "",
    ordersNumber: "",
    submitted: false,
    wrongCredentials: false,
    firstOrderNumber:"",
    secondOrderNumber:"",
    thirdOrderNumber: "",
  })

  const handleUsernameInputChange = (event) => {
    setValues({...values, username: event.target.value})
  }
  const handlePasscodeInputChange = (event) => {
    setValues({...values, passcode: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let ranking = ""
    let ordersNumber = ""
    let wrongCredentials = true
    let firstOrderNumber = ""
    let secondOrderNumber = ""
    let thirdOrderNumber = ""

    // old working sheet: https://api.steinhq.com/v1/storages/60d4f2f3d2a8585c5af282db/sheet1
    // new sheet: https://api.steinhq.com/v1/storages/60d837c2d2a8585c5af282ee/sheet1
    
    axios.get('https://api.steinhq.com/v1/storages/60d837c2d2a8585c5af282ee/sheet1')
    .then(response => {
      let rows = response.data
      for (var i=0; i < rows.length; i++) {
        let row = Object.values(rows[i])
        if (values.username.toLowerCase() === row[0].toLowerCase() && values.passcode === row[1]) {
          ranking = row[2]
          ordersNumber = row[3]
          wrongCredentials = false
        }
        if (row[2] === "1") {
          firstOrderNumber = row[3]
        }
        if (row[2] === "2") {
          secondOrderNumber = row[3]
        }
        if (row[2] === "3") {
          thirdOrderNumber = row[3]
        }
      }
      if (wrongCredentials === true) {
        setValues({...values, ranking: "", ordersNumber: "", wrongCredentials: true })
      }
      else {
        setValues({...values, 
          ranking: ranking, 
          ordersNumber: ordersNumber, 
          wrongCredentials: false,
          firstOrderNumber: firstOrderNumber,
          secondOrderNumber: secondOrderNumber,
          thirdOrderNumber: thirdOrderNumber,
        })
      }
    })
  }



  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3} className={classes.container}>
          <Grid container item xs={1} sm={1} md={3} lg={3} xl={3}>
          </Grid>
          <Grid container item component={Paper} xs={10} sm={10} md={6} lg={6} xl={6}>
            <Grid item xs={12} className={classes.centerContainer}>
              <img className={classes.logoBar} src={image} alt="logo" />
            </Grid>
            <Grid item xs={12} className={classes.centerContainer}>
              <Typography variant="h3" color="secondary" className={classes.mainHeader}>
                Affiliate Program Portal
              </Typography>
            </Grid>
            <Grid container item xs={12} className={classes.centerContainer} direction="row">
              <form className={classes.centerContainer} onSubmit= {handleSubmit}>
                <Grid container item xs={12} className={classes.centerContainer} direction="row">
                    <Grid item xs={4} className={classes.centerContainer}>
                      <TextField 
                        label="Username" 
                        fullWidth 
                        variant="outlined" 
                        value={values.username} 
                        onChange={handleUsernameInputChange} />
                    </Grid>
                    <Grid item xs={4} className={classes.centerContainer}>
                      <TextField
                        label="Passcode" 
                        fullWidth type="password" 
                        variant="outlined" 
                        value={values.password} 
                        onChange={handlePasscodeInputChange}
                        InputProps={{
                          className: classes.input
                        }} />
                    </Grid>
                    <Grid item xs={4} className={classes.centerContainer}>
                    <Button variant="contained" size = "large" color="primary" type="submit" className={classes.submitButton}>
                      Check
                    </Button>
                    </Grid>
                </Grid>
              </form>
            </Grid>
            {values.wrongCredentials ? 
              <Grid item xs={12} className={classes.errorContainer}>
                <Typography variant="h6" color="primary" className={classes.normalText}>
                  Username or passcode are incorrect, please try again.
                </Typography>
              </Grid> : null
            }
            <Grid item xs={12} className={classes.tableContainer}>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell} align="center">
                        <Typography variant="h6" className={classes.tableHeader}>
                          Top 3 Rankings
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        <Typography variant="h6" className={classes.tableHeader}>
                          # of Orders
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                          <Icon>
                            <img src={FirstIcon} height={30} width={30}/>
                          </Icon>
                        </TableCell>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                        <Typography variant="h4" className={classes.cellText}>
                          {values.firstOrderNumber}
                        </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                          <Icon>
                            <img src={SecondIcon} height={30} width={30}/>
                          </Icon>
                        </TableCell>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                          <Typography variant="h4" className={classes.cellText}>
                            {values.secondOrderNumber}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                          <Icon>
                            <img src={ThirdIcon} height={30} width={30}/>
                          </Icon>
                        </TableCell>
                        <TableCell className={classes.cell} align="center" component="th" scope="row">
                          <Typography variant="h4" className={classes.cellText}>
                            {values.thirdOrderNumber}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid container item xs={6} className={classes.leftContainer} direction="column">
              <Grid item xs={12} className={classes.centerContainer}>
                <Typography variant="h4" color="secondary" className={classes.normalText}>
                  Your Rank
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.centerContainer}> 
                <Typography variant="h2" color="secondary" className={classes.mainHeader}>
                  {values.ranking}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6} className={classes.rightContainer} direction="column">
              <Grid item xs={12} className={classes.centerContainer}>
                <Typography variant="h4" color="secondary" className={classes.normalText}>
                  # of Orders
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.centerContainer}>
                <Typography variant="h2" color="secondary" className={classes.mainHeader}>
                  {values.ordersNumber}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.rightContainer}>
              <Typography variant="body1" color="secondary" className={classes.normalText}>
                *Please note that this list is updated daily at 11 AM.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={1} sm={1} md={3} lg={3} xl={3}>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
