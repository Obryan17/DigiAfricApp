import React, { useState } from 'react'
import style from './../styles/Connexion.module.css'
import image from './../../assets/images/bck.jpg'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../api/firebaseConfig'
import { NavLink, useNavigate } from 'react-router-dom'

const Connexion = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const connexionRedirection =()=>{
      navigate('/connexion')
    }

  const login = async(event)=>{
    event.preventDefault();
    try {

      await signInWithEmailAndPassword(auth,email,password)

      alert('user connected')

      navigate('/acceuil')
      
    } catch (error) {

      console.log(error)
      
    }




  }


    return (
      <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.form}>
            <h2>Se connecter</h2>
            <p>Veillezvous connecter pour avoir acces à votre compte</p>
            <form onSubmit={login} action="">
              <input
                type="email"
                name="email"
                placeholder="Entrez votre e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Se connecter</button>
              <p  className={style.link}>
                <NavLink className={style.link} to="/inscription" >Vous n'avez pas de compte ?</NavLink>{" "}
              </p>
            </form>
          </div>
          <div className={style.image}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    );
}
export default Connexion