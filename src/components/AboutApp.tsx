import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import '../App.css';

const AboutApp = () => {

    const navigate = useNavigate();
    const moveToRegister = () => {
        navigate('/signup');
    }
    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', border:'2px soldi blue'}}>
        <Typography sx={{fontSize:'40px', fontFamily:'Montserrat',width:'80%', paddingTop:'200px', textAlign:'center'}}>Finance App</Typography>
        <Typography sx={{fontSize:'20px', fontFamily:'Montserrat', paddingTop:'100px', width:'80%'}}>
            Nasza aplikacja FinanceApp jest dla ludzi, którzy chcą zarządzać swoimi finansami i w przejrzysty sposób kontrolować swoje przychodzi, wydatki oraz oszczędności.
            Aby w pełni korzystać z aplikacji należy stworzyć konto i zalogować się. Aktualnie aplikacja jest w wersji Beta.
        </Typography>
        <button className="btn-register" onClick={moveToRegister}>Załóż konto</button>
        </Box>
    )
}

export default AboutApp