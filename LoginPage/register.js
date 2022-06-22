const save = () => {
  const usernameInput = document.querySelector("#username").value;
  const passwordInput = document.querySelector("#password").value;
  console.log("button click", usernameInput);

  const data = {
    username: usernameInput,
    password: passwordInput,
  };
  console.log(data);

  // json stringify untuk mengubah data js object menjadi json
  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  localStorage.setItem("data", dataJSON);
  window.location.replace("./login.html");

  localStorage.setItem("username", usernameInput);
  localStorage.setItem("password", passwordInput);
};

const get = () => {
  const dataJSON = localStorage.getItem("data");
  console.log(dataJSON);

  // json parse untuk mengubah data json menjadi js object
  const data = JSON.parse(dataJSON);
  console.log(data);
};
