import axios from "axios";

const getProperties = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/properties/all/"
  );
  return response.data;
};
const propertyAPIService = { getProperties };

export default propertyAPIService;
