import type { NextPage } from "next";
import Head from "next/head";
import StyledButton from "../components/Button/StyledButton";
import Chip from "../components/Chip/Chip";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Product Feedback App</title>
        <meta
          name="description"
          content="give and take feedback on your ideas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="card">
        <Chip />
        <div style={{ margin: "100px" }}>
          <StyledButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
