import React from "react";
import { useEffect, useState } from "react";
// import './App.css';
// import '../styles/App.css'
import Head from "next/head";
import Link from "next/link";

const Clock = () => {
  const init = new Date();
  const [date, setDate] = useState(init);

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [date]);

  return date.toLocaleTimeString();
};

function Home() {
  return (
    <main>
      <Head>
        <title>Eye Candy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico" /> */}
      </Head>
      <h1>
        <code>EYE CANDY</code>
      </h1>
      <p>
        <Link href="/vote">
          <a>
            <code2>AI POWERED EYE CANDY</code2>
          </a>
        </Link>
        <br />
        <code2>Coming 1/1/2022</code2>
      </p>
      <br />
      <code2>
        <Clock></Clock>
      </code2>
    </main>
  );
}

export default Home;
