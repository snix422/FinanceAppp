import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartSummary from "./ChartSummary";
import ChartExpenditure from "./ChartExpenditure";
import axios from "axios";
import { RootState } from "../app/store";

const CurrentMonthStatistic = () => {
    const budget = useSelector((state:RootState)=>state.influenceAndExpenditure.monthBudget);
    const expenditure = useSelector((state:RootState)=>state.influenceAndExpenditure.monthExpenditure);
    const [savings, setSavings] = useState(0);
    const [expenditureMonth, setExpenditureMonth] = useState([]);

    const date = new Date();
    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    const currentMonthOnNumber = date.getMonth();
    const currentMonth = months[currentMonthOnNumber];  

    useEffect(()=>{
        setSavings(budget-expenditure);
    },[budget,expenditure])

    useEffect(()=>{
        axios.post('https://finance-app-77bbd-default-rtdb.europe-west1.firebasedatabase.app/Summary.json',{
            idUser:localStorage.getItem('iduser'),
            month:currentMonth,
            budget:budget,
            expenditure:expenditure,
            savings:savings
        })
    },[])

    return(
            
            <Container sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItem:'center', marginTop:'60px'}}>
            <Typography sx={{marginBottom:'20px', fontFamily:'Montserrat', fontSize:'30px', minWidth:'100px', textAlign:'center', color:'white'}}>Dane statystyczne obecnego miesiąca</Typography>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', gap:'100px'}}>
            <Box sx={{display:'flex', flexDirection:'column',gap:'40px',width:'600px',alignItems:'center', flexWrap:'wrap'}}>
            <Typography sx={{fontSize:{
                xl:'25px',
                lg:'25px',
                md:'25px',
                sm:'20px',
                xs:'15px'
            }, fontFamily:'Montserrat'}}>Twój budżet w tym miesiącu: {budget}zł</Typography>
            <Typography sx={{fontSize:{
                xl:'25px',
                lg:'25px',
                md:'25px',
                sm:'20px',
                xs:'15px'
            }, fontFamily:'Montserrat'}}>Twoje wydatki w tym miesiącu: {expenditure}zł</Typography>
            <Typography sx={{fontSize:{
                xl:'25px',
                lg:'25px',
                md:'25px',
                sm:'20px',
                xs:'15px'
            }, fontFamily:'Montserrat'}}>Twoje oszczędności w tym miesiącu: {savings}zł</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:{
                xl:'row',
                lg:'row',
                md:'column',
                sm:'column',
                xs:'column'
            }, gap:{
                xl:'30px',
                lg:'80px',
                md:'80px',
                sm:'80px',
                xs:'80px'
            }}}>
            {budget || expenditure ?  <ChartSummary budget={budget} expenditure={expenditure} savings={savings} expenditureMonth={expenditureMonth}/>: null}
            {expenditure ?  <ChartExpenditure />: null}
            </Box>
            </Box>
            </Container>
    )
}

export default CurrentMonthStatistic