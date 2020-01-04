import React from "react";
import { Grid } from "@material-ui/core";
// import FormControl from '@material-ui/core/FormControl';
// or
import { FormControl,Input,InputLabel,FormHelperText } from '@material-ui/core';

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";


export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Date From</InputLabel>
        <Input id="my-input" value={dateform} aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Day To</InputLabel>
        <Input id="my-input" value={dayto} aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Debit / Credit</InputLabel>
        <Input id="my-input" value={debit_credit} aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Description Contains</InputLabel>
        <Input id="my-input" value={} aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Amount</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last N#</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Account</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Country</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Channel</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </>
  );
  
}

