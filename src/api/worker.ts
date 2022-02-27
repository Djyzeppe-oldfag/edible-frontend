import api from "../utils/api";

const get = (id: string) =>
    api.get(`worker/get/${ id }`);

export { get };