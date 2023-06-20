import React, { createContext, useEffect, useState } from "react";
import { apiRestaurant } from "services";
import PropTypes from "prop-types";

export const WebSettingsContext = createContext();

export function WebSettingsProvider({ children }) {
  const [webSettingsState, setWebSettingsState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const businessDetails = await apiRestaurant.getBusinessDetails();
        setWebSettingsState(businessDetails);
      } catch (error) {
        console.log("::fetchData::ERROR::", error);
      }
    };
    fetchData();
  }, []);

  return (
    <WebSettingsContext.Provider
      value={{ webSettingsState, setWebSettingsState }}
    >
      {children}
    </WebSettingsContext.Provider>
  );
}

WebSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
