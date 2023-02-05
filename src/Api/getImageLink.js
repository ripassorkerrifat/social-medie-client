export const getImageLink = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.data.display_url;
};
