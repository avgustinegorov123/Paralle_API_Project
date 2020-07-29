import React, { useState } from "react";
import axios from 'axios';
// import FormControl from '@material-ui/core/FormControl';
// or
import { FormControl,Input,InputLabel,makeStyles,Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *':{
      margin:theme.spacing(1),
    },
  },
}))
export default function TypographyPage() {
  const [dateform, setDateform] = useState('20200101');
  const [dayto, setDayto] = useState('20200701');
  const [amountmin, setamountMin] = useState('500');
  const [description, setdescription] = useState('Fees');
  const [amountmax, setamountMax] = useState('100000');
  const [last, setLast] = useState('3');
  const [account, setAccount] = useState('1000000917');
  const [country, setCountry] = useState('');
  const [channel, setChannel] = useState('');
  const classes = useStyles();

  const getResponse = function(){
    axios.get("http://157.175.76.145:8000/byCountry?account="+account+"&fromDate="+dateform+"&toDate="+dayto+"&numOfRecords="+last+"&amountMin="+amountmin+"&amountMAx="+amountmax+"&describtion="+description)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })
  }
  const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ];
  return (
    <>
      <form className={classes} noValidate autoComplete = "off">
        <div className="text-center container">
          <div className="row">
            <FormControl className="col-md-6" >
              <InputLabel htmlFor="my-input">Date From</InputLabel>
              <Input id="dateform" value={dateform} aria-describedby="my-helper-text" onChange={e => setDateform(e.target.value)} />
            </FormControl>
            <FormControl className="col-md-6" >
              <InputLabel htmlFor="my-input">Day To</InputLabel>
              <Input id="dayto" value={dayto} aria-describedby="my-helper-text" onChange={e => setDayto(e.target.value)} />
            </FormControl>
          

          </div>
          <div className="row">
            <FormControl className="col-md-6">
              <InputLabel htmlFor="my-input">Amount Min</InputLabel>
              <Input id="amountmin" value={amountmin} aria-describedby="my-helper-text" onChange={e => setamountMin(e.target.value)} />
            </FormControl>

            <FormControl className="col-md-6">
              <InputLabel htmlFor="my-input">Amount Max</InputLabel>
              <Input id="amountmax" value={amountmax} aria-describedby="my-helper-text" onChange={e => setamountMax(e.target.value)} />
            </FormControl>
          </div>
          <div className="row">
            <FormControl className="col-md-6">
              <InputLabel htmlFor="my-input">Last N#</InputLabel>
              <Input id="last" value={last} aria-describedby="my-helper-text" onChange={e => setLast(e.target.value)} />
            </FormControl>
            <FormControl className="col-md-6">
              <InputLabel htmlFor="my-input">Account</InputLabel>
              <Input id="account" value={account} aria-describedby="my-helper-text" onChange={e => setAccount(e.target.value)} />
            </FormControl>
          </div>
          <div className="row">
            <FormControl className="col-md-12">
              <InputLabel htmlFor="my-input">Description Contains</InputLabel>
              <Input id="description" value={description} aria-describedby="my-helper-text" onChange={e => setdescription(e.target.value)} />
            </FormControl>
          </div>
          <div className="text-right">
            <Button onClick={getResponse} className="btn btn-sm btn-info mt-4 mb-4">Get Response</Button>
          </div>
        </div>
      </form>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
  
}

