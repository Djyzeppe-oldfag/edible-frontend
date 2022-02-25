import api from "../utils/api";

const profile = () => 
    api.get("api/user/profile");

const changePhoto = (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    return api.put("api/user/changePhoto", formData);
};

const changeName = (name: string) => 
    api.put("api/user/changeName", { newName: name }); 

export { profile, changePhoto, changeName };