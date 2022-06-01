import Link from "next/link";
import Navbar from "../../Container/Navbar/Navbar";
const Login = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2>Login In.Next</h2>
      <strong style={{ textDecoration: "underline" }}>
        Dose not have any account !<Link href="/Auth/SignUp"> Sign Up</Link>
      </strong>
    </div>
  );
};

export default Login;
