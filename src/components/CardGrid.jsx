import React, { useEffect } from 'react';
import styles from '../styles/CardGrid.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardGrid = () => {

  useEffect(() => {
    AOS.init();
  }, []);

 
  return (
    <div>
    <div className={styles.cardGrid}>
      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
          <img className={styles.img} src='./images/foods/cbri.png' alt="" />
          <h2 className={styles.font} >Chicken briyani Rs.250</h2>
          <p className={styles.font} >Satisfy your cravings with our delicious chicken briyani, made with aromatic basmati rice and succulent chicken cooked to perfection.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
          <img className={styles.img} src='./images/foods/mbri.png' alt="" />
          <h2 className={styles.font} >Mutton Briyani Rs.300</h2>
          <p className={styles.font} >Indulge in the rich and flavorful mutton briyani, made with tender pieces of meat and fragrant basmati rice, that will transport you to the streets of India.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/tc.png' alt="" />
          <h2 className={styles.font} >Chicken Thandoori Rs.200</h2>
          <p className={styles.font} >Savor the bold and smoky flavors of our tandoori chicken, marinated in traditional Indian spices and grilled to perfection.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/ff.png' alt="" />
          <h2 className={styles.font} >Fish Fry Rs.200</h2>
          <p className={styles.font} >Indulge in the crispy and flavorful goodness of our mouth-watering fish fry, made with fresh catch and secret blend of spices.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/beeffry.png' alt="" />
          <h2 className={styles.font} >Beef Fry Rs.200</h2>
          <p className={styles.font} >Experience the mouth-watering flavor of our beef fry, cooked to perfection with a perfect blend of spices and seasonings. Indulge in a satisfying and hearty meal that will leave you craving for more!</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/noodles.png' alt="" />
          <h2 className={styles.font} >Noodles Rs.250</h2>
          <p className={styles.font} >Slurp up our tasty noodles, made with the finest ingredients and cooked to perfection. Satisfy your cravings with our delicious and flavorful noodle dishes!</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/steak.png' alt="" />
          <h2 className={styles.font} >Steak Rs.550</h2>
          <p className={styles.font} >Indulge in a juicy and succulent steak, grilled to perfection and bursting with flavor. Satisfy your cravings with every savory bite.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/sushi.png' alt="" />
          <h2 className={styles.font} >Sushi Rs.200</h2>
          <p className={styles.font} >Experience the exquisite flavors of fresh, handcrafted sushi, expertly prepared using only the finest ingredients. Treat your taste buds to a delicious and authentic Japanese dining experience.</p>
        </div>
      </Link>

      <Link href="/Order">
        <div className={styles.card} data-aos="fade-up">
        <img className={styles.img} src='./images/foods/eggndsteak.png' alt="" />
          <h2 className={styles.font} >Egg and Steak Rs.650</h2>
          <p className={styles.font} >Start your day off right with a hearty breakfast of sizzling steak and perfectly cooked eggs. Energize your body and satisfy your hunger with this protein-packed meal.</p>
        </div>
      </Link>

      
    

      

      


    </div>
 
     



    </div>
  );
};

export default CardGrid;
