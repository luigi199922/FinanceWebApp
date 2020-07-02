import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Delete from "./Delete.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const OptionControls = ({
  option,
  option: { contractName, strike, amount, ask, type },
  removeOption,
}) => {
  const classes = useStyles();
  return (
    <ExpansionPanel key={contractName} elevation={12}>
      <ExpansionPanelSummary>
        <Typography className={classes.heading}>
          {" "}
          {contractName} Strike: {strike}{" "}
          {contractName.includes("SHORT") ? "Premium" : "Cost"}: {ask * amount}{" "}
          Amount: {amount} Type: {type}
        </Typography>
        <EditIcon />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <TextField
          id="standard-number"
          label="Amount"
          type="number"
          defaultValue={amount}
          onChange={(e) => (option.amount = e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="filled-read-only-input"
          label={contractName.includes("SHORT") ? "Premium" : "Cost"}
          defaultValue={ask * amount}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <img
          src={Delete}
          alt="Remove"
          onClick={() => removeOption(contractName)}
        ></img>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default OptionControls;
