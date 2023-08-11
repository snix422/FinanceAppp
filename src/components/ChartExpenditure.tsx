import { Container, Typography } from "@mui/material"
import { Doughnut } from "react-chartjs-2"
import { useSelector } from "react-redux"
import { RootState } from "../app/store";
 

const ChartExpenditure = () => {

    const shopping = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryZakupy);
    const fuel = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryPaliwo);
    const medicines = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryLeki);
    const travel = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryPodroze);
    const children = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryDzieci);
    const bills = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryRachunki);
    const credit = useSelector((state:RootState)=>state.influenceAndExpenditure.categoryKredyt);

    return(
    <Container sx={{ width:{
        xl:'500px',
        lg:'500px',
        md:'500px',
        sm:'400px',
        xs:'400px'
    }, maxHeight:'200px', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', gap:'30px',}}>
        <Typography sx={{fontFamily:'Montserrat', fontSize:'25px'}}>Zestawienie wydatków</Typography>
         <Doughnut data={{labels:['Zakupy','Paliwo','Leki','Podróże i relaks','Dzieci','Rachunki','Kredyt'],
            datasets:[{
                label:'Rodzaje wydatków',
                data: [shopping,fuel,medicines,travel,children,bills,credit],
                backgroundColor:['green','red','lightblue','yellow','orange','black','grey']
            }],    
        }}
        height={200}
        width={200}
        options={{
            maintainAspectRatio:false
        }}></Doughnut>
    </Container>)
}

export default ChartExpenditure