import React from 'react'
import style from './../styles/Header.module.css'
import logo from './../../assets/icones/logo.png'
import {MapPin,GanttChart, ShoppingCart, User, ChevronDown} from 'lucide-react'

const Header = () => {
  return (
  <div>
    <header>
    <section className={style.logoAndLocation}>
        <article className={style.logo}>
            <img src={logo} alt="" />
        </article>
        <article className={style.location}>
            <MapPin color='#006494' />
            <p>Lomé-Togo</p>
            <GanttChart color='#003554' />
          
        </article>
       
    </section>
    <section className={style.SearchAndCardAndUserPlace}>
     <input type="text" placeholder='  Search' />
     <article className={style.card}>
        <ShoppingCart/>
        <p>Cart</p>
     </article>
   <section className={style.userPlace}>
    <article className={style.userProfile}>
        <User/>
       

    </article>
    <ChevronDown color='#006494'/>

   </section>
    </section>



    
  </header>
  </div>
  )
}

export default Header
