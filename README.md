[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/UDX78Bqi)
<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portofolio Pribadi</title>
        <!-- Import Bootstrap dari CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="ini.css">
        
    </head>
    
<body>
    <!-- Bagian Nama dan Deskripsi -->
    <header>
        <div class="img"></div>
        <h1>Mochamad Kolbi Nuron</h1>
        <p>Tentang saya: Saya adalah seorang mahasiswa Teknik Informatika ITS tahun 2023. Saya berasal dari Surabaya. Sekarang saya berusia 20 Tahun</p>
    </header>

    <!-- Bagian Riwayat Pendidikan -->
    <section id="education">
        <h2>Riwayat Pendidikan</h2>
        <div class="container">
            <div class="education-item">
                <img src="foto/logosd.jpg" alt="Logo SD">
                <div>
                    <h3>SDN KERTAJAYA(PUJA)</h3>
                    <p>Kota: Surabaya</p>
                    <p>Tahun Masuk: 2011</p>
                    <p>Tahun Keluar: 2017</p>
                </div>
            </div>
            <div class="education-item">
                <img src="foto/logosmp.jpg" alt="Logo SMP">
                <div>
                    <h3>SMPN 6 Surabaya</h3>
                    <p>Kota: Surabaya</p>
                    <p>Tahun Masuk: 2017</p>
                    <p>Tahun Keluar: 2020</p>
                </div>
            </div>
            <div class="education-item">
                <div class="img-sma"></div>
                <div>
                    <h3>SMAN 16 Surabaya</h3>
                    <p>Kota: Surabaya</p>
                    <p>Tahun Masuk: 2020</p>
                    <p>Tahun Keluar: 2023</p>
                </div>
            </div>
            <div class="education-item">
                <img src="foto/logoits.png" alt="Logo Universitas">
                <div>
                    <h3>Institut Teknologi Sepuluh Nopember</h3>
                    <p>Kota: Surabaya</p>
                    <p>Tahun Masuk: 2023</p>
                    <p>Tahun Keluar: Sekarang</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Bagian Hobi -->
    <section id="hobbies">
        <h2>Hobi</h2>
        <div class="container">
            <div class="hobby-item">
                <img src="foto/fotobasket.jpg" alt="Gambar Hobi 1">
                <p><b>Bermain Basket</b></p>
            </div>
            <div class="hobby-item">
                <img src="foto/fotofutsal2.jpg" alt="Gambar Hobi 2">
                <p><b>Bermain Futsal</b></p>
            </div>
            <div class="hobby-item">
                <img src="foto/jogging.jpg" alt="Gambar Hobi 2">
                <p><b>Jogging</b></p>
            </div>
        </div>
    </section>

    <!-- Bagian Top 3 Movies -->
    <section id="top-movies">
        <h2>Top 3 Movies</h2>
        <div class="container">
            <div class="movie-item">
                <img src="foto/sekawanlimo.jpg" alt="Cover Movie 1">
                <div>
                    <h3>SEKAWANLIMO</h3>
                    <p>Rate: 8/10</p>
                    <p>Alasan: Film ini sangat bagus dan lucu. Sebuah film yang menayangkan genre horror yang dicampuri oleh komedi, sehingga film tida sepenuhnya tegang</p>
                </div>
            </div>
            <div class="movie-item">
                <img src="foto/avatar.jpg" alt="Cover Movie 2">
                <div>
                    <h3>AVATAR</h3>
                    <p>Rate: 9,5/10</p>
                    <p>Alasan: Filmk ini sangat rekomen untuk ditonton karena memiliki alur cerita yang sangat menarik dan unik untuk ditonton dan memiliki CGI yang sangat bagus</p>
                </div>
            </div>
            <div class="movie-item">
                <img src="foto/deadpool.jpg" alt="Cover Movie 3">
                <div>
                    <h3>DEADPOOL</h3>
                    <p>Rate: 8/10</p>
                    <p>Alasan: Film ini intro nya bagus, Alur cerita nya bagus dan rekomen untuk ditonton</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Formulir Pesan -->
    <section id="contact">
        <h2>Kirim Pesan</h2>
        <form id="contactForm">
            <label for="name">Nama</label>
            <input type="text" id="name" placeholder="Masukkan nama Anda">
            <small class="error-message" id="nameError"></small>
            
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Masukkan email Anda">
            <small class="error-message" id="emailError"></small>
            
            <label for="message">Pesan</label>
            <textarea id="message" rows="4" placeholder="Tuliskan pesan Anda"></textarea>
            <small class="error-message" id="messageError"></small>
            
            <button type="submit" id="submitButton">Kirim</button>
            <div id="statusMessage"></div>
        </form>
    </section>

    <!-- Section untuk real-time update -->
    <section id="textUpdate">
        <h2>Update Text</h2>
        <label for="userInput">Tulis sesuatu:</label>
        <input type="text" id="userInput" placeholder="Ketik di sini...">
        <p>Hasil input: <span id="displayText"></span></p>
    </section>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Mochamad Kolbi Nuron. All Rights Reserved.</p>
    </footer>

    <script src="iki.js"></script>
</body>
</html>
