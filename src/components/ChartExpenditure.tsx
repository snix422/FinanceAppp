import { Container, Typography } from "@mui/material"
import { Doughnut } from "react-chartjs-2"
import { useSelector } from "react-redux"
 

const ChartExpenditure = () => {

    const zakupy = useSelector((state:any)=>state.influenceAndExpenditure.categoryZakupy);
    const paliwo = useSelector((state:any)=>state.influenceAndExpenditure.categoryPaliwo);
    const leki = useSelector((state:any)=>state.influenceAndExpenditure.categoryLeki);
    const podroze = useSelector((state:any)=>state.influenceAndExpenditure.categoryPodroze);
    const dzieci = useSelector((state:any)=>state.influenceAndExpenditure.categoryDzieci);
    const rachunki = useSelector((state:any)=>state.influenceAndExpenditure.categoryRachunki);
    const kredyt = useSelector((state:any)=>state.influenceAndExpenditure.categoryKredyt);

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
                data: [zakupy,paliwo,leki,podroze,dzieci,rachunki,kredyt],
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