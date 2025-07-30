import React from "react";
import style from "@/Components/footer/footer.module.css";
import Image from "next/image";

const Footer = () => {
  console.log("hello sir");
  return (
    <div className={style.container}>
      <div>@2025 all Right Aaa here!</div>
      <div className={style.media}>
        <Image className={style.icon} src="/1.png" alt="img1" width={15} height={15} />
        <Image className={style.icon} src="/2.png" alt="img2" width={15} height={15} />
        <Image className={style.icon} src="/3.png" alt="img3" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
