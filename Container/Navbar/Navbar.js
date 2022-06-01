import Link from "next/link";
const Navbar = () => {
  const primary_color = {
    color: "white",
    fontWeight: 700,
    backgroundColor: "tomato",
    display: "inline-block",
    margin: "5px",
    padding: "10px",
  };
  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <div className="nav">
        <nav>
          <ul>
            <li style={primary_color}>
              <Link href="/">Home</Link>
            </li>
            <li style={primary_color}>
              <Link href="/Blog/NewsLetter">News Letter Blog</Link>
            </li>
            <li style={primary_color}>
              <Link href="/Contact">Contact</Link>
            </li>
            <li style={primary_color}>
              <Link href="/aboutPage">About</Link>
            </li>
            <li style={primary_color}>
              <Link href="/Home/About/AboutDev">About Developer</Link>
            </li>
            <li style={primary_color}>
              <Link href="/Auth/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
