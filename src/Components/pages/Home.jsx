import React from 'react'
import style from './../styles/Home.module.css'
import logo from "./../../assets/icones/logoWhite.png";
import { ChevronDown, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className={style.mainHome}>
      <div className={style.firstview}>
        <section className={style.firstviewTextAndButton}>
          <h2>Grap upto 20% Off no Selected Categories</h2>
          <button>Buy Now</button>
        </section>
        <section className={style.firstviewImages}>
          <img src={logo} alt="" srcset="" />
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
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
        </div>
      </div>
      <div className={style.ThreeSection}>
        <div className={style.BestAndLast}>
          <section className={style.Best}>
            <article>
              <img src={logo} alt="" />
            </article>
            <article className={style.BestTextAndButton}>
              {" "}
              <p>GET UPTO 40% OFF</p>
              <button>Get discount</button>
            </article>
            <article>
              <img src={logo} alt="" />
            </article>
          </section>
          <section className={style.Last}>
            <article className={style.LastText}>
              {" "}
              <p>LATEST LAUNCED</p>
              <p className={style.lastTextsmall}>BEST SALE</p>
            </article>
            <article>
              <img src={logo} alt="" />
            </article>
          </section>
        </div>
        <div className={style.bestSelection}>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>{" "}
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
        </div>
      </div>
      <div className={style.forthSection}>
        <article className={style.titlePlace}>
          <h2 className={style.Title}>All Products</h2>
          <p className={style.subTitle}>View All</p>
        </article>
        <div className={style.gridCard}>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
        </div>
        <div className={style.gridCard}>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
          <section className={style.Card}>
            <article className={style.productImage}>
              <img src={logo} alt="" />
            </article>
            <article className={style.productName}>
              <p className={style.nameProduct}>Green Dragon gold Platinum Og</p>
              <p className={style.priceProduct}>
                $45 <span>00</span>
              </p>
            </article>
            <article className={style.productDetails}>
              <p>SSD 256 Gb Ram 16 Gb</p>
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
              <button>Add to Cart</button>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home
