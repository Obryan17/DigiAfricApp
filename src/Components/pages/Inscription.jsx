import React from 'react'
import style from './../styles/Inscription.module.css'
import image from "./../../assets/images/firstproduct.jpg"

const Inscription = () => {
    return(
        <div className={style.main_inscription}>
            <div className={style.formContainer}>
                <img src={image} alt="" className={style.image}/>
            <div className={style.form}>
                <h2>Creer un compte</h2>
                <p>Veiller remplir ce formulaire</p>
                <form action="">
                    <input type="text" name='name' placeholder='Entrez votre nom'/>
                    <input type="text" name='firstname' placeholder='Entrez votre prenom'/>
                    <input type="email" name='email' placeholder='Entrez votre email' />
                    <input type="password" name='password' placeholder='Entrezvotre mot de passe' />
                    <button type='submit'>Creer un compte</button>
                </form>
                <p>Vous avez déjà un compte ?</p>
            </div>
            </div>
        </div>
    )
}
export default Inscription