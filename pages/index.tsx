import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import { IApplicationState } from "../redux/reducers";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const cities: string[] = [
  "Chennai",
  "Budapest",
  "Mumbai",
  "New York",
  "Firenze",
];

const Home: NextPage = () => {
  const { cities } = useSelector<
    IApplicationState,
    Pick<IApplicationState, "cities">
  >((state) => ({
    cities: state.cities,
  }));

  const dispatch = useDispatch();

  const router = useRouter();

  const handleClick = () => {
    console.log("Routing to Add city");
    router.push("/weather/");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Info</title>
        <meta
          name="description"
          content="Weather info for any location around the world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Weather Info App!</h1>

        <p className={styles.description}>
          Weather info for any location around the world! <br />
          Click on Add button to get started to add your location to the list.
        </p>

        <button className={styles.btn} onClick={handleClick}>
          Add New Location
        </button>

        <div className={styles.grid}>
          {cities.map((city) => (
            <Link href={`/weather/${city}`} key={city}>
              <a className={styles.card}>
                <h2>{city} &rarr;</h2>
                <p>
                  Find detailed weather information about the place of {city}.
                </p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://benestudio.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/benestudio.svg"
              alt="Bene Studio Logo"
              width={100}
              height={18}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
