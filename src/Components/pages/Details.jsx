import React, { useEffect, useState } from "react";
import style from "./../styles/Details.module.css";
import { NavLink, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import logo from "../../assets/icones/logo.png"
import hp3 from "../../assets/images/hp2.png";
import { useCart } from "../context/cartProvider";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
    const [limitArticle, setlimitArticle] = useState([]);
    const{ addToCart }=useCart() 



  useEffect(() => {
    const readDetails = async () => {
      try {
        if (!id) throw new Error("Invalid ID");
        const docRef = doc(db, "articles", id);
        const articleDoc = await getDoc(docRef);
        if (articleDoc.exists()) {
          const articleDetails = articleDoc.data();
          console.log("Article Details:", articleDetails);
          setDetail(articleDetails);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };
          const fetchDatalimit2 = async () => {
            try {
              const q = query(collection(db, "articles"), limit(3));
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
    readDetails();
    fetchDatalimit2()
  }, [id]);

    const handleAddToCart = () => {
      if (detail) {
        addToCart({
          id,
          ...detail,
        });
        alert("produit ajouter avec succes au panier")
      }
    };

  console.log("details received",detail);
  console.log(detail.imageUrl)

  return (
    <div className={style.main_details}>
      <div className={style.images}>
        <section className={style.imagesDetails}>
          <img src={detail.imageUrl} alt="" />
        </section>

        <section className={style.imagesApropos}>
          {limitArticle.map((article) => (
            <article>
              <img src={article.imageUrl} alt="" />
            </article>
          ))}
        </section>
      </div>
      <div className={style.info}>
        <section className={style.info_name}>
          <h2>{detail.nom}</h2>
          <h3>{detail.caracteristiques}</h3>
          <p>
            Les ordinateurs portables sont des dispositifs électroniques
            portables conçus pour offrir une expérience informatique complète.
            Dotés d'un écran intégré, d'un clavier et d'un pavé tactile ou d'une
            souris, ils permettent une utilisation pratique à domicile, au
            bureau, ou en déplacement. Les ordinateurs portables varient en
            termes de puissance de traitement, de capacité de stockage, de
            taille d'écran et d'autonomie de batterie,
          </p>
        </section>
        <section className={style.info_price}>
          <h2>{detail.prix}fcfa</h2>
        </section>
        <section className={style.info_buttons}>
          <article className={style.info_buttons_top}>
            <button className={style.counter_button}>-</button>
            <input type="text" value="1" className={style.counter_input} />
            <button className={style.counter_button}>+</button>
          </article>
          <article className={style.button_container}>
            <button className={style.buyNow_btn}>Buy now</button>
            <button  onClick={handleAddToCart}  className={style.Add_btn}>
              <NavLink to="/panier" >Add to card</NavLink>
            </button>
          </article>
        </section>
        <section className={style.info_description}>
          {/*  <img src={logo} alt="" /> */}
          <h1>
            <span>Digital Afric</span> un citoyen, un ordinateur
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Details;
