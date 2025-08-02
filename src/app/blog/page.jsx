import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css'

const BlogPage = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href='/blog/id' className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                    src='/illustration.png'
                    alt=''
                    width={400}
                    height={250}
                    className={styles.imag}
                    ></Image>
                </div>
                <div className={styles.contain}>
                    <h1 className={styles.title}>test uouasioldjhi</h1>
                    <p className={styles.desc}>d dec <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat magnam facere consequatur possimus quisquam aliquam?</p>
                    <p></p>
                </div>
            </Link>
            <Link href='/blog/id' className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                    src='/illustration.png'
                    alt=''
                    width={400}
                    height={250}
                    className={styles.imag}
                    ></Image>
                </div>
                <div className={styles.contain}>
                    <h1 className={styles.title}>test uouasioldjhi</h1>
                    <p className={styles.desc}>d dec <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat magnam facere consequatur possimus quisquam aliquam?</p>
                    <p></p>
                </div>
            </Link>
            
        </div>
    );
};

export default BlogPage;