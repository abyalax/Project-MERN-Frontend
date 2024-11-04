import { origin, token } from "../../utils/constant";

export const uploadImages = async (files: File[]) => {
    const formData = new FormData();
  
    files.forEach((file) => {
      formData.append('my_file', file);
    });
  
    const response = await fetch(`${origin}/api/cloud/upload`, {
      method: "POST",
      credentials: "include",
      mode: "cors", 
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  
    return response;
  };
  