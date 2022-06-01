import Link from "next/link";
import Navbar from "../../Container/Navbar/Navbar";
const SignUp = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2>Sign Up.Next</h2>
      <strong style={{ textDecoration: "underline" }}>
        Already have an account <Link href="/Auth/Login"> Login</Link>
      </strong>
    </div>
  );
};

export default SignUp;
