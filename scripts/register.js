if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

let form = document.querySelector("form"); //Lấy thẻ form đầu tiên vào biến form

form.addEventListener("submit", function (event) {
  event.preventDefault(); //Dừng toàn bộ chức năng mặc định

  let username = document.getElementById("username").value.trim(); //Lấy giá trị username
  let password = document.getElementById("password").value.trim(); //Lấy giá trị password
  let email = document.getElementById("email").value.trim(); //Lấy giá trị email

  if (password < 6) {
    alert("Password needs to have more than 6 characters");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));

      users.push({
        username,
        password,
        email,
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            username,
            password,
            email,
          },
        ])
      );
    }
    alert("Successful registration");
    location.href = "./login.html";
  }
});
