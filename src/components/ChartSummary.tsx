import { Container, Typography } from "@mui/material"
import { useEffect } from "react";
import { Doughnut} from "react-chartjs-2"
import { useSelector } from "react-redux" 
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from "axios";

const ChartSummary = (props:any) => {

const Items = useSelector((state:any)=>state.influenceAndExpenditure.items);
/*const expenditure = Items.filter((item:any)=>item.type === "expenditure");
const zakupy = useSelector((state:any)=>state.influenceAndExpenditure.categoryZakupy);
const paliwo = useSelector((state:any)=>state.influenceAndExpenditure.categoryPaliwo);
const leki = useSelector((state:any)=>state.influenceAndExpenditure.categoryLeki);
const podroze = useSelector((state:any)=>state.influenceAndExpenditure.categoryPodroze);
const dzieci = useSelector((state:any)=>state.influenceAndExpenditure.categoryDzieci);
const rachunki = useSelector((state:any)=>state.influenceAndExpenditure.categoryRachunki);
const kredyt = useSelector((state:any)=>state.influenceAndExpenditure.categoryKredyt);*/

ChartJS.register(...registerables);
const date = new Date();
const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
const currentMonthOnNumber = date.getMonth();
const currentMonth = months[currentMonthOnNumber];

useEffect(()=>{
    axios.post('https://finance-app-77bbd-default-rtdb.europe-west1.firebasedatabase.app/Summary.json',{
        idUser:localStorage.getItem('iduser'),
        month:currentMonth,
    })
},[])

    return(
        <Container sx={{ width:{
            xl:'500px',
            lg:'500px',
            md:'500px',
            sm:'400px',
            xs:'400px'
        }, maxHeight:'200px', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', gap:'30px',}}>
            <Typography sx={{fontFamily:'Montserrat', fontSize:'25px'}}>Podsumowanie miesiąca</Typography>
            <Doughnut data={{labels:['Przychody','Wydatki','Zaoszczędzone Pieniądze'],
            datasets:[{
                label:'Podsumowanie miesiąca',
                data: [props.budget,props.expenditure,props.savings],
                backgroundColor:['green','red','lightblue']
            }],    
        }}
        height={200}
        width={200}
        options={{
            maintainAspectRatio:false
        }}></Doughnut>
        </Container>
    )

}

export default ChartSummary