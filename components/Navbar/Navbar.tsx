import AnimatedHamburgerIcon from "../AnimatedSvgIcons/AnimatedHamburgerIcon";

const NavbarMobile: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full max-w-none px-3 py-4 flex justify-between items-center  md:hidden">
      <div>
        <h2 className="text-white">Frontend Mentor</h2>
        <span className="body-two-text text-white">Feedback board</span>
      </div>
      <AnimatedHamburgerIcon animate={"animate"} />
    </div>
  );
};

export default NavbarMobile;
