import { Container, Typography } from "@mui/material"

const Footer = () => {
    return(
        <Container sx={{position:'absolute', left:0, minWidth:'100vw',height:'10vh', backgroundColor:'black', color:'white', fontFamily:'Montserrat', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography sx={{fontFamily:'Montserrat'}}>Finance App by 2023</Typography>
        </Container>
    )
}

export default Footer