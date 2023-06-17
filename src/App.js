import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { WebSettingsProvider } from "./contexts/WebSettings";
import { BasketProvider } from "./contexts/Basket";
import PublicRoutes from "./routes";
import { apiRestaurant } from "services";

export default function App() {
  const [theme, setTheme] = useState({
    lightGray: "#8A94A4",
    gray: "#8A94A4",
    blackText: "#1f2329",
    backgroundGray: "#f9f9f9",
    whiteOne: "#EEEEEE",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const businessDetails = await apiRestaurant.getBusinessDetails();
        setTheme((prevTheme) => ({
          ...prevTheme,
          backgroundColour: businessDetails?.webSettings?.backgroundColour,
          navBackgroundColour: businessDetails?.webSettings?.navBackgroundColour,
          primaryColour: businessDetails?.webSettings?.primaryColour,
          primaryColourHover: businessDetails?.webSettings?.primaryColourHover,
        }));
      } catch (error) {
        console.log("::fetchData::ERROR::", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <WebSettingsProvider>
        <BasketProvider>
          <PublicRoutes />
        </BasketProvider>
      </WebSettingsProvider>
    </ThemeProvider>
  );
}
