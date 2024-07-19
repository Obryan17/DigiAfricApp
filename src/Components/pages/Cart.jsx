import React from 'react'
import style from '../styles/Cart.module.css'
import logo from "./../../assets/icones/logo.png";

const Cart = () => {
  return (
    <div className={style.mainCart}>
      <article className={style.title}>
        <h2>Panier</h2>
      </article>
      <div className={style.main}>
        <div className={style.listCommande}>
          <div className={style.listArticle}>
            <article className={style.clearCart}>
              <h4>Vider le panier</h4>
            </article>
            <div className={style.article}>
              <section className={style.imagesAndDescription}>
                <article className={style.images}>
                  <img src={logo} alt="" />
                </article>
                <article className={style.description}>
                  <h2>Green Dragon Gold Platinium OG</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima fugit, distinctio voluptatum adipisci placeat dolores
                    dolorum, hic ab deserunt at fugiat magni, voluptate ipsum
                    quis.
                  </p>
                </article>
              </section>
              <section className={style.increment}>
                <button>-</button>
                <p>1</p>

                <button>+</button>
              </section>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
              <button className={style.delete}>x</button>
            </div>
            <div className={style.article}>
              <section className={style.imagesAndDescription}>
                <article className={style.images}>
                  <img src={logo} alt="" />
                </article>
                <article className={style.description}>
                  <h2>Green Dragon Gold Platinium OG</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima fugit, distinctio voluptatum adipisci placeat dolores
                    dolorum, hic ab deserunt at fugiat magni, voluptate ipsum
                    quis.
                  </p>
                </article>
              </section>
              <section className={style.increment}>
                <button>-</button>
                <p>1</p>

                <button>+</button>
              </section>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
              <button className={style.delete}>x</button>
            </div>
          </div>
          <section className={style.addAdress}>
            <h2>AJouter votre adresse</h2>
            <h3>N'oubliez pas de reseigner cette partie</h3>
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
              <input type="text" placeholder="Entrer code " />
              <button>Activer </button>
            </article>
          </section>
          <section className={style.listproduits}>
            <article>
              <span>Produits</span>
              <span>500</span>
            </article>
            <article>
              <span>Produits</span>
              <span>500</span>
            </article>{" "}
            <article>
              <span>Produits</span>
              <span>500</span>
            </article>{" "}
            <article>
              <span>Produits</span>
              <span>500</span>
            </article>{" "}
            <article>
              <span>Produits</span>
              <span>500</span>
            </article>
            <article>
              <span>Total</span>
              <span className={style.total}>500.fcfa</span>
            </article>
          </section>
          <button className={style.continuer}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart
