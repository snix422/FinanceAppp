import { Box, Container, Table, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from "react";
import { IState } from "../app/store";

export interface IInfluenceAndExpenditure {
    amount:number,
    monthBudget:string,
    month?:string,
    year:number,
    day:number,
    type:string,
    category?:string,
    id?:number

}

const History = () => {

    const shoppingListItems = useSelector((state:any)=>state.influenceAndExpenditure.items);
    //const budget = useSelector((state:any)=>state.influenceAndExpenditure.monthBudget);
    //const dayHistory = useSelector((state:any)=>state.influenceAndExpenditure.dayHistory);
    //const monthHistory2 = useSelector((state:any)=>state.influenceAndExpenditure.monthHistory);
    console.log(shoppingListItems);

    const [value,setValue] = useState('1');
    const [todayHistory, setTodayHistory] = useState([]);
    const [monthHistory, setMonthHistory] = useState([]);
    //const [monthBudget, setMonthBudget] = useState<number>(0);

    useEffect(()=>{
        const arrD = shoppingListItems.filter((item:IInfluenceAndExpenditure)=>item.day == currentDay && item.monthBudget == currentMonth && item.year == currentYear);
        const arrM = shoppingListItems.filter((item:IInfluenceAndExpenditure)=>item.monthBudget == currentMonth && item.year == currentYear);
        console.log(arrD);
        setTodayHistory(arrD);
        setMonthHistory(arrM);
    },[])

    console.log(todayHistory);
    console.log(monthHistory);

    const handleChange = (event:any, newValue:string) => {
        setValue(newValue);
      };

    const date = new Date();
    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
    const currentMonthOnNumber = date.getMonth();
    const currentMonth = months[currentMonthOnNumber];
   
    return(
        <Container sx={{marginTop:'50px'}}>
            <Typography sx={{fontFamily:'Montserrat', fontSize:'25px', fontWeight:'bold', textAlign:'center', marginBottom:'20px'}}>Historia wpływów i wydatków</Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:{
                    xl:'center',
                    lg:'center',
                    md:'center',
                    sm:'center',
                    xs:'center'
                } }}>
                 <TabList onChange={handleChange} aria-label="lab API tabs example">
                 <Tab label="Wszystkie" value="1" />
                 <Tab label="Dzisiejsze" value="2" />
                 <Tab label="Ten miesiąc" value="3" />
                </TabList>
                 </Box>
            <TabPanel value="1">
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', gap:'5px',}}>
            {shoppingListItems.map((item:IInfluenceAndExpenditure)=>{
                console.log(item.day);
                return(
                    <Box className={item.type} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', height:{
                        xl:'50px',
                        lg:'50px',
                        md:'50px',
                        sm:'80px',
                        xs:'80px'
                    }, borderRadius:'10px',color:'white',width:{
                        xl:'60vw',
                        lg:'60vw',
                        md:'60vw',
                        sm:'80vw',
                        xs:'90vw'
                    }}}>
                    <Table sx={{ minWidth: {
                        xl:'700px',
                        lg:'700px',
                        md:'600px',
                        sm:'400px',
                    }, color:'white' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell sx={{color:'white',width:{
                        xl:'20vw',
                        lg:'20vw',
                        md:'20vw',
                        sm:'15vw',
                        xs:'30vw'
                    }}}>Cena: {item.amount}</TableCell>
                    <TableCell sx={{color:'white',width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Miesiąc: {item.monthBudget || item.month}</TableCell>
                    <TableCell sx={{color:'white',width:'20vw'}}>Data dodania: {item.day+item.monthBudget}</TableCell>
                    {item.category ? <TableCell sx={{color:'white', width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Kategoria: {item.category}</TableCell> : null}
                    </TableRow>
                    </TableHead>
                    </Table>
                </Box>
                   
                )
            })
            }
            </Box>
            </TabPanel>
            <TabPanel value="2">
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', gap:'5px',}}>
            {shoppingListItems.map((item:IInfluenceAndExpenditure)=>{
                console.log(item.day);
                return(
                    <Box className={item.type} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', height:{
                        xl:'50px',
                        lg:'50px',
                        md:'50px',
                        sm:'80px',
                        xs:'80px'
                    }, borderRadius:'10px',color:'white',width:{
                        xl:'60vw',
                        lg:'60vw',
                        md:'60vw',
                        sm:'80vw',
                        xs:'90vw'
                    }}}>
                    <Table sx={{ minWidth: {
                        xl:'700px',
                        lg:'700px',
                        md:'600px',
                        sm:'400px',
                    }, color:'white' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell sx={{color:'white',width:{
                        xl:'20vw',
                        lg:'20vw',
                        md:'20vw',
                        sm:'15vw',
                        xs:'30vw'
                    }}}>Cena: {item.amount}</TableCell>
                    <TableCell sx={{color:'white',width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Miesiąc: {item.monthBudget || item.month}</TableCell>
                    <TableCell sx={{color:'white',width:'20vw'}}>Data dodania: {item.day+item.monthBudget}</TableCell>
                    {item.category ? <TableCell sx={{color:'white', width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Kategoria: {item.category}</TableCell> : null}
                    </TableRow>
                    </TableHead>
                    </Table>
                </Box>
                   
                )
            })
            }
            </Box>
            </TabPanel>
            <TabPanel value="3">
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', gap:'5px',}}>
            {shoppingListItems.map((item:IInfluenceAndExpenditure)=>{
                console.log(item.day);
                return(
                    <Box className={item.type} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', height:{
                        xl:'50px',
                        lg:'50px',
                        md:'50px',
                        sm:'80px',
                        xs:'80px'
                    }, borderRadius:'10px',color:'white',width:{
                        xl:'60vw',
                        lg:'60vw',
                        md:'60vw',
                        sm:'80vw',
                        xs:'90vw'
                    }}}>
                    <Table sx={{ minWidth: {
                        xl:'700px',
                        lg:'700px',
                        md:'600px',
                        sm:'400px',
                    }, color:'white' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell sx={{color:'white',width:{
                        xl:'20vw',
                        lg:'20vw',
                        md:'20vw',
                        sm:'15vw',
                        xs:'30vw'
                    }}}>Cena: {item.amount}</TableCell>
                    <TableCell sx={{color:'white',width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Miesiąc: {item.monthBudget || item.month}</TableCell>
                    <TableCell sx={{color:'white',width:'20vw'}}>Data dodania: {item.day+item.monthBudget}</TableCell>
                    {item.category ? <TableCell sx={{color:'white', width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Kategoria: {item.category}</TableCell> : null}
                    </TableRow>
                    </TableHead>
                    </Table>
                </Box>
                   
                )
            })
            }
            </Box>
            </TabPanel>
         </TabContext>
        </Container>
    )
}

export default History