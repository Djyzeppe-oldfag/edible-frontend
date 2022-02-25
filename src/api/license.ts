import api from "../utils/api";

const getList = () => 
    api.get("api/license/getList");

export { getList };