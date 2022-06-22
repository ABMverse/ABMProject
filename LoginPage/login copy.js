// function login
const login = () => {
  // ambil value input dari user
  const usernameInput = document.querySelector("#userid").value;
  const passwordInput = document.querySelector("#password").value;

  console.log(useridInput, passwordInput);

  // ambil data dari localStorage
  const dataLocal = localStorage.getItem("data");
  const dataParse = JSON.parse(dataLocal);

  console.log(dataParse);

  // kondisi persamaan input user dengan data di localStorage

  if (usernameInput === dataParse.userIdInput && passwordInput === dataParse.password) {
    console.log("username dan password sama");
    alert("Login sukses");
    window.location.replace("./profile.html");
  } else {
    console.log("username atau password ada yang salah");
    alert("username atau password ada yang salah");
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
  }
};
