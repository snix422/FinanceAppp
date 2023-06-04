import { Box, Container, Typography } from "@mui/material"
import addbudgetImg from '../assets/addbudget.png'
import addExpenditureImg from '../assets/addexpenditure.png'
import summaryImg from '../assets/summary.png'
import historyImg from '../assets/history.png'

const WhyChooseWe = () => {
    return(
        <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'200px'}}>
            <Typography sx={{fontFamily:'Montserrat', fontSize:'40px', Top:'100px'}}>Dlaczego My?</Typography>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                <Typography sx={{fontFamily:'Montserrat', fontSize:{
                    xl:'25px',
                    lg:'25px',
                    md:'23px',
                    sm:'20px',
                    xs:'15px'
                }, marginBottom:'50px', fontWeight:'bold'}}>1. Możliwość dodawanie budżetu i wydatków</Typography>
                <Box sx={{display:'flex', flexDirection:{
                    xl:'row',
                    lg:'row',
                    md:'column',
                    sm:'column',
                    xs:'column'
                },gap:'30px'}}>
                <Box component="img" src={addbudgetImg} sx={{width:{
                    xl:'450px',
                    lg:'450px',
                    md:'450px',
                    sm:'400px',
                    xs:'350px'
                }, height:'200px'}}></Box>
                <Box component="img" src={addExpenditureImg} sx={{width:{
                    xl:'450px',
                    lg:'450px',
                    md:'450px',
                    sm:'400px',
                    xs:'350px'
                }, height:'200px'}}></Box>
                </Box>
                <Typography sx={{width:'80%', marginTop:'15px', fontFamily:'Montserrat', fontSize:'20px', marginBottom:'30px'}}>
                    Nasza aplikacja posiada pole do dodawania budżetu, w którym możemy wybrać ilość gotówki oraz miesiąc w którym możemy dodać nasz budżet, 
                    znajduje się również drugie pole do dodawanie wydatków w obecnym miesiącu, możemy również wybrać ilość gotówki i kategorie naszego wydatku
                </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
            <Typography sx={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'50px', fontWeight:'bold'}}>2. Podsumowanie miesiąca</Typography>
                <Box component='img' src={summaryImg} sx={{marginTop:'30px', marginLeft:'-50px',width:{
                    xl:'750px',
                    lg:'750px',
                    md:'700px',
                    sm:'600px',
                    xs:'400px'
                }, height:{
                    xl:'500px',
                    lg:'500px',
                    md:'500px',
                    sm:'600px',
                    xs:'400px'
                }, display:{
                    xl:'block',
                    lg:'block',
                    md:'block',
                    sm:'block',
                    xs:'none'
                } }}></Box>
                <Typography sx={{width:'80%', marginTop:'15px', fontFamily:'Montserrat', fontSize:'20px', marginBottom:'30px'}}>
                    Po dodaniu budżetu i wydatków miesięcznych użytkownik otrzymuje informacje o ilości swojego budżetu, wydatków oraz zaoszczędzonych pieniędzy. Poniżej są przedstawione 2 wykresy które przedstawiają czytelnie zestawienie budżetu, wydatków oraz oszczędnośći. Na 2 wykresie jest ukazany wykres z wydatkami podzielonymi na dane kategorie
                </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px', flexWrap:'wrap'}}>
            <Typography sx={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'50px', fontWeight:'bold'}}>3. Historia przychodów i wydatków</Typography>
                <Box component='img' src={historyImg} sx={{marginTop:'30px', marginLeft:'-50px', width:{
                    xl:'1200px',
                    lg:'1200px',
                    md:'800px',
                    sm:'800px',
                    xs:'500px'
                }, height:'400px', display:{
                    xl:'block',
                    lg:'block',
                    md:'block',
                    sm:'none',
                    xs:'none'
                }}}></Box>
                <Typography sx={{width:'80%', marginTop:'15px', fontFamily:'Montserrat', fontSize:'20px', marginBottom:'30px'}}>
                     Aplikacja umożliwia wyświetlanie historii przychodów oraz wydatków, możliwe są 3 opcje selekcjonowania na wszystkie,obecnego dnia albo obecnego miesiąca
                </Typography>
            </Box>
        </Container>
    )
}

export default WhyChooseWe