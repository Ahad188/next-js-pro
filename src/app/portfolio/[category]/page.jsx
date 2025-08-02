 import Button from '@/Components/Button/Button';
import Image from 'next/image';
import React from 'react';
import style from './page.module.css'
 
 const Category = ({params}) => {
    console.log(params)
    return (
      <div className={style.container}>
        <h1 className={style.catTile}>{params.category}</h1>
        <div className={style.item}>
          <div className={style.content}>
            <h1 className={style.test}>test 12312312iojiojioqwe</h1>
            <p className={style.desc}>desc <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum, laudantium veniam incidunt corrupti rerum eius alias. Adipisci hic laudantium amet nesciunt nostrum illum aperiam, qui ducimus omnis impedit doloremque?</p>
            <Button text="/See More" url="#" />
          </div>
          <div className={style.imageContainer}>
            <Image
              className={style.img}
              src="/office.jpg"
              alt="Modern office interior with natural light"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    );
 };
 
 export default Category;