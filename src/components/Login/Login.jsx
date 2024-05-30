import './Login.scss';
import { Button, Form, Input } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const Login = () => {
  const { login } = useContext(UserContext);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
    navigate("/profile");
    notification.success({
      message: 'Hola'
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor introduce tu email',
            },
            {
              pattern: emailRegex,
              message: 'Por favor introduce un email correcto',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor introduce tu contraseña!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
