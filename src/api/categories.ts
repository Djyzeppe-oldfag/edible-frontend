import api from "../utils/api";

const getList = () =>
    api.get("category/getList");

const get = (id: string) =>
    api.get(`category/get/${ id }`);

export { getList, get };