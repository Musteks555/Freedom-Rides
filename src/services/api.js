import axios from "axios";

const instance = axios.create({
    baseURL: "https://669ab59a9ba098ed6100926f.mockapi.io/",
});

export const requestCampers = async (page = 1, limit = 4) => {
    const { data } = await instance.get("/Campers", {
        params: {
            page,
            limit,
        },
    });
    return data;
};
