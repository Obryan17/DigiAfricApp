import React from 'react'
import style from './../styles/Footer.module.css'
<<<<<<< HEAD
import { Copyright, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
=======
import { Copyright, Facebook, Instagram, Linkedin, Twitch, Twitter } from 'lucide-react';
>>>>>>> 482e67647c249fae221c25a6b7f2771ab5d13600
import logo from './../../assets/icones/logoWhite.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={style.options}>
          <section>
            <ul>
              <li>
                {" "}
                <h2>Besoin d'aide</h2>
              </li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Carrer</li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                {" "}
                <h2>Besoin d'aide</h2>
              </li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Carrer</li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <h2>Company </h2>
              </li>
              <li>About Us</li>
              <li>Blayze Blog</li>
              <li>Services</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <h2>More info</h2>
              </li>
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <h2>Location</h2>
              </li>
              <li>support@digitalAfrica.com</li>
              <li>Lomé - Togo</li>
              <li>Segbe -Sagbado</li>
            </ul>
          </section>
        </div>
        <div className={style.socialNetworkAndLogo}>
          <section className={style.socialNetwork}>
            <article>
              <Facebook />
            </article>
            <article>
              <Instagram />
            </article>
            <article>
              <Twitter />
            </article>
            <article>
              <Linkedin />
            </article>
          </section>
          <section className={style.logo}>
            <img src={logo} alt="" srcset="" />
          </section>
        </div>
        <div className={style.copyright}>
            Copyright <Copyright/>  2023 DigitalAfrica Company.All right,reserved .
        </div>
      </footer>
    </div>
  );
}

export default Footer
