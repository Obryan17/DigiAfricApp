import React from 'react'
import style from './../styles/Connexion.module.css'
import image from './../../assets/images/firstproduct.jpg'

const Connexion = () =>{
    return (
      <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.form}>
            <h2>Se connecter</h2>
            <p>Veillezvous connecter pour avoir acces à votre compte</p>
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Entrez votre e-mail"
              />
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
              />
              <button type="submit">Se connecter</button>
              <p> Vous n'avez pas de compte ?</p>
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