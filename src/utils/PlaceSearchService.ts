import { debounce } from "lodash";
import axios from "axios";
let cancelToken = axios.CancelToken.source();

const placeSearchAPI = debounce(async (inputValue) => {
  try {
    cancelToken.cancel();
  } catch (e) {
    console.error(e);
  }
  const newCancelToken = axios.CancelToken.source();
  cancelToken.cancel = newCancelToken.cancel;

  return await axios.get(
    `https://nominatim.openstreetmap.org/search/?format=json&limit=5&q=${inputValue}`,
    {
      cancelToken: newCancelToken.token,
    },
  );
}, 500);

export default placeSearchAPI;
