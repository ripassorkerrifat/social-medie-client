export const getImageLink = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await fetch(
    "https://api.imgbb.com/1/upload?key=4aa60d42eb38dc3e5b32647ce905d2e8",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.data.display_url;
};
