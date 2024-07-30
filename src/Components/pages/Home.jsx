import React, { useState, useEffect } from "react";
import style from "./../styles/Home.module.css";
import logo from "./../../assets/icones/logoWhite.png";
import imprimante from "../../assets/images/imprimantes.png";
import firstImage from "../../assets/images/imagefirt.png";
import { ChevronDown, Star } from "lucide-react";
import { db } from "../../api/firebaseConfig";
import { collection, getDocs, doc, deleteDoc, limit, query } from "firebase/firestore";
import hp1 from "../../assets/images/hp4.png";
import hp2 from "../../assets/images/hp3.png";
import hp3 from "../../assets/images/hp2.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [limitArticle, setlimitArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const ArticlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(ArticlesData);
        console.log(ArticlesData);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };
    const fetchDatalimit2 = async () => {
      try {
          const q = query(collection(db, "articles"), limit(2));
        const querySnapshot = await getDocs(q);
        const ArticlelimitesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setlimitArticle(ArticlelimitesData);
        console.log(ArticlelimitesData);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };
    fetchData();
    fetchDatalimit2()
  }, []);
  return (
    <div className={style.mainHome}>
      <div className={style.firstview}>
        <section className={style.firstviewTextAndButton}>
          <h2>Grap upto 20% Off no Selected Categories</h2>
          <button>Buy Now</button>
        </section>
        <section className={style.firstviewImages}>
          <img src={firstImage} alt="" srcset="" />
        </section>
      </div>
      <div className={style.secondView}>
        <section className={style.choseCategories}>
          <ul>
            <article className={style.dropdownCategories}>
              {" "}
              Categories <ChevronDown color="#006494" />{" "}
            </article>
            <ul className={style.submenu}>
              <li>Ordinateurs portable</li>
              <li>Imprimentes</li>
              <li>Accesoires Pc </li>
            </ul>
          </ul>
        </section>
      </div>
      <div className={style.FeatureProduct}>
        <article className={style.FeatureProductTitle}>
          <h2>Feature Product</h2>
        </article>
        <div className={style.gridCard}>
          {articles.map((article) => (
            <section className={style.Card}>
              <article className={style.productImage}>
                <img src={article.imageUrl} alt="" />
              </article>
              <article className={style.productName}>
                <p className={style.nameProduct}>{article.nom}</p>
                <p className={style.priceProduct}>
                  {article.prix} <span>00</span>
                </p>
              </article>
              <article className={style.productDetails}>
                <p>{article.capacite}</p>
              </article>
              <article className={style.productLike}>
                {" "}
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="black" /> <span>(250)</span>{" "}
              </article>
              <article className={style.AddCart}>
                <button>
                  <NavLink
                    className={style.AddCart}
                    to={`/details/${article.id}`}
                  >
                    Add to cart
                  </NavLink>
                </button>
              </article>
            </section>
          ))}
        </div>
      </div>
      <div className={style.ThreeSection}>
        <div className={style.BestAndLast}>
          <section className={style.Best}>
            <article>
              <img src={hp2} alt="" />
            </article>
            <article className={style.BestTextAndButton}>
              {" "}
              <p>GET UPTO 40% OFF</p>
              <button>Get discount</button>
            </article>
          </section>
          <section className={style.Last}>
            <article className={style.LastText}>
              {" "}
              <p>LATEST LAUNCED</p>
              <p className={style.lastTextsmall}>BEST SALE</p>
            </article>
            <article>
              <img src={hp3} alt="" />
            </article>
          </section>
        </div>
        <div className={style.bestSelection}>
          {limitArticle.map((article) => (
            <section className={style.Card}>
              <article className={style.productImage}>
                <img src={article.imageUrl} alt="" />
              </article>
              <article className={style.productName}>
                <p className={style.nameProduct}>{article.nom}</p>
                <p className={style.priceProduct}>
                  {article.prix} <span>00</span>
                </p>
              </article>
              <article className={style.productDetails}>
                <p>{article.capacite}</p>
              </article>
              <article className={style.productLike}>
                {" "}
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="black" /> <span>(250)</span>{" "}
              </article>
              <article className={style.AddCart}>
                <button>
                  <NavLink
                    className={style.AddCart}
                    to={`/details/${article.id}`}
                  >
                    Add to cart
                  </NavLink>
                </button>
              </article>
            </section>
          ))}
        </div>
      </div>
      <div className={style.forthSection}>
        <article className={style.titlePlace}>
          <h2 className={style.Title}>All Products</h2>
          <p className={style.subTitle}>View All</p>
        </article>
        <div className={style.gridCard}>
          {articles.map((article) => (
            <section className={style.Card}>
              <article className={style.productImage}>
                <img src={article.imageUrl} alt="" />
              </article>
              <article className={style.productName}>
                <p className={style.nameProduct}>{article.nom}</p>
                <p className={style.priceProduct}>
                  {article.prix} <span>00</span>
                </p>
              </article>
              <article className={style.productDetails}>
                <p>{article.capacite}</p>
              </article>
              <article className={style.productLike}>
                {" "}
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="#003554" />
                <Star color="black" /> <span>(250)</span>{" "}
              </article>
              <article className={style.AddCart}>
                <button>
                  <NavLink
                    className={style.AddCart}
                    to={`/details/${article.id}`}
                  >
                    Add to cart
                  </NavLink>
                </button>
              </article>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
