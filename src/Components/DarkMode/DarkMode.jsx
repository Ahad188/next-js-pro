 'use client'
import { useContext } from 'react';
 import styles from './darkMode.module.css';
import { ThemContext } from '../Context/ThemContext';

 const DarkMode = () => {
const { toggle,mode } = useContext(ThemContext);
    return (
        <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
      </div>
    );
 };
 
 export default DarkMode;