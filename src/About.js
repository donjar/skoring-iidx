import React, { Component, Fragment } from 'react';

class About extends Component {
  render() {
    return (
      <Fragment>
        <h1>About</h1>

        <h2>Aturan</h2>

        <h3>Cara Berpartisipasi</h3>
        <ul>
          <li>Setiap skoring memiliki 3 level: Normal, Hyper, dan Another.</li>
          <li>Pilih level yang ingin Anda ikuti, dan mainkan semua lagu skoring. Setiap pemain boleh berpartisipasi dalam lebih dari satu level.</li>
          <li>Foto satu layar hasil bermain Anda, <emph>sesuai instruksi yang diberikan</emph>. Contohnya, bila instruksi meminta adanya jempol di foto, pastikan Anda foto hasil dengan jempol Anda di dalam foto. Pastikan skor, tingkat kesulitan, dan nama lagu ada di dalam foto tersebut.</li>
          <li>Email hasil foto ke <a href="mailto:skoringiidx@herbert.id">skoringiidx@herbert.id</a>.</li>
        </ul>

        <h3>Aturan Teknis</h3>
        <ul>
          <li>Semua option yang tidak mendiskualifikasi skor Anda diperbolehkan untuk digunakan. Contoh option yang diperbolehkan: Random, S-Random, R-Random, Assist Easy, Auto Scratch, dan Hidden+. Contoh option yang tidak diperbolehkan: H-Ran dan Assist Judge.</li>
          <li>Anda tidak diharuskan untuk bermain semua lagu dalam 1 kredit.</li>
          <li>Anda boleh submit hasil bermain lebih dari 1 kali. Skor yang paling bagus akan dipilih.</li>
          <li>Penilaian dilakukan dengan melihat EX Score Anda. EX Score ini akan diubah menjadi bentuk BPI, yang dijabarkan di bawah ini.</li>
        </ul>

        <h3>Teknis Penilaian</h3>

        <h4>Motivasi</h4>
        <p>Beberapa turnamen menggunakan sistem penjumlahan EX Score biasa. Ini bisa menyebabkan ketidakadilan. Contohnya, andaikan pemain 1 mendapatkan skor 2760 dari 3910 (A+210, AA-154) pada lagu Liberation (Another), dan pemain 2 mendapatkan skor 2550 dari 3910 (A+10, AA-414) pada lagu tersebut. Perbedaannya kira-kira setengah grade, pemain 1 berada di sekitar A tengah menuju AA dan pemain 2 berada di A rendah.</p>
        <p>Di waktu yang sama, pemain 1 mendapatkan skor 1700 dari 2146 (AA+30, AAA-208) dan pemain 2 mendapatkan skor 1900 dari 2146 (AA+230, AAA-8) di lagu yang sama. Di sini, pemian 1 berada di sekitar AA rendah, dan pemain 2 berada di sekitar AA tinggi (hampir AAA).</p>
        <p>Namun, ketika dijumlahkan, pemain 1 mendapatkan skor 4460 dan pemain 2 mendapatkan skor 4450, sehingga pemain 1 menang. Padahal pemain 1 kalah lumayan jauh dibanding pemain 2. Tidak begitu adil, yah?</p>
        <p>Di sisi lain, ada beberapa turnamen (seperti ARENA mode) yang menggunakan sistem poin simpel: juara 1 mendapatkan 2 poin, juara 2 mendapatkan 1 poin, sisanya 0 poin. Ini juga tidak begitu adil - pada kasus di atas, mereka dianggap seri, padahal pemain 2 menangnya cukup jauh ke pemain 1.</p>
        <p>Oleh karena itu, sistem BPI ini lahir, sehingga skor-skor yang didapatkan bisa dibandingkan dengan lebih adil.</p>

        <h4>Detil Penilaian</h4>
        <p>Pada dasarnya, untuk setiap lagu, nilai tertinggi dan terrendah yang bisa didapatkan masing-masing 100 dan 0. Pemain dengan skor paling tinggi mendapatkan nilai 100, dan pemain dengan skor paling rendah mendapatkan nilai 0.</p>
        <p>Sisanya, pemain akan mendapatkan nilai dengan cara:</p>
        <p>100 * (ln((maxScore - min) / (maxScore - score)) / ln((maxScore - min) / (maxScore - max)))^1.5</p>
        <p>di mana:</p>
        <ul>
          <li>maxScore menandakan skor tertinggi yang bisa diperoleh di lagu tersebut</li>
          <li>max menandakan skor tertinggi pemain di lagu tersebut</li>
          <li>min menandakan skor terrendah pemain di lagu tersebut</li>
        </ul>
        <p>Ribet yah? Intinya, semakin tinggi EX Score kamu, semakin tinggi juga nilai kamu.</p>
      </Fragment>
    );
  }
}

export default About;
