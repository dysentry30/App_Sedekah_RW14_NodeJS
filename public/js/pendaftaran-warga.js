const form = document.querySelector("form");
const errorMsg = document.querySelectorAll(".error-msg");
const loadingElement = document.querySelector(".loading");
const buttonSubmit = document.querySelector("#buttonSubmit");
const contentButtonSubmit = document.querySelector(".content-submit-button");

errorMsg.forEach((e) => {
    e.style.display = "none";
});
loadingElement.style.display = "none";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    loadingElement.style.display = "block";
    contentButtonSubmit.textContent = "Mohon tunggu";
    buttonSubmit.classList.add("disabled");

    const formData = new FormData(form);
    const idFamily = parseInt(formData.get("id-family").toString().trim(), 10);
    const fullName = formData.get("full-name").toString().trim();
    const noRT = parseInt(formData.get("no-rt").toString().trim(), 10);
    let isError = false;
    if (RegExp(/[^0-9]/g).test(idFamily)) {
        errorMsg[0].style.display = "";
        errorMsg[0].textContent = "Harus berupa angka";
        isError = true;
    } else if (!idFamily) {
        errorMsg[0].style.display = "";
        errorMsg[0].textContent = "Silahkan diisi terlebih dahulu";
        isError = true;
    } else {
        errorMsg[0].style.display = "none";
        errorMsg[0].textContent = "";
    }

    if (RegExp(/[^a-zA-Z\s]/g).test(fullName)) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "Harus berupa alfabet";
        isError = true;
    } else if (!fullName) {
        errorMsg[1].style.display = "";
        errorMsg[1].textContent = "Silahkan diisi terlebih dahulu";
        isError = true;
    } else {
        errorMsg[1].style.display = "none";
        errorMsg[1].textContent = "";
    }

    if (RegExp(/[^0-9]/g).test(noRT)) {
        errorMsg[2].style.display = "";
        errorMsg[2].textContent = "Harus berupa angka";
        isError = true;
    } else if (!noRT) {
        errorMsg[2].style.display = "";
        errorMsg[2].textContent = "Silahkan diisi terlebih dahulu";
        isError = true;
    } else {
        errorMsg[2].style.display = "none";
        errorMsg[2].textContent = "";
    }

    if (isError) {
        return;
    }
    const citizen = {
        idFamily,
        fullName,
        noRT,
    };
    fetch("/daftar-warga-baru", {
        method: "POST",
        body: JSON.stringify(citizen),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            form.reset();
            contentButtonSubmit.textContent = "Buat Data Warga";
            loadingElement.style.display = "none";
            buttonSubmit.classList.remove("disabled");
            if (result.status === "Success") {
                Swal.fire({
                    title: "Data warga berhasil ditambahkan",
                    icon: "success",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonColor: "#198754",
                    confirmButtonText: "Oke",
                });
            } else {
                Swal.fire({
                    title: "Data warga gagal ditambahkan",
                    text: "Pastikan data yang anda masukan sesuai!",
                    icon: "error",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonColor: "#198754",
                    confirmButtonText: "Mengerti",
                });
            }
        });
});
