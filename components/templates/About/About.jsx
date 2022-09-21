import Image from "next/image";
import { Header } from "@components/elements";
import { about } from "@data/about-data";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <Header
        title="About Us"
        subtitle="Who We Are"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <section className={styles.about}>
        {about.map((item) => (
          <article key={item.id} className={styles.card}>
            <figure className={styles.img}>
              <Image src={item.img} alt={item.title} height={100} width={100} />
            </figure>
            <figcaption className={styles.text}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </figcaption>
          </article>
        ))}
      </section>
    </section>
  );
};
export default About;
