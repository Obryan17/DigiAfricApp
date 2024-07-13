import React from 'react'
import style from './../styles/Details.module.css'

const Details = () =>{
    return(
        <div className={style.main_details}>
            <div className={style.images}>
                <section className={style.images_product}>

                </section>
                <section className={style.images_under}>
                    <article className={style.images_under_first}></article>
                    <article className={style.images_under_second}></article>
                    <article className={style.images_under_third}></article>
                    <article className={style.images_under_fourth}></article>
                </section>
            </div>
            <div className={style.info}>
                <section className={style.info_name}>
                    <h2>HP Elitebook Core i5</h2>
                    <h3>Tactile pliable possible de le mettre en tablette</h3>
                    <p> En plus du clavier rétroéclairé et des ports
                    Thunderbolt, les EliteBook sont dotés d'un boitier en magnésium très solide.
                    En plus de cette solidité, les EliteBook sont plus légers que les ProBook.
                    Ils sont donc plus faciles à transporter</p>
                </section>
                <section className={style.info_price}>
                    <h2>$260.00</h2>
                </section>
                <section className={style.info_buttons}>
                    <article className={style.info_buttons_top}>
                        <button className={style.counter_button}>-</button>
                        <input type="text" value="1" className={style.counter_input} />
                        <button className={style.counter_button}>+</button>
                    </article>
                    <article className={style.button_container}>
                        <button className={style.buyNow_btn}>Buy now</button>
                        <button className={style.Add_btn}>Add to card</button>
                    </article>
                </section>
                <section className={style.info_description}></section>
            </div>
        </div>
    )
}
export default Details