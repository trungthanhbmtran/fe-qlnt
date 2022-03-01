import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Grid, Typography, withStyles, Button } from "@material-ui/core";
import WizardHeader from "./wizardHeader";
import RadioMasters from "./radioMasters";
import SelectService from "./selectService";
import SelectDateDaypart from "./selectDateDaypart";
import Contacts from "./contacts";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../redux/Actions";

const style = (theme) => ({
  root: {
    border: `8px solid ${theme.palette.common.white}`,
    margin: 16,
    padding: "36px 0 0",
    background: `rgba(255,255,255,0.9)`,
    boxShadow: [
      `0px 16px 26px -10px ${theme.palette.primary.main}99`,
      theme.shadows[15]
    ]
  },
  navigation: {
    width: 110,
    fontSize: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 90
    }
  },
  prevBtn: {
    color: theme.palette.grey[700],
    background: theme.palette.common.white,
    boxShadow: theme.shadows[5]
  }
});
const Content = ({ classes }) => {
  const dispatch = useDispatch();
  const StepState = useSelector((state) => state.step);
  const FormSubmittedState = useSelector((state) => state.formSubmitted);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [activeStep, setActiveStep] = useState(
  //   localStorage.getItem("step") ? Number(localStorage.getItem("step")) : 0
  // );
  // const [activeStep, setActiveStep] = useState(StepState);

  const handleChange = (index) => (e) => {
    // setActiveStep(index);
    // useDispatch()
    // setActiveStep(index);
    // localStorage.setItem("step", index);
    dispatch(Actions.default.set_step(index));
  };
  const nandleNext = () => {
    dispatch(Actions.default.set_step(StepState +1));
  };
  const nandlePrev = () => {
    dispatch(Actions.default.set_step(StepState -1));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    // console.log(FormSubmittedState)
    dispatch(Actions.default.set_formSubmitted(true));
    // console.log(FormSubmittedState)
    const data = Array.from(e.target.elements)
      .map((el) => el.id)
      .filter(Boolean)
      .reduce((accObj, field) => {
        accObj[field] = e.target.elements[field].value;
        return accObj;
      }, {});
    alert(JSON.stringify(data, null, 2));
  };
  const tabs = ["Người khám", "Các hình thức cần khám", "Đơn thuốc", "Kết thúc khám bệnh"];
  return (
    <Paper style={{}} elevation={1} className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        style={{ padding: "0 8px" }}
      >
        Sổ khám bệnh
      </Typography>
      <Typography gutterBottom>
        Các triệu chứng hiện tại
      </Typography>
      <WizardHeader
        tabs={tabs}
        activeStep={StepState}
        formSubmitted={FormSubmittedState}
        handleChange={handleChange}
      />
      <form onSubmit={handleSubmit}>
        <SwipeableViews index={StepState} onChangeIndex={handleChange}>
          <RadioMasters />
          <SelectService />
          <SelectDateDaypart />
          <Contacts formSubmitted={FormSubmittedState} />
        </SwipeableViews>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "16px 16px" }}
        >
          <Grid item>
            <Button
              disabled={StepState === 0 || FormSubmittedState}
              onClick={nandlePrev}
              variant="contained"
              color="default"
              className={`${classes.navigation} ${classes.prevBtn}`}
            >
              Trở lại
            </Button>
          </Grid>
          {StepState < tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                className={classes.navigation}
                variant="contained"
                onClick={nandleNext}
                disabled={FormSubmittedState}
              >
                Tiếp theo
              </Button>
            </Grid>
          )}
          {StepState === tabs.length - 1 && (
            <Grid item>
              <Button
                type="submit"
                color="primary"
                className={classes.navigation}
                variant="contained"
                disabled={FormSubmittedState}
              >
                Gửi
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};
export default withStyles(style)(Content);
