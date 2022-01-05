import React from "react";
import { useEffect, useState } from "react";
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
      </Head>
      <h1>
        <code>EYE CANDY</code>
      </h1>
      <p>
        <code2>AI POWERED EYE CANDY </code2>
        <br />
        <code2>Will be coming soon to the App Store in 2022</code2>
        <br />
        <Link href="https://en.wikipedia.org/wiki/Neural_Style_Transfer">
          <a>
            <code2>Based off of Neural Style Transfer</code2>
          </a>
        </Link>
        <br />
        <br />
        <Link href="/vote">
          <a>
            <codeUnderline>TRAIN THE AI HERE (BETA)</codeUnderline>
          </a>
        </Link>
        <br />
        <br />
        <br />
        <br />
      </p>
      <code2>
        <Clock></Clock>
      </code2>
      <code-footer>
        <Link href="https://github.com/kevbuh/eyecandy">
          <a>
            <codeUnderline>GITHUB</codeUnderline>
          </a>
        </Link>
      </code-footer>
    </main>
  );
}

export default Home;
