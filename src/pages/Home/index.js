import HeaderComponent from "components/Header";
import React, { useEffect, useState } from "react";
import { apiRestaurant } from "services";

const Home = () => {
  const [menuData, setMenuData] = useState({});
  const [businessData, setBusinessData] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const response = await apiRestaurant.getBusinessDetails();
        console.log("response", response);
        setBusinessData(response);
      } catch (error) {
        console.log("::fetchBusinessDetails::ERROR::", error);
      }
    };
    const fetchMenuDetails = async () => {
      try {
        const response = await apiRestaurant.getMenuDetails();

        setMenuData(response);
      } catch (error) {
        console.log("::fetchMenuDetails::ERROR::", error);
      }
    };

    fetchBusinessDetails();
    fetchMenuDetails();
  }, []);

  return (
    <>
      <HeaderComponent bannerImage={businessData?.webSettings?.bannerImage} />
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: 20,
        }}
      >
        {menuData?.sections?.map((item) => (
          <div
            key={item?.id}
            onClick={() => handleItemClick(item?.id)}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              cursor: "pointer",
              borderBottom:
                selectedItemId === item?.id ? "2px solid black" : "none",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "10px",
              }}
            >
              <img
                src={item?.images[0]?.image}
                alt="Food"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
