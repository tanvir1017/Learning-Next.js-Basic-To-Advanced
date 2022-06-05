import Head from "next/head";
import Navbar from "../../Container/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact page</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h2>This is simple contact form</h2>
      </div>
    </>
  );
};

export default Contact;
