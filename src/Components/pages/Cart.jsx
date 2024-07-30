import React, { useState, useEffect } from "react";
import style from "../styles/Cart.module.css";
import { useCart } from "../context/cartProvider";
import logo from "./../../assets/icones/logo.png";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);

 useEffect(() => {
   // Calcule le total en s'assurant que chaque prix est un nombre
   const newTotal = cartItems.reduce((acc, item) => {
     const prix = Number(item.prix);
     if (!isNaN(prix)) {
       return acc + prix;
     }
     return acc;
   }, 0);
   setTotal(newTotal);
 }, [cartItems]);

  return (
    <div className={style.mainCart}>
      <article className={style.title}>
        <h2>Panier</h2>
      </article>
      <div className={style.main}>
        <div className={style.listCommande}>
          <div className={style.listArticle}>
            <article className={style.clearCart}>
              <h4 onClick={clearCart}>Vider le panier</h4>
              
            </article>
            {cartItems.map((item) => (
              <div key={item.id} className={style.article}>
                <section className={style.imagesAndDescription}>
                  <article className={style.images}>
                    <img src={item.imageUrl} alt={item.nom} />
                  </article>
                  <article className={style.description}>
                    <h2>{item.nom}</h2>
                    <p>{item.caracteristiques}</p>
                  </article>
                </section>
                <section className={style.increment}>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </section>
                <p className={style.priceProduct}>{item.prix} FCFA</p>
                <button
                  className={style.delete}
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <section className={style.addAdress}>
            <h2>Ajouter votre adresse</h2>
            <h3>N'oubliez pas de renseigner cette partie</h3>
            <input type="text" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              vel reiciendis debitis facere, repellendus possimus.
            </p>
          </section>
        </div>
        <div className={style.payment}>
          <section className={style.promoCode}>
            <article>
              <h2>Promocode</h2>
            </article>
            <article className={style.promo}>
              <input type="text" placeholder="Entrer code" />
              <button>Activer</button>
            </article>
          </section>
          <section className={style.listproduits}>
            {cartItems.map((item) => (
              <article key={item.id}>
                <span>{item.nom}</span>
                <span>{item.prix} FCFA</span>
              </article>
            ))}
            <article>
              <span>Total</span>
              <span className={style.total}>{total} FCFA</span>
            </article>
          </section>
          <button className={style.continuer}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
