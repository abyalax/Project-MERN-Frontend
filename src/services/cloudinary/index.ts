export const uploadImages = async (files: File[]) => {
    const formData = new FormData();
  
    files.forEach((file) => {
      formData.append('my_file', file);
    });
  
    const response = await fetch('http://localhost:4000/cloud/upload', {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  
    return response;
  };
  