import Link from "next/link";
const SignUp = () => {
  return (
    <div>
      <h2>Sign Up.Next</h2>
      <strong>
        Already have an account <Link href="/Auth/Login"> Login</Link>
      </strong>
    </div>
  );
};

export default SignUp;
