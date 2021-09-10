const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const date_time = document.querySelector("#date-time");
// const date = Date.;
// console.log(date);
let countdownAutoUpdate = 30;
errorMsg.style.display = "none";
date_time.textContent = `Halaman ini otomatis diperbarui dalam waktu ${countdownAutoUpdate} detik lagi`;
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

setInterval(() => {
    // const now = Date.parse(Date.now().toString);
    if (countdownAutoUpdate === 0) {
        return window.location.reload();
    }
    date_time.textContent = `Halaman ini akan otomatis diperbarui dalam waktu ${countdownAutoUpdate--} detik lagi`;
}, 1000);
