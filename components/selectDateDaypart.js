import React, { useEffect, useState } from "react";
// import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
// import DateFnsUtils from "@date-io/date-fns";
import {
  withStyles,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
  Input,
  Table,
  Switch,
  Paper,
} from "@material-ui/core";
import { calendar, clock } from "./iconPaths";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  GetMedication,
  GetPrescription,
  GetPrescriptionDetail,
} from "../service/Query";
import Checkbox from "@mui/material/Checkbox";
import { Box, fabClasses, TableBody } from "@mui/material";
import { curl, straight, color, haircut, shampoo } from "./iconPaths";

const dayparts = ["morning", "noon", "evening"];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const ariaLabel = { "aria-label": "description" };

const services = [
  {
    name: "Siêu âm",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640",
  },
  { name: "Nội soi", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
];

const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing(3),
      height: "100%",
      maxWidth: 800,
      margin: " 0 auto",
    },
    icon: {
      height: 28,
      width: 28,
      fill: theme.palette.grey[500],
    },
    papper: {
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  };
};
function SelectDateDaypart({ classes }) {
  const [switchSelected, setswitchSelected] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [render, SetRender] = useState([]);

  // const [options,setOptions] = useState([])

  // const handleOnchange = () => (event,value) => console.log('value',value)
  const handleChange = (event, value) => {
    event.preventDefault();
    switchSelected ? setValue(value?.RowNum) : setValue(value?.NAME) 
  }
  
    const handleChangeSwitch = (e) => {
    setswitchSelected(e.target.checked);
    SetRender([]);
  };

  const FetchDataOptions = async () => {
    if (switchSelected) {
      const params = { page: 1, limit: 30 };
      const GetData = await GetPrescription(params);
      console.log("GetData", GetData.data.data);
      // Object.keys(GetData.data.data).map(key=> console.log(GetData.data.data[key])  )
      // console.log(GetData.data.data)
      setOptions(GetData.data.data);
    } else {
      const params = { page: 1, limit: 30 };
      const GetData = await GetMedication(params);
      setOptions(GetData.data.data);
    }
  };

  // const FetchRenderTable = async () => {
  //   if (switchSelected) {
  //     // const params = { page: 1, limit: 30 };
  //     // const GetData = await GetPrescription(params);
  //     // // console.log('GetData',GetData.data.data)
  //     // // Object.keys(GetData.data.data).map(key=> console.log(GetData.data.data[key])  )
  //     // // console.log(GetData.data.data)
  //     // let ArrayGet = GetData.data.data;
  //     // // console.log('',ArrayGet)
  //     // // console.log('detailAprescription',aprescription)
  //     // const result = ArrayGet.filter((word) => word.prescriptionId === value);
  //     const params = { prescriptionId: value };
  //     const result = await GetPrescriptionDetail(params);
  //     // console.log(result1.data);
  //     SetRender(result.data);

  //     // console.log('render', render)
  //     // console.log('render',render)
  //     // SetRender(result)
  //     // setDetailMedic(Object.keys(GetData.data.data).map(key=> console.log(GetData.data.data[key])  ))
  //     // setDetailMedic(Object.keys(GetData.data.data).map(key => GetData[key].item[0]));
  //     // const get = Object.values(GetData.data.data)
  //     // setDetailMedic(get)
  //   } else {
      
  //   }
  // };

  const FetchRenderTableMedication = async () => {
    const params = { page: 1, limit: 30 };
    const GetData = await GetMedication(params);
    let ArrayGet = GetData.data.data;
    // console.log("", ArrayGet);
    // console.log('detailAprescription',aprescription)
    const result = ArrayGet.filter((word) => word.NAME === value);
    console.log("result", result);
    // const result = ArrayGet.filter(word => word.Nam_Batdau = aprescription[0]?.Nam_Batdau);
    {
      value && SetRender([...render, result[0]]);
    }
  }
  
  const FetchRenderTablePrescription = async () => {
    const params = { prescriptionId: value };
    const result = await GetPrescriptionDetail(params);
    // console.log(result1.data);
    SetRender(result.data);
  }

  useEffect(() => {
    FetchDataOptions();
  }, [switchSelected]);

  useEffect(() => {
    switchSelected ? FetchRenderTablePrescription() : FetchRenderTableMedication();
  } ,[value])

  // useEffect(() => {
  //   FetchRenderTable();
  // }, [switchSelected]);

  console.log("value", value);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} md={12}>
        <Paper className={classes.papper}>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                onChange={handleChangeSwitch}
                value={switchSelected}
              />
            }
            label="Đơn thuốc có sẵn"
            checked={switchSelected}
            labelPlacement="start"
          />
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={12}>
        <Autocomplete
          multiple={false} 
          disablePortal
          autoHighlight
          id="combo-box-demo"
          options={switchSelected ? detailMedic : detailAprescription}
          value={switchSelected ? medic : aprescription}
          onChange={switchSelected ? handleChange : handlAaprescriptionChange}
          getOptionLabel={switchSelected ? option => option.RowNum : option => option.Ten_Nienkhoa} //render UI
          renderInput={(params) => switchSelected ? <TextField {...params} label="Tên Thuốc" /> : <TextField {...params} label="Tên Đơn" />}
        />
      </Grid> */}
      <Grid item xs={12} md={12}>
        <Autocomplete
          id="combo-box-demo"
          // value={value}
          onChange={handleChange}
          options={options}
          isOptionEqualToValue={(option, value) =>
            switchSelected
              ? option?.RowNum === value?.RowNum
              : option?.NAME === value?.NAME
          }
          getOptionLabel={(option) =>
            switchSelected ? option?.RowNum || "" : option?.NAME || ""
          } //render UI
          renderInput={(params) => (
            <TextField {...params} label="Tìm kiếm" variant="outlined" />
          )}
        />
        {/* {
           switchSelected?
           (
             <>
             <Autocomplete
              id="combo-box-demo"
              multiple
              options={options}
              getOptionLabel={(option) => option.RowNum || ""} //render UI
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
              />
           
             </>
           ):
           (
              <Autocomplete
              id="combo-box-demo"
              options={options}
              onChange={(event, value) => console.log('onchange',value)}
              isOptionEqualToValue={(option, value) => option.Ten_Nienkhoa === value.Ten_Nienkhoa}
              getOptionLabel={(option) => option.Ten_Nienkhoa || ""}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
              />
           )
         } */}
      </Grid>
      {/* {
      switchSelected ? (
        <Grid item xs={12} md={12}>
        <Autocomplete
          multiple={true} 
          disablePortal
          autoHighlight
          id="combo-box-demo"
          options={detailMedic }
          value={medic}
          onChange={handleChange}
          getOptionLabel={option => option.RowNum ?? '' } //render UI
          isOptionEqualToValue={(option, value) => option.RowNum === value.RowNum}
          renderInput={(params) =>  <TextField {...params} label="Tên Thuốc" />}
        />
      </Grid>
      ) : (
        <Grid item xs={12} md={12}>
        <Autocomplete
          multiple={false} 
          disablePortal
          autoHighlight
          id="combo-box-demo"
          options={ detailAprescription}
          isOptionEqualToValue={(option, value) => option.Nam_Batdau === value.Nam_Batdau}
          value={ aprescription}
          onChange={ handlAaprescriptionChange}
          getOptionLabel={ option => option.Ten_Nienkhoa ?? ''} //render UI
          renderInput={(params) => <TextField {...params} label="Tên Đơn" />}
        />
      </Grid>
      )
      } */}
      <Grid item xs={6}>
        <Paper className={classes.papper}>Tên thuốc </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Sáng</Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Viên</Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Trưa</Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Viên</Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Tối</Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={classes.papper}>Viên</Paper>
      </Grid>

      {render.map((item, index) => (
        <Box
          // display='flex'
          // flexDirection='row'
          // gap={1}
          sx={{
            justifyContent: "space-around",
            flexFlow: "row wrap",
            p: 2,
            border: "1px dashed grey",
          }}
          key={index}
        >
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              {switchSelected ? item.medicationId : item.NAME}
            </Grid>
            <Grid item xs={1}>
              <Checkbox {...label} />
            </Grid>
            <Grid item xs={1}>
              <Input inputProps={ariaLabel} />
            </Grid>
            <Grid item xs={1}>
              <Checkbox {...label} />
            </Grid>
            <Grid item xs={1}>
              <Input inputProps={ariaLabel} />
            </Grid>
            <Grid item xs={1}>
              <Checkbox {...label} />
            </Grid>
            <Grid item xs={1}>
              <Input inputProps={ariaLabel} />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(SelectDateDaypart);
