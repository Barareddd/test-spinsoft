import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ShowData = () => {
  // Accessing data from Redux store using useSelector
  const { fullName, priority, type } = useSelector(
    (state: any) => state.persons
  );

  return (
    <div className="bg-gray-200 rounded-xl h-fit border-2 border-gray-300 p-4 shadow-lg">
      <h1 className="text-xl">
        <UserOutlined /> : {fullName}
      </h1>
      <h1 className="text-md mt-4">ระดับความสำคัญ : {priority}</h1>
      <h1 className="text-md mt-4">หมวดหมู่ : {type}</h1>
    </div>
  );
};

export default ShowData;
