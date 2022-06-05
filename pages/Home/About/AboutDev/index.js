import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../../Container/Navbar/Navbar";
import NextImage from "../../../image/Next.png";

function index() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Developer</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h2>AboutDev</h2>
        <Image
          src={NextImage}
          width="500"
          height="330"
          alt="Next js image"
        ></Image>
      </div>
    </>
  );
}

export default index;
