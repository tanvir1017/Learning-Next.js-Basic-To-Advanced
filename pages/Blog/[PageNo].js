import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../../Container/Navbar/Navbar";

const PageNo = () => {
  const router = useRouter();
  const pid = router.query.PageNo;
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2>Dynamic Page Number is {pid}</h2>
      <Image src="/Next.png" height="370" width="700" alt=""></Image>
      <Image
        src="https://www.datocms-assets.com/48401/1644864897-next-framework.jpeg?fit=max&w=900"
        height="370"
        width="700"
        alt=""
      ></Image>
    </div>
  );
};

export default PageNo;
