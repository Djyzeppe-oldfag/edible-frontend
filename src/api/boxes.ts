import api from "../utils/api";

const getCasesByCategories = () =>
    api.get("api/case/getCasesByCategories");

const getCaseContent = (id: number) => 
    api.get(`api/case/getCaseContent/${ id }`);

const open = (id: number) =>
    api.post(`api/case/open/${ id }`);

export {
    getCasesByCategories,
    getCaseContent,
    open
};