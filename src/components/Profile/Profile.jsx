import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin, Card } from "antd";
import "./Profile.scss"

const { Meta } = Card;

const Profile = () => {
  const { getLoggedUserInfo, user, token, orders } = useContext(UserContext);

  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div className="profile">
      <div className="user-card">
        <Card
          hoverable
          style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}
        >
          <Meta title={user.name} />
          <p className="text-body">Email: {user.email}</p>
        </Card>
      </div>
      <div className="orders-section">

        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div className="order-card" key={order.id}>
              <Card hoverable style={{ maxWidth: '300px', margin: '20px auto' }}>
                <Meta title={`Número de pedido: ${order.id}`} />
                <div className="orders-container">
                  {order.Products.map((product) => (
                    <p key={product.id}>{product.name}</p>
                  ))}
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p>No tienes pedidos</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
