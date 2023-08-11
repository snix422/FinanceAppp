import { Typography, Box, Container,TextField, Button, Alert } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";


const SignUp =  () => {
   
    const [name, setName] = useState('')
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        login:'',
        password:'',
        name:'',
        checkPass:''
    })
    const [userId, setUserId] = useState<number|null>(null);
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();

    const validatorUser = () => {
        if(name.length === 0){
          setErrors(previousState=>{return{...previousState, name:'Imię jest wymagane'}})
          return 'Imię jest wymagane'
        }else if(name.length < 4){
          setErrors(previousState=>{return{...previousState,name: 'Imię musi posiadać min. 4 znaków'}});
          return 'Imię musi posiadać min. 3 znaków'
        }
        if(login.length === 0){
            setErrors(previousState=>{return{...previousState, login:'Login jest wymagany'}})
            return 'Login jest wymagany'
          }else if(login.length < 5){
            setErrors(previousState=>{return{...previousState,login: 'Login musi posiadać min. 5 znaków'}});
            return 'Login musi posiadać min. 5 znaków'
          }
        if(password.length === 0){
          setErrors(previousState=>{return{...previousState, password: 'Hasło jest wymagane'}});
         return 'Hasło jest wymagane'
        }else if(password.length < 5 ){
          setErrors(previousState=>{return{...previousState, password: 'Hasło musi posiadać min. 5 znaków'}});
          return 'Hasło musi posiadać min. 5 znaków'
        }
        if(confirmPassword !== password){
            setErrors(previousState=>{return{...previousState, checkPass:'Hasła nie są takie same'}});
            return 'Hasła nie są takie same'
        }
        return null
      }
  
    const RegisterUser = async () => {

        setErrors({name:'',login:'',password:'',checkPass:''});
        let errorMsg = validatorUser();
        if(errorMsg){
            if(errorMsg === 'Imię jest wymagane'){
                return
            }else if(errorMsg === 'Imię musi posiadać min. 3 znaków'){
                return
            }
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
            if(errorMsg === 'Hasła nie są takie same'){
                return
            }
          }

        try{
            const res =  await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx7ElxnVGWEcB8q-AtMXmKbDbFLfd9tdI', {
            email: login,
            password: password,
            returnSecureToken: true,
           })
           res.data.displayName=name;
            }catch(ex:any){
            setResponse(ex.response.data.error.message);
            return
            if(response !== null){
                setLogin('');
                setPassword('');
                return
              }
           }
        
           axios.post('https://finance-app-77bbd-default-rtdb.europe-west1.firebasedatabase.app/Users.json',{
            idUser:userId,
            email:login,
            name:name,
            password:password,
           })
        
        setLogin('');
        setPassword('');
        setName('');
        setConfirmPassword('')  
        navigate('/');
    }

    const backtoHome = () => {
        navigate('/')
    }

    const backToLogin = () => {
        navigate('/signin')
    }

    const sendDataUser = (id:any) => {
        axios.post('https://finance-app-77bbd-default-rtdb.europe-west1.firebasedatabase.app/Users.json',{
            idUser:id,
            email:login,
            name:name,
            password:password,
           })
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
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '25px', marginBottom: '30px', marginTop:'20px'}}>Rejestracja</Typography>
            {errors.name  ? <TextField  error helperText={errors.name} value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" label="Name" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" label="Name" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {errors.login.length > 0 ? <TextField  error helperText={errors.login} value={login} onChange={(e)=>setLogin(e.target.value)} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField> 
            : <TextField  value={login} onChange={(e)=>setLogin(e.target.value)} variant="outlined" label="Login" color="warning" sx={{width:'300px', marginBottom:'10px'}}></TextField>}
            {errors.password ? <TextField type="password" error helperText={errors.password} value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField type="password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {errors.checkPass ? <TextField type="password" error helperText={errors.checkPass} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} variant="outlined"  color="warning" label="Potwierdź hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             
             {response === 'INVALID_EMAIL'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Email nieprawidłowy!!!</Typography></Alert> : null }
             {response === 'EMAIL_EXISTS'  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Ten mail jest już używany!!!</Typography></Alert> : null }
            <Button color="warning" variant="contained" disableElevation sx={{width: '250px', marginTop:'20px'}} onClick={RegisterUser}>Zarejestruj się</Button>
            <Typography sx={{marginTop: '10px'}}>Masz konto ?</Typography>
            <Button variant="outlined" color="success" sx={{marginTop: '10px'}} onClick={backToLogin}>Zaloguj się</Button>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{marginTop: '50px', marginBottom:'20px' }} onClick={backtoHome}>
                Wróć
            </Button>
            </Box>
        </Container>
    )
}

export default SignUp