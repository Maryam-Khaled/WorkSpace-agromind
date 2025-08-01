// Updated to use correct Azure backend URL and fixed API endpoints
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5132"}/api`;

export const addCrop = async (cropData) => {
  const response = await fetch(`${BASE_URL}/Crop/AddCrop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cropData),
  });

  return await response.json();
};

export const updateCrop = async (id, cropData) => {
  const response = await fetch(`${BASE_URL}/Crop/UpdateCrop/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cropData),
  });

  return await response.json();
};

export const deleteCrop = async (id) => {
  const response = await fetch(`${BASE_URL}/Crop/DeleteCrop/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};

export const getAllCrops = async () => {
  const response = await fetch(`${BASE_URL}/Crop/GetCrops`);
  return await response.json();
};

export const getCropById = async (id) => {
  const response = await fetch(`${BASE_URL}/Crop/GetCropById/${id}`);
  return await response.json();
};

export const addStage = async (stageData) => {
  const response = await fetch(`${BASE_URL}/Stage/AddStage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stageData),
  });

  return await response.json();
};

export const addStep = async (stepData) => {
  const response = await fetch(`${BASE_URL}/Step/AddStep`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stepData),
  });

  return await response.json();
};

// Product API functions
export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/Product/GetProducts`);
  return await response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/Product/GetProductById/${id}`);
  return await response.json();
};

// Brand API functions
export const getAllBrands = async () => {
  const response = await fetch(`${BASE_URL}/Brand/GetAllBrands`);
  return await response.json();
};

// Category API functions
export const getAllCategories = async () => {
  const response = await fetch(`${BASE_URL}/Category/Categories`);
  return await response.json();
};
