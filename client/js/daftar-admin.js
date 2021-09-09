const form = document.querySelector("form");
const inputseePassword = document.querySelector("#seePassword");
const inputPassword = document.querySelector("#password");
const errorMsg = document.querySelectorAll(".error-msg");
errorMsg.forEach((e) => (e.style.display = "none"));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const fullName = formData.get("full-name").toString().trim();
    const username = formData.get("username").toString().trim();
    const password = formData.get("password").toString().trim();
    let permission = formData.get("permission").toString().trim();
    let isError = false;
    const isCharacterOnly = RegExp(/([^a-zA-Z\s]|[\d])/gi);
    const isUsernameValid = RegExp(
        /^(?=[a-zA-Z0-9._]$)(?!.*[_.]{2})[^_.].*[^_.]$/gi
    );

    if (isCharacterOnly.test(fullName)) {
        errorMsg[0].style.display = "";
        errorMsg[0].textContent = "Gunakan alfabet untuk nama lengkap";
        isError = true;
    } else if (!fullName) {
        errorMsg[0].style.display = "";
        errorMsg[0].textContent = "Isi nama lengkap";
        isError = true;
    } else {
        errorMsg[0].style.display = "none";
        errorMsg[0].textContent = "";
    }

    if (isUsernameValid.test(username)) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "Username tidak boleh menggunakan spasi";
        isError = true;
    } else if (!username) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "Isi username";
        isError = true;
    } else if (username.length < 6) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "username harus melebihi dari 6 karakter";
        isError = true;
    } else {
        errorMsg[1].style.display = "none";
        errorMsg[1].textContent = "";
    }

    if (isError) {
        return;
    }

    const user = {
        fullName,
        username,
        password,
        permission,
    };
    fetch("/daftar-admin", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            form.reset();
            console.log(result);
            if (result.status === "Success") {
                Swal.fire({
                    title: result.message,
                    icon: "success",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonColor: "#198754",
                    confirmButtonText: "Oke",
                });
            } else {
                Swal.fire({
                    title: result.title,
                    text: result.message,
                    icon: "error",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonColor: "#198754",
                    confirmButtonText: "Mengerti",
                });
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
