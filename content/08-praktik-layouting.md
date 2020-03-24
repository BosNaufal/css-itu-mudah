---
title: Praktik Layouting
slug: praktik-layouting
date: 24-03-2020
---

Pelajaran pada bab sebelumnya bisa dijadikan modal untuk memulai praktik layouting. Kita bisa membuat layout sederhana dengan kompleks menggunakan flex. Mau tau? yuk kita coba membuat apa yaa.... Hmm... yuk kita coba bikin sebuah `navbar`.

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

Lho? terus yang `.menu` itu ikut siapa? Element `.menu` itu child dari `.menu-list` yang artinya bukan termasuk wewenang dari flex container kita yaitu `.navbar` (karena bukan turunannya langsung). 

Mengapa ini penting, karena kalau kita mau styling flexbox, kita mesti paham dulu mana flex containernya, mana flex content-nya.

## `Flex: 1;`

Selanjutnya mari kita soroti pada bagian `flex: 1;` aturan ini bertujuan untuk menentukan bagian mana yang mendominasi. Mendominasi maksudnya adalah element atau flex content mana yang berhak untuk menggunakan **sisa dari space di dalam flex container**.

Kita tau sendiri kalau `.navbar` punya 2 konten yaitu `.logo` dan `.menu-list`. Dan yang mendominasi adalah `menu-list` karena mempunyai aturan `flex: 1`. Kita coba *inspect element* nya yaa.

![Inspect Element dari element menu list](./images/navbar-2.png)

Bisa kita perhatikan dari gambar diatas, bahwa `.menu-list` mempunyai porsi yang lebih besar ketimbang `.logo`. Padahal sebenernya `.menu-list` hanya butuh space kecil untuk menampung 3 menunya tersebut.

Sampai sini, bisa yaa? membedakan mana Flex Container dan mana Flex Content?