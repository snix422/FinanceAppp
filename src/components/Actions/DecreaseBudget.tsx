import { Alert, Box, Container, FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { influenceAndExpenditureActions } from "../../app/store";

const DecreaseBudget = () => {

    const [category, setCategory] = useState<string|null>(null);
    const [price, setPrice] = useState<number|null>(0);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();

    const date = new Date();

    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];

    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
    const currentMonthOnNumber = date.getMonth();
    const currentMonth = months[currentMonthOnNumber];

    const handleChange = (event:any) => {
    setCategory(event.target.value);
  }

   const addExpense = () => {

        if(category?.length == 0 || price === 0 || null){
            setError(true);
        }else{
            dispatch(influenceAndExpenditureActions.addExpenditure({id:Math.floor(Math.random()*10000),price:price,category:category,year:currentYear,month:currentMonth,day:currentDay}))
            setCategory(null);
            setPrice(0)  
            setError(false);
        }
   }


    return(
        <Container className="bg_increase-budget" sx={{border:'none', borderRadius:'10px', width:{
          xl:'40vw',
          lg:'40vw',
          md:'50vw',
          sm:'70vw',
          xs:'90vw'
        }, minHeight:'25vh', marginTop:'15px', paddingBottom:'20px'}}>
        <Typography sx={{marginTop:'10px', fontSize:'25px', fontFamily:'Montserrat', fontWeight:'bold'}}>Dodaj swoje wydatki</Typography>
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
      <FormControl sx={{width:'350px', color:'white', fontSize:'30px'}}>
      <InputLabel id="demo-simple-select-label" sx={{color:'white'}}>Kategoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Kategoria"
        onChange={handleChange}
      >
        <MenuItem value={'zakupy'}>Zakupy</MenuItem>
        <MenuItem value={'paliwo'}>Paliwo</MenuItem>
        <MenuItem value={'leki'}>Leki</MenuItem>
        <MenuItem value={'podroze'}>Podróże i relaks</MenuItem>
        <MenuItem value={'dzieci'}>Dzieci</MenuItem>
        <MenuItem value={'rachunki'}>Rachunki</MenuItem>
        <MenuItem value={'kredyt'}>Kredyt</MenuItem>
        </Select>
    </FormControl>
    </Box>
    <Box component='button' className="btn_add-budget" onClick={addExpense}>Dodaj swój wydatek</Box>
    {error ?  <Alert sx={{marginTop:'10px'}} severity="error">Uzupełnij pola</Alert> : null}
    </Container>
    )
}

export default DecreaseBudget