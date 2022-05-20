import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import styles from "./CustomerInfo.module.scss";

const containerStyle = {
  width: "35rem",
  height: "35rem",
  borderRadius: "1rem",
};

const center = {
  lat: 28.21963,
  lng: 83.972959,
};

const CustomerInfo = ({ products, total, setActiveTab }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAV5aJ9v8ce1APo45LU-pusQdsE3HHep9I",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Customer Details</h1>
      <div className={styles.content}>
        <article className={styles.left}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </article>
        <aside className={styles.right}>
          <h2>Enter Your Information</h2>
          <form>
            <div className={styles.form__control}>
              <label htmlFor="name">Customer&apos;s Full Name</label>
              <input type="text" id="name" placeholder="Your Full Name" />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="number">Customer&apos;s Mobile Number</label>
              <input type="tel" id="number" placeholder="+01 234 567 890" />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="location">Delivery Location</label>
              <input
                type="text"
                id="location"
                placeholder="Your Detailed Delivery Location"
              />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="note">Note</label>
              <textarea
                id="note"
                placeholder="Write Your Cooking Preferences..."
              />
            </div>
          </form>
          <button className={styles.btn} onClick={() => setActiveTab("3")}>
            Proceed To Pay
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
              </svg>
            </div>
          </button>
        </aside>
      </div>
    </div>
  );
};
export default CustomerInfo;
