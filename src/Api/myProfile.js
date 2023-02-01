export const updateCoverPhoto = (photoUrl, user) => {
  fetch(`http://localhost:5000/user/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ coverPhoto: photoUrl }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => {
      console.error(err);
    });
};
