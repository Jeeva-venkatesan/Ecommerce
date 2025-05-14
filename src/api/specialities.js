import { specialist } from "../data/appContent";
import { API_PATH, BASE_URL } from "./constant";

export const fetchSpecilities = createAsyncThunk(API_PATH.DOCTORS,
    async (id) => {
        const url = BASE_URL + API_PATH.SPECIALITY;
        const res = await axios.get(url);

        return specialist;
    }
)