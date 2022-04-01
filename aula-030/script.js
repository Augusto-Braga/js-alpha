const registerButton = document.getElementById("register");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

async function registerFunction() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
  };

  const response = await fetch("http://localhost:3333/register", options);

  console.log(await response.json());
}

registerButton.addEventListener("click", registerFunction);