import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/region/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/region/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(`http://localhost:3002/region/upload`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const id = parseInt(payload.get("id"));
  try {
    const result = await axios.put(`http://localhost:3002/region/upload/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/region/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteData = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/region/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Update,
  findData,
  upload,
  deleteData,
};
