import Head from "next/head";
import Link from "next/link";
import Navbar from "../../Container/Navbar/Navbar";
const Login = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h2>Login In.Next</h2>
        <strong>Dose not have any account !</strong>
        <strong style={{ textDecoration: "underline" }}>
          <Link href="/Auth/SignUp"> Sign Up</Link>
        </strong>
      </div>
    </>
  );
};

export default Login;
