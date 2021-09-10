const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
errorMsg.style.display = "none";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const idFamily = parseInt(formData.get("kk-id"));
    if (!formData.get("kk-id")) {
        errorMsg.style.display = "";
        errorMsg.textContent = "Silahkan diisi terlebih dahulu";
        return;
    } else if (RegExp(/[^0-9]/g).exec(formData.get("kk-id"))) {
        errorMsg.style.display = "";
        errorMsg.textContent = "Harus berupa angka";
        return;
    }
    errorMsg.style.display = "none";
    window.location.href = `/cari-kk/${idFamily}`;
});
