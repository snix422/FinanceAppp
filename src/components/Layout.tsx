import { Box, Container } from "@mui/material"
import ActionBudget from "./Actions/ActionBudget"
import Header from "./Header/Header"
import CurrentMonthStatistic from "./CurrentMonthStatistic"
import History from "./History"
import { useState,useEffect } from "react"
import AboutApp from "./AboutApp"
import WhyChooseWe from "./WhyChooseWe"
import Footer from "./Footer/Footer"

const Layout = () => {
    
    const [user,setUser] = useState<null|string>(null);

    useEffect(()=>{
        const data = localStorage.getItem('currentuser');
        setUser(data);
    })

    const changeUser = (text:string) =>{
        setUser(text)
    }

    return(
        <Container sx={{minWidth:'100vw',minHeight:'100vh', backgroundColor:'#C39E99', position:'relative'}}>
            <Header changeAuth={changeUser} />
            {user !== null ? <Box><ActionBudget />
            <Box>
                <CurrentMonthStatistic />
                <History />
            </Box></Box> : <Box><AboutApp /><WhyChooseWe /></Box>}
            <Footer />
        </Container>
        
    )
}

export default Layout

