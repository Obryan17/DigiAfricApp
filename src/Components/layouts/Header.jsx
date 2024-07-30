import React from 'react'
import style from './../styles/Header.module.css'
import logo from './../../assets/icones/logo.png'
import {MapPin,GanttChart, ShoppingCart, User, ChevronDown} from 'lucide-react'
import { useAuth } from "../context/useAuth";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

     const { currentUser } = useAuth();
     console.log(currentUser);

     const navigate = useNavigate()


  return (
    <div>
      <header>
        <section className={style.logoAndLocation}>
          <article className={style.logo}>
            <img src={logo} alt="" />
          </article>
          <article className={style.location}>
            <MapPin color="#006494" />
            <p>Lomé-Togo</p>
            <GanttChart color="#003554" />
          </article>
        </section>
        <section className={style.SearchAndCardAndUserPlace}>
          <input type="text" placeholder="  Search" />
          <article className={style.card}>
            <ShoppingCart onClick={()=>{
              navigate('/panier')
            }} />
            <p>Cart</p>
          </article>
          <section className={style.userPlace}>
            {currentUser != null ? (
              <Wrap>
                <WrapItem>
                  <Avatar
                    bg="#006494"
                    name={`${currentUser.email} ${currentUser.prenom}`}
                    src="https://bit.ly/tioluwani-kolawole"
                    borderRadius="50%" // Makes the avatar circular
                    p="15px"
                    color="white"
                  />
                </WrapItem>
              </Wrap>
            ) : (
              <article className={style.userProfile}>
                <User />
              </article>
            )}

            <ChevronDown color="#006494" />
          </section>
        </section>
      </header>
    </div>
  );
}

export default Header
