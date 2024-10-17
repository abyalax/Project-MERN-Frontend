import { origin } from "../../utils/constant";

export const uploadImages = async (files: File[]) => {
    const formData = new FormData();
  
    files.forEach((file) => {
      formData.append('my_file', file);
    });
  
    const response = await fetch(`${origin}/api/cloud/upload`, {
      method: "POST",
      credentials: "include",
      mode: "cors", 
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  
    return response;
  };
  