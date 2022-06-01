import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const pid = router.query.PageNo;
  return (
    <>
      <h2>Dynamic Page Number is {pid}</h2>
    </>
  );
};

export default PageNo;
