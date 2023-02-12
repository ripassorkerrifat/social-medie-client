export const saveUserAndsetToken = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
  };
  fetch(`http://localhost:5000/user/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("socail-token", data?.token);
    })
    .catch((err) => {
      console.error(err);
    });
};
