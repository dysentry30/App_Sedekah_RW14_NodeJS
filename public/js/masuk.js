const form = document.querySelector("form");
const inputseePassword = document.querySelector("#seePassword");
const inputPassword = document.querySelector("#password");
const errorMsg = document.querySelectorAll(".error-msg");
errorMsg.forEach((e) => (e.style.display = "none"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const user = {
        username: formData.get("username").toString().trim(),
        password: formData.get("password").toString().trim(),
    };
    let isError = false;

    if (!user.username) {
        errorMsg[0].style.display = "";
        errorMsg[0].textContent = "Silahkan isi username anda";
        isError = true;
    } else {
        errorMsg[0].style.display = "none";
        errorMsg[0].textContent = "";
    }

    if (!user.password) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "Silahkan isi kata sandi anda";
        isError = true;
    } else {
        errorMsg[1].style.display = "none";
        errorMsg[1].textContent = "";
    }

    if (isError) {
        return;
    }
    fetch("/masuk", {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.status === "Failed") {
                Swal.fire({
                    title: result.title,
                    text: result.message,
                    icon: "error",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonColor: "#198754",
                    confirmButtonText: "Mengerti",
                });
                return;
            } else {
                window.location.replace("/");
                return;
            }
        });
});

inputseePassword.addEventListener("change", (e) => {
    if (e.target.checked) {
        inputPassword.setAttribute("type", "text");
    } else {
        inputPassword.setAttribute("type", "password");
    }
});
