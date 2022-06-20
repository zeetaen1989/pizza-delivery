import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import styles from "./CustomerInfo.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiemVldGFlbiIsImEiOiJjbDNrOGw5M28wNGoyM3JyczB2dzBlOWgyIn0.k4NbfEMy1IDCMiWcMt1yhA";

const CustomerInfo = ({ setActiveTab }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(28.237987);
  const [lng, setLng] = useState(83.9955879);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div ref={mapContainer} className={styles.map} />
      </section>
      <aside className={styles.right}>
        <h2>Enter Your Information</h2>
        <form>
          <article className={styles.form__control}>
            <label htmlFor="name">Customer&apos;s Full Name</label>
            <input type="text" id="name" placeholder="Your Full Name" />
          </article>
          <article className={styles.form__control}>
            <label htmlFor="number">Customer&apos;s Mobile Number</label>
            <input type="tel" id="number" placeholder="+01 234 567 890" />
          </article>
          <article className={styles.form__control}>
            <label htmlFor="location">Delivery Location</label>
            <input
              type="text"
              id="location"
              placeholder="Your Detailed Delivery Location"
            />
          </article>
          <article className={styles.form__control}>
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              placeholder="Write Your Cooking Preferences..."
            />
          </article>
        </form>
        <button className={styles.btn} onClick={() => setActiveTab("3")}>
          Proceed To Pay
          <figure className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
            </svg>
          </figure>
        </button>
      </aside>
    </section>
  );
};
export default CustomerInfo;
