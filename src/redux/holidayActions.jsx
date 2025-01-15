import axios from "axios";

const fetchHolidays = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(//using axios for API requests
          "https://calendarific.com/api/v2/holidays",
          {
            params: {
              api_key: "cizKIfC9nG6EECbv4fe5647zKyCcmEOd",
              country: "IN",//all holidays for India
              year: new Date().getFullYear(),
            },
          }
        );
        dispatch({
          type: "FETCH_HOLIDAYS",
          payload: response.data.response.holidays,
        });
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };
  };
  
  export { fetchHolidays };
  