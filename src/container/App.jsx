import React from "react";
import bothImage from "../assets/both.JPG";
import annaImage from "../assets/anna.JPG";
import jenyaImage from "../assets/jenya.JPG";
import stickImage from "../assets/_for-postcard.png";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Our wedding
      </h1>
      <div className={styles.imageBlock}>
        <img className={styles.imageItem} src={bothImage} alt="Both" />
      </div>
      <p className={styles.postTitle}>Запрошуємо вас розділити з нами цей чудовий день!</p>
      <div className={styles.addressBlock}>
        <p>11.09.22</p>
        <p>Ресторан «Царське село»</p>
        <p>За адресою: Одеська 62 а </p>
        <p>О 12:00</p>
      </div>
      <img className={styles.imageStick} src={stickImage} alt="Stick" /> 
      <div className={styles.personBlock}>
        <h2 className={styles.titleName}>Наречена Ганна</h2>
        <div className={styles.imageBlock}>
          <img className={styles.imageItem} src={annaImage} alt="Anna" />
        </div>
        <p className={styles.description}>
          Тендітна зовні та сильна духом Ганна завжди мріяла про Гуфа. У
          дитинстві гуляючи вулицями Кривого Рогу з плеєром в руках, на повторі,
          грала пісня «Ice Baby”. Ганна виросла та зустріла Євгена. Спільне у
          Євгена і Гуфа, це любов до пісень Гуфа, татуювання та живіт.
        </p>
      </div>
      <img className={styles.imageStick} src={stickImage} alt="Stick" /> 
      <div className={styles.personBlock}>
        <h2 className={styles.titleName}>Наречений Євген</h2>
        <div className={styles.imageBlock}>
          <img className={styles.imageItem} src={jenyaImage} alt="Jenya" />
        </div>
        <p className={styles.description}>
          Мне кажется так будет даже лучше Брутальний зовні та дуже добрий
          всередині Євген у дитинстві передивившись усі кліпи Britney Spears
          колись сказав: «Ось така буде в мене дружина». Євген підріс та Britney
          Spears так і не приїхала до Кривого Рогу, але Євген не дуже
          засмутився, тому що він не любить лисих жінок. Настав час і Євген
          зустрів саму гарну та тендітну Ганну.
        </p>
      </div>
      <p className={styles.wishesText}>
        Віддаємо перевагу замість квітів пляшечку чогось з градусом і з датою
        відкоркування пляшки {";)"}
      </p>
      <button className={styles.btn}>Записатися</button>
      {/* <a href="telegram.me/@groupname"></a> */}
    </div>
  );
};

export default App;
