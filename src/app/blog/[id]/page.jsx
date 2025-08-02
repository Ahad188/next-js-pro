import Image from 'next/image';
import styles from './page.module.css'

 

const BlogPost =  ({ params }) => {
//   const data =   getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}> title here</h1>
          <p className={styles.desc}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ratione commodi laudantium totam aliquam, dolor rem accusantium ipsa
            libero ducimus, provident modi ullam doloremque molestias! Ipsam
            reiciendis ea placeat vel?
          </p>
          <div className={styles.author}>
            <Image
              src="/websites.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}> Ahad</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          libero sint quasi laboriosam nobis dolores minus sequi obcaecati,
          consectetur fugit officia velit quod quam a eligendi illo voluptatem
          similique eius officiis mollitia. Sapiente deserunt aperiam quas est,
          officiis labore rerum? Officia laudantium totam porro harum veritatis
          adipisci repellat iste itaque libero nihil voluptatem dignissimos,
          corrupti cum dolore quidem facere? Accusantium, neque numquam
          expedita, nisi sed vitae consequatur nam culpa, autem obcaecati
          repellat aliquid excepturi impedit distinctio amet enim. Aut
          repudiandae cupiditate provident pariatur doloremque. In modi
          voluptates earum, placeat velit fugit nisi quaerat, veniam aliquam sed
          odit nulla perspiciatis et consectetur possimus eveniet saepe sit
          accusantium expedita vitae. Ad temporibus enim labore corrupti nobis,
          veritatis minus aliquid, sit saepe fugit sapiente debitis aperiam
          nostrum sunt soluta numquam architecto. Voluptates praesentium
          inventore illo impedit doloribus recusandae rem, obcaecati blanditiis
          deleniti ut at in debitis. Sed et aut facilis dicta eius nemo beatae
          tempora! Nulla, architecto iste recusandae cupiditate obcaecati
          quisquam eveniet saepe. Velit deleniti nesciunt, quisquam dignissimos
          necessitatibus unde harum repellat laborum officia pariatur suscipit
          dolor beatae culpa non voluptas! Dolorem inventore ipsam adipisci nisi
          fugit nulla nihil tenetur, officiis quidem sed exercitationem porro.
          Doloribus corporis necessitatibus magni, suscipit eveniet minus
          officia optio mollitia deleniti consequuntur quam nisi, dolore harum
          placeat quisquam tempore doloremque architecto, deserunt laborum.
          Corrupti consectetur a soluta quasi praesentium earum id cum ipsa
          nihil autem atque eaque sunt ex, labore sapiente odit delectus!
          Quibusdam inventore cum dolorem? Similique expedita optio tempore
          obcaecati dolorum veniam, dolorem nostrum porro doloribus autem magni
          omnis possimus natus ducimus qui! Dolor deserunt illo repellat,
          nostrum praesentium harum qui esse mollitia id culpa, quisquam totam
          iste quibusdam saepe quod rem ducimus incidunt aliquid eaque ipsum
          debitis inventore, explicabo laborum sapiente? Provident perspiciatis
          laborum consequatur aspernatur iusto dolores, tempora quae, laboriosam
          odio voluptates accusamus possimus? Odio minus eligendi maxime
          dignissimos assumenda ipsum quam perspiciatis deserunt iusto iure quo,
          quas ratione ad quaerat. Accusamus, cum, asperiores at illo, sunt
          molestiae neque expedita repellendus cupiditate eos doloribus esse
          numquam? Aspernatur veritatis minima maiores. Distinctio aperiam quos
          ratione earum accusantium necessitatibus architecto? Laudantium quo
          veniam cum quam quia. Libero sunt nesciunt aspernatur voluptates,
          voluptatum itaque molestiae, voluptatem ea atque quisquam aperiam?
          Magnam, fuga culpa. Architecto aperiam, sunt illo natus dolores
          expedita itaque. Distinctio sint voluptate, rem eum quae totam
          quisquam nostrum itaque vel soluta adipisci assumenda aliquid
          excepturi nam porro maiores, voluptatibus sequi natus architecto
          exercitationem illum fugiat suscipit possimus delectus? Qui sed nulla
          nostrum dicta doloribus voluptatem! Nihil maiores repudiandae
          molestias dolore molestiae iure nobis accusamus asperiores itaque id
          ratione enim, obcaecati deleniti fugiat dicta ut ipsa esse in,
          distinctio quisquam non debitis eveniet quis omnis. Impedit obcaecati
          tenetur dolor laboriosam. Consequuntur laudantium alias voluptatum in
          odit veritatis, veniam libero aliquid sunt hic recusandae obcaecati
          porro fuga quia nesciunt earum blanditiis voluptas suscipit ea
          sapiente eligendi quas molestias dolore? Reiciendis exercitationem
          saepe commodi omnis culpa eos ut mollitia, nulla ullam alias similique
          unde optio id, reprehenderit eveniet, voluptate adipisci earum officia
          ea! Architecto sed ipsum incidunt.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
