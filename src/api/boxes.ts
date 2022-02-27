import api from "../utils/api";

const getList = () => 
    api.get("box/getList");

const get = (id: string) =>
    api.get(`box/get/${ id }`);

export { getList, get };