import Link from "next/link";
const Login = () => {
  return (
    <div>
      <h2>Login In.Next</h2>
      <strong>
        Dose not have any account !<Link href="/Auth/SignUp"> Sign Up</Link>
      </strong>
    </div>
  );
};

export default Login;
