import { MdLocationCity } from "react-icons/md";
import { ourLocation } from "@data/location-data";
import { Header } from "@components/elements";
import styles from "./Locations.module.scss";
import Link from "next/link";

const Location = () => {
  return (
    <section className={styles.container} id="locations">
      <Header
        title="Our Locations"
        subtitle="Where Can You Find Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <section className={styles.location}>
        {ourLocation.map((item) => (
          <Link key={item.id} href={item.map} passHref>
            <article className={styles.location__wrapper}>
              <MdLocationCity fontSize="2rem" color="red" />
              <article className={styles.address}>
                <h3>{item.city}</h3>
                <p className={styles.street}>{item.street}</p>
                <p className={styles.phone}>{item.phone}</p>
              </article>
            </article>
          </Link>
        ))}
      </section>
    </section>
  );
};
export default Location;
