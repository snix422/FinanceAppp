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
  
    const RegisterUser = async () => {
        
        if(name.length == 0){
            setErrors(prevState => {
               return{
                ...prevState, 
                name:'Pole nie może być puste',
               }})
               return
        }else{
            setErrors(prevState => {
                return{
                 ...prevState, 
                 name:'',
                }})
                console.log('git', );
        }
        
        
        if(login.length == 0){
            setErrors(prevState => {
               return{
                ...prevState, 
                login:'za mało liter',
               }})
               return
        }else{
            setErrors(prevState => {
                return{
                 ...prevState, 
                 login:'',
                }})
        }
        
        if(password.length < 4){
            setErrors(prevState => {
                return{
                 ...prevState, 
                 password:'Wymagane 4 znaki',
                }})
            return
        }else{
            setErrors(prevState => {
                return{
                 ...prevState, 
                 password:'',
                }})
        }

        if(password !== confirmPassword){
            setErrors(prevState => {
               return{
                ...prevState, 
                checkPass:'Hasła nie są takie same'
               }})
               return
        }else{
            setErrors(prevState => {
                return{
                 ...prevState, 
                 checkPass:'',
                }})
                console.log('git', );
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
        setErrors(prevState => {
            return{
             ...prevState, 
             login:'',
             password:''
            }})
           
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
            {errors.password ? <TextField error helperText={errors.password} value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined"  color="warning" label="Hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             {errors.checkPass ? <TextField error helperText={errors.checkPass} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} variant="outlined"  color="warning"   sx={{width:'300px', marginBottom:'30px'}}></TextField> 
            : <TextField value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} variant="outlined"  color="warning" label="Potwierdź hasło" sx={{width:'300px', marginBottom:'30px'}}></TextField>}
             
             {response  ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>Ten mail jest już używany!</Typography></Alert> : null }
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