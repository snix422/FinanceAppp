import { Box, Container, Table, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from "react";
import { IState, RootState, influenceAndExpenditureActions } from "../app/store";
import DeleteIcon from '@mui/icons-material/Delete';

export interface IInfluenceAndExpenditure {
    amount:number,
    monthBudget:string,
    month:string,
    year:number,
    day:number,
    type:string,
    category?:string,
    id?:number
}

const History = () => {

    const shoppingListItems = useSelector((state:RootState)=>state.influenceAndExpenditure.items);
    const dispatch = useDispatch();
    const [value,setValue] = useState('1');
   
   
    const handleChange = (event:React.SyntheticEvent,newValue:string) => {
        setValue(newValue);
      };

    const removeTransaction = (item:IInfluenceAndExpenditure) => {
        if(item.type === 'influence'){
            dispatch(influenceAndExpenditureActions.removeInfluence(item))
        }else{
            dispatch(influenceAndExpenditureActions.removeExpenditure(item))
        }
    }

    const bugetLocalStorage = localStorage.getItem('budgetItems');
  
    useEffect(()=>{
        dispatch(influenceAndExpenditureActions.loadItemsFromLocal())
    },[bugetLocalStorage])

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
                </TabList>
                 </Box>
            <TabPanel value="1">
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', gap:'5px',}}>
            {shoppingListItems.length > 0 && shoppingListItems.map((item:IInfluenceAndExpenditure)=>{
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
                    <TableCell sx={{color:'white',width:'20vw'}}>Data dodania: {item.day+item.month}</TableCell>
                    {item.category ? <TableCell sx={{color:'white', width:{
                         xl:'20vw',
                         lg:'20vw',
                         md:'20vw',
                         sm:'15vw',
                         xs:'30vw'
                    }}}>Kategoria: {item.category}</TableCell> : null}
                    <TableCell><DeleteIcon onClick={()=>removeTransaction(item)} sx={{color: item.type === 'influence' ? 'red' : 'white'}} /></TableCell>
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
                    <TableCell sx={{color:'white',width:'20vw'}}>Data dodania: {item.day+item.month}</TableCell>
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