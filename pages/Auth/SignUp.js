import Head from "next/head";
import Link from "next/link";
import Navbar from "../../Container/Navbar/Navbar";
const SignUp = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Learning purpose" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Learning Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign up</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h2>Sign Up.Next</h2>
        <strong>Already have an account .</strong>
        <strong style={{ textDecoration: "underline" }}>
          <Link href="/Auth/Login"> Login</Link>
        </strong>
      </div>
    </>
  );
};

export default SignUp;
