import React, {useState} from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();
        // do the backend 
        auth.signInWithEmailAndPassword(email, password).then( (auth) =>{
            if(auth){
                history.push('/');
            }
        }
            
        ).catch(error => {
            alert(error);
        }) 
    }

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        }).catch(error =>{
            alert(error);
        });

        // do register
    }
    return (
        <div className='login'> 
            <Link to='/'>
            <img 
            className='login__logo' 
            src="https://graphiste.com/blog/wp-content/uploads/2019/06/logo-amazon-sobre.jpg" 
            alt="loginImage"
            />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                    <button className='login__signInButton' onClick={(e) =>signIn(e)} type='submit'> Sign In</button>
                </form>
                <small>By SignIn you agree to AMAZONE FAKE PETETER condition of Use & Sale. Pleate see our privacy Notice, our cookies Notice and our Interst-base Ads Notice</small>
                <button className='login_registerButtom' onClick={(e) =>register(e)}>Create your Amazone account </button>

            </div>
        </div>
    )
}

 export default Login
