import Link from "next/link";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h4>Home</h4>
      <Link href={"about-us"}>about us</Link>
    </div>
  );
};

export default Home;
