import { useState } from "react";
import "./layout-item.scss";
import { v4 as uuidv4 } from "uuid";
export default function LayoutItem() {
  const [itemData] = useState([
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Plain White Shirt ",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1557002666-513ca8eaa3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1613338761484-f982b6362b9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG91dGZpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1536891648359-888e3aa968f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG91dGZpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Plain White Shirt",
      price: "29",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Plain White Shirt",
      price: "29",
    },
  ]);
  return (
    <div className="layout ">
      <div className="layout__container container">
        {itemData.map((item) => (
          <div className="layout__item" key={item.id}>
            <div className="layout__img">
              <a href="/">
                <img src={item.imageURL} alt="" />
              </a>
            </div>
            <a href="/SimpleProduct">
              <h3 className="layout__name">{item.name}</h3>
            </a>
            <p className="layout__price">
              $ &nbsp;
              {item.price}.00
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
