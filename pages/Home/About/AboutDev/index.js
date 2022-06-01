import Image from "next/image";
import Navbar from "../../../../Container/Navbar/Navbar";
import NextImage from "../../../image/Next.png";

function index() {
  return (
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
  );
}

export default index;
