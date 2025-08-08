import Image from "next/image";
import { notFound } from "next/navigation"; // Added missing import
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound(); // Removed 'return' as notFound() handles it
  }

  return res.json();
}

// Marked component as async
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  console.log(params);
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="/websites.jpg"
              alt="Author avatar" // Added proper alt text
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.title}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            alt="Blog post image" // Added proper alt text
            fill // Removed ={true} as it's redundant
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
