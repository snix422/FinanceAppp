import { Typography, Box, Container, TextField, Button, Alert} from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";

const SignIn = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        login:'',
        password:''
    });
 
    const [response, setResponse] = useState(null);
    const [errorLogin, setErrorLogin] = useState('');

    const navigate = useNavigate();

    const validatorUser = () => {
        if(login.length === 0){
          setErrors(previousState=>{return{...previousState, login:'Login jest wymagany'}})
          return 'Login jest wymagany'
        }else if(login.length < 4){
          setErrors(previousState=>{return{...previousState,login: 'Login musi posiadać min. 4 znaków'}});
          return 'Login musi posiadać min. 4 znaków'
        }
        if(password.length === 0){
          setErrors(previousState=>{return{...previousState, password: 'Hasło jest wymagane'}});
         return 'Hasło jest wymagane'
        }else if(password.length < 5 ){
          setErrors(previousState=>{return{...previousState, password: 'Hasło musi posiadać min. 5 znaków'}});
          return 'Hasło musi posiadać min. 5 znaków'
        }
        return null
      }
 
    async function LogInUser(){
        setErrors({login:'',password:''});

        let errorMsg = validatorUser();
        if(errorMsg){
            if(errorMsg === 'Login jest wymagany'){
              return
            }else if(errorMsg = 'Login musi posiadać min. 4 znaków'){
              return
            }
            if(errorMsg === 'Hasło jest wymagane'){
              return
            }else if(errorMsg === 'Hasło musi posiadać min. 5 znaków'){
              return
            }
          }
       
        try{
            const res =  await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx7ElxnVGWEcB8q-AtMXmKbDbFLfd9tdI', {
            email: login,
            password: password,
            returnSecureToken: true
           })
           localStorage.setItem('currentuser', login);
           localStorage.setItem('iduser', res.data.localId);
           }catch(ex:any){
            setResponse(ex.response.data.error.message);
            if(response === 'INVALID_PASSWORD' || 'INVALID_EMAIL'){
                setPassword('');
                return
              }
           }

        setLogin('');
        setPassword('');
        navigate('/');
    }

    const backtoHome = () => {
        navigate('/')
    }

    const backtoRegister = () => {
        navigate('/signup');
    }

    return(
        <Container sx={{backgroundColor: 'rgb(240, 238, 238)', minWidth: '100vw', height: '100vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{backgroundColor: 'white', width: {
                xl:'60vw',
                lg:'70vw',
                md:'80vw',
                sm:'90vw',
                xs:'95vw'
            }, minHeight: '40vh', borderRadius: '20px', display: 'flex', flexDirection:'column', alignItems:'center', boxShadow: '-6px 5px 21px -7px rgba(8,8,8,1)'}}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '25px', marginBottom: '30px', marginTop:'20px'}}>Logowanie</Typography>
            {errors.login.length > 0 ? <TextField  error helperText={errors.login} value={login} onChange={(e)=>setLogin(e.target.value)} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  value={login} onChange={(e)=>setLogin(e.target.value)} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {errors.password ? <TextField type="password" error helperText={errors.password} value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {response === 'INVALID_EMAIL' ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Nieprawidłowy E-mail</Typography></Alert> : null }
             {response === 'INVALID_PASSWORD' ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Nieprawidłowe hasło</Typography></Alert> : null }
            <Button color="warning" variant="contained" disableElevation sx={{width: '250px', marginTop:'20px'}} onClick={LogInUser}>Zaloguj się</Button>
            <Typography sx={{marginTop: '10px'}}>Nie masz konta ?</Typography>
            <Button variant="outlined" color="error" sx={{marginTop: '10px'}} onClick={backtoRegister}>Załóż konto</Button>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{marginTop: '50px', marginBottom: '20px' }} onClick={backtoHome}>
                Wróć
            </Button>
            </Box>
        </Container>
    )
}

export default SignIn