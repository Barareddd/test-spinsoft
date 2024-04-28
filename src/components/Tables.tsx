import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Button, Col, Flex, Row } from "antd";
import {
  CalendarTwoTone,
  ClockCircleTwoTone,
  ContactsTwoTone,
  FolderOpenTwoTone,
  PhoneTwoTone,
} from "@ant-design/icons";
import { deletePerson } from "../store/personsSlice";

const Tables = () => {
  // Accessing data from Redux store using useSelector
  const { persons } = useSelector((state: any) => state.persons);

  console.log(persons.length);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      {persons.length !== 0 && (
        <div className="container m-auto mt-4">
          {persons.map((person: any, index: number) => {
            console.log(person);
            return (
              <div
                key={index}
                className="h-fit rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden mb-4 w-[50%] m-auto"
              >
                <Row gutter={[0, 12]} className="p-4">
                  <Col span={24}>
                    <div className="text-2xl font-bold">{person.name}</div>
                    <div className="text-md">
                      {person.type} - ระดับความสำคัญ : {person.priority}
                    </div>
                    <div>ฝ่ายที่เกี่ยวข้อง : {person.relatedParties}</div>
                  </Col>
                  <Col span={24}>
                    <div>
                      <ContactsTwoTone /> : {person.contact}
                    </div>

                    <div>
                      <CalendarTwoTone /> : {person.date.slice(0, 10)}
                    </div>

                    <div>
                      <ClockCircleTwoTone /> : {person.time.slice(11, 19)}
                    </div>

                    <div>
                      <PhoneTwoTone /> : {person.number}
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>{person.detail}</div>
                  </Col>
                  <Col span={12} className="text-end">
                    <Button
                      type="primary"
                      onClick={() => dispatch(deletePerson(index))}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      )}
      {persons.length == 0 && (
        <Flex
          className="container m-auto h-screen"
          justify="center"
          align="center"
          vertical
        >
          <FolderOpenTwoTone
            className="text-[500px]"
            twoToneColor={"#E5E7EB"}
          />
          <h1 className="text-xl">No request</h1>
        </Flex>
      )}
    </div>
  );
};

export default Tables;
