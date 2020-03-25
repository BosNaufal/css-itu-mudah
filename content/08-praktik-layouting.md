---
title: Praktik Layouting
slug: praktik-layouting
date: 24-03-2020
---

yuk kita coba membuat apa yaa.... Hmm... yuk kita coba bikin sebuah `navbar`.

Jadi navbar ini adalah navigasi yang berada diatas gitu. isinya menu-menu. Semacam peta agar user mudah untuk menjelajahi website kita.

Konten HTML

```html
<div class="navbar">
  <a href="#" class="logo">LOGO</a>

  <div class="menu-list">
    <a href="#" class="menu">Home</a>
    <a href="#" class="menu">Blog</a>
    <a href="#" class="menu">About</a>
  </div>
</div>
```

Konten CSS

```css
/* Block ini wajib yaa..  */
* {
  box-sizing: border-box;
}


.navbar {
  display: flex;
  background: #3F51B5;
  font-family: sans-serif;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.logo {
  display: block;
  font-size: 2rem;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu-list {
  display: flex;
  flex: 1; /* PERHATIKAN INI */
  justify-content: flex-end;
  padding-right: 15px;
}

.menu {
  display: block;
  padding: 7px 15px;
  color: white;
  background: #1db6ca;
  margin: 0 7px;
  text-decoration: none;
}
```

Hasilnya:

![Membuat Navbar step 1](./images/navbar-1.png)

Lumayan panjang yaa? Yaa emang. Tapi mari kita coba perdetil lagi bagian-bagian dari navbar ini.

## Flex Container dan Flex Content

Element dengan class `.navbar` ini berperan sebagai flex container. Kok bisa tau? yaa karena cirinya dia memiliki `display: flex`. Lantas apa saja flex content-nya? Flex content-nya adalah `.logo` dan `.menu-list` saja. 

Lho? terus yang `.menu` itu ikut siapa? Element `.menu` itu child dari `.menu-list` yang artinya bukan termasuk wewenang dari flex container `.navbar` (karena bukan turunannya langsung). 

Mengapa ini penting, karena kalau kita mau styling flexbox, kita mesti paham dulu mana flex containernya, mana flex content-nya.

## `Flex: 1;`

Selanjutnya mari kita soroti pada bagian `flex: 1;` aturan ini bertujuan untuk menentukan **bagian mana yang mendominasi**. Mendominasi maksudnya adalah *element* atau flex content mana yang berhak untuk menggunakan **sisa dari space di dalam flex container**.

Kita tau sendiri kalau `.navbar` punya 2 flex content yaitu `.logo` dan `.menu-list`. Dan yang mendominasi adalah `menu-list` karena mempunyai aturan `flex: 1`. Kita coba *inspect element* nya yaa.

![Inspect Element dari element menu list](./images/navbar-2.png)

Bisa kita perhatikan dari gambar diatas, bahwa `.menu-list` mempunyai porsi yang lebih besar ketimbang `.logo`. Padahal sebenernya `.menu-list` hanya butuh space kecil untuk menampung 3 menunya tersebut. Tapi karena mempunyai aturan `flex: 1;`, alhasil dia memenuhi sisa space yang ada.

Sampai sini, bisa yaa? membedakan mana Flex Container dan mana Flex Content?


## Nested Flexbox

Nah kita juga bisa membuat nested flexbox, yaitu flexbox di dalam flexbox. Maksudnya gimana? Jika diperhatikan, `.menu-list` merupakan flex content dari `.navbar`. Nah, kita juga bisa menjadikan `.menu-list` sebagai flex container. Itu mengapa di `.menu-list` ada aturan `display: flex`. Mau eksperimen? coba hapus aturan `display: flex;` yang ada di `.menu-list` lalu lihat apa yang terjadi


## Variasi Style

Semoga semua pembaca membaca hingga bab ini yaa. Karena saya sedikit menyesal belum menginfokan bahwa 1 *element* bisa memiliki banyak class. tujuannya buat apa? tujuannya beragam, agar aturan css kita *reusable* (dapat digunakan ulang) ataupun agar bisa digunakan untuk membuat variasi. Gimana tuh maksudnya? Yuk kita coba aja membuat variasi pada navbar kita.

```css
/* Tambahkan blok ini */
.active {
  background: #ffc107;
}
```

Konten HTML

```html
<div class="navbar">
  <a href="#" class="logo">LOGO</a>

  <div class="menu-list">
    <a href="#" class="menu active">Home</a>
    <a href="#" class="menu">Blog</a>
    <a href="#" class="menu">About</a>
  </div>
</div>
```

Hasil

![Variasi dengan multi class](./images/multi-class.png)

Perhatikan pada link **Home**. Pada menu home terdapat class `menu` dan class `active`. Nah karena kita telah memiliki variasi menu aktif, kita tinggal pilih, menu mana yang mau diberi warna orange dengan menambahkan class `active` pada elemennya. Simpel kan?

Pada bab berikutnya akan lebih menantang, karena kita akan belajar cara membuat web secara responsive. Mau bisa? yaa lanjutinlah belajarnya...