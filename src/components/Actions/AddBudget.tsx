import { Alert, Box, Button, Container, FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material"
import { useState } from "react";
import '../../App.css';
import { useDispatch } from "react-redux";
import { influenceAndExpenditureActions } from "../../app/store";


const AddBudget = () => {

    const [month, setMonth] = useState('');
    const [price, setPrice] = useState(0);
    const [error, setError] = useState<boolean>(false);

    const date = new Date();

    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];

    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
    const currentMonthOnNumber = date.getMonth();
    const currentMonth = months[currentMonthOnNumber];

    const handleChange = (event:any) => {
    setMonth(event.target.value);
  }

  const dispatch = useDispatch();
  const addBudget = (price:number,month:string) => {

    if(month?.length == 0 || price === 0 || null){
        setError(true);
    }else{
        dispatch(influenceAndExpenditureActions.addInfluence({price:price,monthBudget:month,day:currentDay,year:currentYear,month:currentMonth}))
        setMonth('');
        setPrice(0)  
        setError(false);
    }
}


    return(
        <Container className="bg_add-budget" sx={{border:'none', borderRadius:'10px', width:{
          xl:'40vw',
          lg:'40vw',
          md:'50vw',
          sm:'70vw',
          xs:'90vw'
        }, minHeight:'25vh', marginTop:'15px', paddingBottom:'20px'}}>
        <Typography sx={{marginTop:'10px', fontSize:'25px',fontWeight:'bold', fontFamily:'Montserrat'}}>Dodaj swój budżet</Typography>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'15vh'}}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount" sx={{color:'white'}}>Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start" sx={{color:'white'}}>$</InputAdornment>}
            label="Amount"
            sx={{color:'white'}}
            value={price}
            onChange={(event:any)=>{setPrice(event.target.value)}}
          />
        </FormControl>
      <FormControl sx={{width:'200px'}}>
      <InputLabel id="demo-simple-select-label">Miesiąc</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={month}
        label="Month"
        onChange={handleChange}
      >
        <MenuItem value={'Styczen'}>Styczeń</MenuItem>
        <MenuItem value={'Luty'}>Luty</MenuItem>
        <MenuItem value={'Marzec'}>Marzec</MenuItem>
        <MenuItem value={'Kwiecien'}>Kwiecień</MenuItem>
        <MenuItem value={'Maj'}>Maj</MenuItem>
        <MenuItem value={'Czerwiec'}>Czerwiec</MenuItem>
        <MenuItem value={'Lipiec'}>Lipiec</MenuItem>
        <MenuItem value={'Sierpien'}>Sierpień</MenuItem>
        <MenuItem value={'Wrzesien'}>Wrzesień</MenuItem>
        <MenuItem value={'Pazdziernik'}>Październik</MenuItem>
        <MenuItem value={'Listopad'}>Listopad</MenuItem>
        <MenuItem value={'Grudzien'}>Grudzień</MenuItem>
      </Select>
    </FormControl>
    </Box>
    <Box component='button' className="btn_add-budget" onClick={()=>{addBudget(price,month)}}>Dodaj budżet</Box>
    {error ?  <Alert sx={{marginTop:'10px'}} severity="error">Uzupełnij pola</Alert> : null}
    </Container>
    )

}

export default AddBudget