import { Button, Dropdown, Flex, MenuProps } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/">home</Link>,
    },
    {
      key: "2",
      label: <Link to="/Tables">application</Link>,
    },
  ];
  return (
    <div>
      <Flex className="h-[4rem] bg-gray-400 w-full shadow-lg">
        <Flex
          className="container m-auto"
          gap={2}
          justify="space-between"
          align="center"
        >
          <h1 className="p-2 text-white font-bold text-lg">B My CRM</h1>
          <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
            <Button>Menu</Button>
          </Dropdown>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
