import React from "react";
import style from "@/Components/footer/footer.module.css";
import Image from "next/image";

const Footer = () => {
  console.log("hello sir");
  return (
    <div className={style.container}>
      <div>@2025 all Right Aaa here!</div>
      <div className={style.media}>
        <Image className={style.icon} src="/img.jpg" alt="img1" width={15} height={15} />
        <Image className={style.icon} src="/img2.jpg" alt="img2" width={15} height={15} />
        <Image className={style.icon} src="/img3.jpg" alt="img3" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
