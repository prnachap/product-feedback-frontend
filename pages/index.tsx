import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import StyledButton from "../components/Button/StyledButton";
import Chip from "../components/Chip/Chip";
import DropDownMenu from "../components/DropdownMenu/MenuList";
import MenuButton from "../components/DropdownMenu/MenuButton";

const Home: NextPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("one");
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = (selectedMenu: string) => {
    setSelectedMenu(selectedMenu);
  };
  const handleMenuOpen = () => setOpenMenu(!openMenu);
  // console.log("checking", openMenu);
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
        <Chip>
          <span>a</span>
          <span>a</span>
        </Chip>
        <div style={{ margin: "100px" }}>
          <MenuButton
            title={selectedMenu}
            isMenuOpen={openMenu}
            handleMenu={handleMenuOpen}
          />
          <DropDownMenu
            listItems={["one", "tow"]}
            getSelectedMenu={handleMenu}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
