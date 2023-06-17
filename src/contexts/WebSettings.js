import React, { createContext, useEffect, useState } from "react";
import { apiRestaurant } from "services";

export const WebSettingsContext = createContext();

export function WebSettingsProvider({ children }) {
  const [webSettingsState, setWebSettingsState] = useState({});
  const [colors, setColors] = useState({
    primaryColor: "#4F372F",
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
        setWebSettingsState(businessDetails);
        if (businessDetails?.colors) {
          setColors(businessDetails.colors);
        }
      } catch (error) {
        console.log("::fetchData::ERROR::", error);
      }
    };
    fetchData();
  }, []);

  return (
    <WebSettingsContext.Provider
      value={{ colors, webSettingsState, setWebSettingsState }}
    >
      {children}
    </WebSettingsContext.Provider>
  );
}
