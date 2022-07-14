import { useEffect, useState } from "react";
import axios from "axios";

import { Ratings } from "@components/elements";
import styles from "./Reviews.module.scss";

const API_URL = "https://random-data-api.com/api/users/random_user?size=25";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data: ", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="reviews"
      className={styles.review__container}
      aria-labelledby="customer-reviews"
    >
      <h4 id="customer-reviews">Customer Reviews</h4>
      <hr />
      {data.map((user) => (
        <article key={user.id}>
          {error ? <p>{error.message}</p> : null}
          <figure>
            <img src={user.avatar} alt={user.username} />
            <figcaption>
              <h5>
                {user.first_name} {user.last_name}
              </h5>
            </figcaption>
          </figure>
          <Ratings rating={4.5} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod
            excepturi ut veniam repellat impedit odio beatae temporibus
            dignissimos sint nemo mollitia cupiditate voluptatum, minus, totam
            architecto incidunt aliquid ratione!
          </p>
        </article>
      ))}
    </section>
  );
};

export default Reviews;
