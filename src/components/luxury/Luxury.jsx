import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>
          Luxury <span>Selection</span>
        </h1>
        <div className={styles.text_bg}>
          <p>
            <p>Select from the top luxury vehicles to roll in style</p>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1560195919-db01654dd115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt=''
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt=''
          />
          <div className={styles.content}>
            <h3>Ferrari</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
            alt=''
          />
          <div className={styles.content}>
            <h3>Bentley</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div className={styles.content}>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
