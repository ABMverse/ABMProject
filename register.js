const save = () => {
  const userNameInput = document.querySelector("#username").value;
  const userIdInput = document.querySelector("#userid").value;
  const passwordInput = document.querySelector("#password").value;
  const password2Input = document.querySelector("#password2").value;

  console.log("button click", userIdInput);

  const data = {
    userid: userIdInput,
    username: userNameInput,
    password: passwordInput,
    password2: password2Input,
  };
  console.log(data);

  // json stringify untuk mengubah data js object menjadi json
  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  localStorage.setItem("data", dataJSON);
  alert("Apakah data anda sudah benar ?");
  window.location.replace("./loginPage.html");

  localStorage.setItem("userid", userIdInput);
  localStorage.setItem("username", userNameInput);
  localStorage.setItem("password", passwordInput);
  localStorage.setItem("password2", password2Input);
};

const get = () => {
  const dataJSON = localStorage.getItem("data");
  console.log(dataJSON);

  // json parse untuk mengubah data json menjadi js object
  const data = JSON.parse(dataJSON);
  console.log(data);
};
