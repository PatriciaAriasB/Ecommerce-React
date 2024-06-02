import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { notification } from "antd";
import './Register.scss'; 

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await register(values);
    notification.success({
      message: 'Usuario registrado con éxito'
    });
    navigate("/login"); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-register">
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: "Introduce tu nombre" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Introduce tu email", type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Introduce tu contraseña!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
           Registarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
