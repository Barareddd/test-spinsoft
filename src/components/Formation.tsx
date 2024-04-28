import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  TimePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addPerson,
  setfullName,
  setPriority,
  setType,
} from "../store/personsSlice";
import ShowData from "./ShowData";
import Navbar from "./Navbar";
import { useEffect } from "react";

function Formation() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Convert the date and time fields to serializable formats
    const serializedDate = values.date ? values.date.toISOString() : null;
    const serializedTime = values.time ? values.time.toISOString() : null;

    // Create a new object with the serialized date and time
    const formDataWithDateTime = {
      ...values,
      date: serializedDate,
      time: serializedTime,
    };

    // Dispatch the action with the updated form data
    dispatch(addPerson(formDataWithDateTime));
    form.resetFields();
    dispatch(setfullName(""));
    dispatch(setPriority(""));
    dispatch(setType(""));
  };

  const persons = useSelector((state: any) => state.persons.persons);
  console.log("Persons in Redux Store:", persons);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = e.target.value;
    dispatch(setfullName(fullName));
    console.log("Name:", fullName); // Log the name to console
  };

  const handlePriorityChange = (value: string) => {
    dispatch(setPriority(value));
    console.log("Priority:", value); // Log the name to console
  };

  const handleTypeChange = (value: string) => {
    dispatch(setType(value));
    console.log("Priority:", value); // Log the name to console
  };

  const onCheck = () => {
    console.log("check");
  };

  useEffect(() => {
    dispatch(setfullName(""));
    dispatch(setPriority(""));
    dispatch(setType(""));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container m-auto mt-4 ">
        <Row gutter={16}>
          <Col span={6}>
            <ShowData />
          </Col>
          <Col span={18} className="shadow-lg p-4 rounded-xl">
            <Form onFinish={onFinish} form={form} layout="vertical">
              <h1 className="text-xl">การรับเรื่อง</h1>
              <Form.Item className="inline-block mt-4 w-[20rem]">
                <Space.Compact>
                  <Form.Item
                    className="inline-block"
                    label="วัน เวลา รับเรื่อง"
                    name="date"
                    rules={[{ required: true }]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    className="inline-block"
                    label="  "
                    name="time"
                    rules={[{ required: true }]}
                  >
                    <TimePicker />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
              <Form.Item
                name="contact"
                label="ช่องทาง"
                rules={[{ required: true }]}
                className="inline-block ml-8 w-[20rem] mt-4"
              >
                <Select placeholder="Please select">
                  <Select.Option value="Facebook">Facebook</Select.Option>
                  <Select.Option value="Line">Line</Select.Option>
                  <Select.Option value="Instagram">Instagram</Select.Option>
                </Select>
              </Form.Item>
              <h1 className="text-xl">ผู้แจ้งเรื่อง</h1>
              <Form.Item
                label="ชื่อ"
                name="name"
                rules={[{ required: true }]}
                className="inline-block w-[20rem] mt-4"
              >
                <Input
                  placeholder={"ชื่อ และนามสกุล"}
                  onChange={handleNameChange}
                />
              </Form.Item>
              <Form.Item
                name="number"
                label="เบอร์โทรศัพท์"
                rules={[{ required: true }]}
                className="inline-block ml-8 w-[20rem] mt-4"
              >
                <Input placeholder="08XXXXXXXX" />
              </Form.Item>
              <Form.Item className="inline-block mt-11 ml-4">
                <Button type="primary" onClick={onCheck}>
                  ตรวจสอบ
                </Button>
              </Form.Item>

              <h1 className="text-xl mt-4">ข้อมูลที่แจ้ง</h1>
              <Form.Item
                name="type"
                label="หมวดหมู่"
                rules={[{ required: true }]}
                className="inline-block w-[30rem] mt-4"
              >
                <Select placeholder="Please select" onChange={handleTypeChange}>
                  <Select.Option value="ด้านการงาน">ด้านการงาน</Select.Option>
                  <Select.Option value="ด้านการเงิน">ด้านการเงิน</Select.Option>
                  <Select.Option value="ด้านสุขภาพ">ด้านสุขภาพ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="priority"
                label="ระดับความสำคัญ"
                rules={[{ required: true }]}
                className="inline-block ml-8 w-[30rem] mt-4"
              >
                <Select
                  placeholder="Please select"
                  onChange={handlePriorityChange}
                >
                  <Select.Option value="น้อย">น้อย</Select.Option>
                  <Select.Option value="กลาง">กลาง</Select.Option>
                  <Select.Option value="มาก">มาก</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="relatedParties"
                label="ฝ่ายที่เกี่ยวข้อง"
                rules={[{ required: true }]}
                className="inline-block w-[62rem] mt-4"
              >
                <Select placeholder="Please select">
                  <Select.Option value="Finance">ฝ่ายการเงิน</Select.Option>
                  <Select.Option value="Administrative">
                    ฝ่ายบริหาร
                  </Select.Option>
                  <Select.Option value="Human Resources">
                    ฝ่ายบุคคล
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="detail"
                label="รายละเอียด"
                rules={[{ required: true }]}
                className="inline-block w-[62rem] mt-4"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item className="bg-gray-200 flex justify-center items-center h-16 rounded-lg border-2 border-gray-300 mb-0">
                <Button type="primary" htmlType="submit">
                  บันทึก
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Formation;
