import { doctors } from "../data/appContent";
import { API_PATH, BASE_URL } from "./constant"
import axios from 'axios'

export const fetchDoctors = async () => {
    const url = BASE_URL + API_PATH.DOCTORS;

    // const { } = await axios.get(url);

    return doctors;
}