import React from "react";
export default function Items() {
  let item = [
    { id: 1, name: "Nour", age: 22 },
    { id: 2, name: "Mohamad", age: 20 },
    { id: 3, name: "Yama", age: 21 },
    { id: 4, name: "Omran", age: 20 },
  ];
  item = [];
  return (
    <div className="card_info">
      {item.length != 0 ? (
        <ul>
          {item.map((item) => (
            <li key={item.id}>
              <div className="names">
                My name is <span>{item.name}</span>
              </div>{" "}
              <div className="names">
                and my age is
                <span> {item.age}</span> years old
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No <span>Items</span>
        </p>
      )}
    </div>
  );
}
