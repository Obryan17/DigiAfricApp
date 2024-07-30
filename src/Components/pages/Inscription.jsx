import React from 'react'
import style from './../styles/Inscription.module.css'
import image from "./../../assets/images/bck.jpg"
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../api/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'

const Inscription = () => {

    const [nom,setNom] =  useState("")
     const [prenom, setprenom] = useState("");
      const [email, setemail] = useState("");
       const [password, setpassword] = useState("");

       const navigate = useNavigate()


       const createAccount = async(event)=>{

            event.preventDefault();

        try {

          const userCredential =   await createUserWithEmailAndPassword(auth,email,password)

            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                id:user.uid,    
                nom:nom,
                prenom:prenom,
              email: user.email,
              createdAt: new Date(),
              // Ajoutez d'autres informations que vous souhaitez stocker
            });
            alert('utilisateurs cree avec succes')

            navigate('/connexion')
            
        } catch (error) {
            
        }
       }



    return (
      <div className={style.main_inscription}>
        <div className={style.formContainer}>
          <img src={image} alt="" className={style.image} />
          <div className={style.form}>
            <h2>Creer un compte</h2>
            <p>Veiller remplir ce formulaire</p>
            <form onSubmit={createAccount} action="">
              <input
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                type="text"
                name="firstname"
                placeholder="Entrez votre prenom"
                onChange={(e) => setprenom(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Entrezvotre mot de passe"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <button type="submit">Creer un compte</button>
            </form>
            <p>
              <NavLink className={style.link} to="/" >Vous avez déjà un compte ?</NavLink>
            </p>
          </div>
        </div>
      </div>
    );
}
export default Inscription