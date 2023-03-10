import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import CustomInput from "../components/CustomInput/CustomInput";
import { Formik, Form, FormikProps } from "formik";
import CustomSelect from "../components/CustomInput/CustomSelect";
import FeedbackLogo from "../components/LogoCard/FeedbackLogo";
import TagsCard from "../components/TagsCard/TagsCard";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import CreateFeedbackBar from "../components/CreateFeedbackBar.tsx/CreateFeedbackBar";
import HomePageContainer from "../components/Containers/HomePageContainer";

interface Values {
  name: string;
  menu: string;
}
const Home: NextPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("one");
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = (selectedMenu: string) => {
    setSelectedMenu(selectedMenu);
  };
  const [value, setValue] = useState("");
  const handleMenuOpen = () => setOpenMenu(!openMenu);
  // console.log("checking", openMenu);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
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
        <HomePageContainer />
      </main>
    </div>
  );
};

export default Home;
