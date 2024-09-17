// Fungsi untuk validasi form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Mencegah refresh halaman

    // Mengambil nilai dari input form
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let hasError = false;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    
    // Validasi input
    if (!name) {
        document.getElementById("nameError").textContent = "Nama wajib diisi";
        hasError = true;
    }
    if (!email) {
        document.getElementById("emailError").textContent = "Email wajib diisi";
        hasError = true;
    }
    if (!message) {
        document.getElementById("messageError").textContent = "Pesan wajib diisi";
        hasError = true;
    }

    // Jika tidak ada error, lakukan POST
    if (!hasError) {
        let submitButton = document.getElementById("submitButton");
        let statusMessage = document.getElementById("statusMessage");

        // Ganti tombol dengan loading
        submitButton.innerHTML = "Mengirim...";
        submitButton.disabled = true;

        // Mengirimkan data menggunakan fetch
        fetch("https://debug.nafkhanzam.com/web-programming-e03", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(data => {
            // Tampilkan pesan sukses
            statusMessage.textContent = "Terkirim";
            submitButton.innerHTML = "Kirim";
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error("Error:", error);
            statusMessage.textContent = "Gagal mengirim, coba lagi.";
            submitButton.innerHTML = "Kirim";
            submitButton.disabled = false;
        });
    }
});

// Fungsi untuk menyimpan input di localStorage dan update teks secara real-time
let userInput = document.getElementById("userInput");
let displayText = document.getElementById("displayText");

// Muat nilai dari localStorage
if (localStorage.getItem("savedText")) {
    userInput.value = localStorage.getItem("savedText");
    displayText.textContent = localStorage.getItem("savedText");
}

// Update display dan simpan di localStorage saat mengetik
userInput.addEventListener("input", function() {
    let value = userInput.value;
    displayText.textContent = value;
    localStorage.setItem("savedText", value);
});
