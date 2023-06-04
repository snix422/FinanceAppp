import { Container } from "@mui/material"
import AddBudget from "./AddBudget"
import IncreaseBudget from "./IncreaseBudget"

const ActionBudget = () => {
    return(
        <Container sx={{display:'flex', flexDirection:{
            xl:'row',
            lg:'row',
            md:'column',
            sm:'column',
            xs:'column'
        }, justifyContent:'center', alignItems:'center', paddingTop:'100px',width:'100vw', gap:'30px'}}>
            <AddBudget />
            <IncreaseBudget />
        </Container>
    )
}

export default ActionBudget