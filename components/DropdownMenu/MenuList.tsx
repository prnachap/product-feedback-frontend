import { useState } from "react";
import { isEqual } from "lodash";
import CheckIcon from "../../public/assets/shared/icon-check.svg";

type MenuListProps = {
  listItems: string[];
  getSelectedMenu: (selectedMenu: string) => void;
};

const MenuList: React.FC<MenuListProps> = ({ listItems, getSelectedMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const handleSelectedMenu = (selectedIndex: number) => {
    setSelectedMenu(selectedIndex);
    getSelectedMenu(listItems?.[selectedIndex]);
  };

  const renderListItems = (listItems: string[]) => {
    return listItems?.map((item, index) => (
      <li
        key={item}
        className="flex justify-between items-center border-b-[1px] border-solid border-american-blue-100 border-opacity-10 last:border-none px-6 py-3 capitalize cursor-pointer hover:text-purple-1000 transition-all"
        onClick={() => handleSelectedMenu(index)}
      >
        {item}
        {isEqual(selectedMenu, index) && <CheckIcon />}
      </li>
    ));
  };

  return (
    <ul className="max-w-[255px]  rounded-lg bg-white shadow-xl">
      {renderListItems(listItems)}
    </ul>
  );
};

export default MenuList;
