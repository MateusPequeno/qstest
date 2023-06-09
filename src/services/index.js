import { BASE_URL } from "../config/globalUrl";

export const apiRestaurant = {
  getMenuDetails: async () => {
    try {
      const req = await fetch(
        `${BASE_URL}/v3/a27e98a8-fe59-4623-be70-b9ac4a3254a7`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("::getMenuDetails::REQ", req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error("::getMenuDetails::ERROR", error);
    }
  },
  getBusinessDetails: async () => {
    try {
      const req = await fetch(
        `${BASE_URL}/v3/0453ad6e-f530-4864-b101-a7fba4980012`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("::getBusinessDetails::REQ", req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error("::getBusinessDetails::ERROR", error);
    }
  },
};
