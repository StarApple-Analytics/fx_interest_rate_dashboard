import { TimeSeries} from "api";

// Keys are used to allow us to assign the same key
// for the same type of request so data can be cached
// with react-query
export const keys = {
  fetch: "Fetch_TimeSeries",
};

export const getData = () => {
  return TimeSeries.all();
};
