---
title: Advance Selector
slug: advance-selector
date: 22-03-2020
---

Nah, kerennya adalah... eh ga tau juga sih, ini sebenernya keren atau malah bikin pusing. Di CSS kita bisa menggunakan semacam "advance selector". Maksudnya gimana sih? yaa maksudnya tuh tidak sesederhana cuman select tag, class, ataupun id saja. Melainkan bisa dikombinasikan.

## Selector Kombinasi

Misal nih kita hendak melakukan select pada element `div` dengan class `content` dan id `first-post`. Kalau digambarkan dalam codingan kira-kira seperti ini bentuk elementnya.

```html
<div class="content" id="first-post">
  Ini First Post
</div>
<div class="content" id="second-post">
  Ini Second Post
</div>
```

Maka cara menuliskan selector yang sangat spesifik pada first post saja adalah sebagai berikut:

```css
div.content#first-post {}
```

atau bisa disederhanakan menjadi

```css
.content#first-post {}
```

Mari kita coba menuliskannya secara lengkap.

```html
<head>
  <style>
    .content {
      padding: 25px 15px;
      font-size: 1.2rem;
    }

    .content#first-post {
      background: #f2f2f2;
      border: 1px solid #DDD;
    }
  </style>
</head>
<body>
  <div class="content" id="first-post">
    Ini First Post
  </div>
  <div class="content" id="second-post">
    Ini Second Post
  </div>
  <div class="content" id="third-post">
    Ini Third Post
  </div>
</body>
```

Hasilnya akan sebagai berikut:

![Hasil multiple selector](./images/multiple-selector.png)

Pada gambar diatas yang berbeda hanyalah post pertama. ini karena kita melakukan styling tambahan khusus untuk post dengan `id="first-post"`.

Sederhananya, cara mengombinasikan CSS bisa dengan menempelkannya langsung. Berikut beberapa contoh lainnya.

```css
.halo.hai#mantab {}
#kuy#kita#belajar {}
h1.title-page#first-post {}
...
dst.
```

## Multi Selector

Selain dikombinasikan, kita juga bisa melakukan styling **beberapa selector dalam 1 block sekaligus**. Misal:

```html
<a href="#" class="prev-link">Prev</a>
<a href="#" class="next-link">Next</a>
```

```css
.next-link, .prev-link {
  display: inline-block;
  padding: 10px 15px;
  background: green;
  color: white;
  font-family: sans-serif;
  text-align: center; 
  margin: 15px 10px;
}
```

Maka hasilnya akan seperti ini:

![multi selector CSS](./images/multi-selector.png)

Cara menggunakan multi selector CSS yaitu dengan memisahkan masing-masing selector dengan tanda koma (`,`).


## Nested Selector

Nested selector memungkinkan kita untuk melakukan styling pada element berdasarkan parentnya. Gimana tuh maksudnya? Jadi gini Semisal kita punya link list yang strukturnya seperti ini.

```html
<div class="menu-list">
  <span><a href="#">Home</a></span>
  <span><a href="#">Profile</a></span>
  <span><a href="#">About</a></span>
  <span><a href="#">Blog</a></span>
</div>

<p>Ini paragraph hanya sebagai <a href="#">figuran</a></p>
```

Karena sesuatu dan lain hal, saya tidak mau menambahkan attribute tambahan pada element `<a>`, tapi saya mau styling element `<a>`-nya. Gimana dong? Caranya...

```css
.menu-list {
  margin: 0;
  padding: 0;
  width: 250px;
}

.menu-list span a {
  display: block;
  padding: 10px 15px;
  background: purple;
  color: white;
  border-bottom: 1px solid white;
}
```

Hasilnya akan seperti di bawah ini:

![Menu list styling](./images/menu-list.png)

Hanya link yang mempunyai *parent* `class="menu-list"` saja yang berwarna ungu. Sedangkan link di bagian bawah (yaitu di dalam paragraf) tidak terpengaruh, walaupun sama-sama *element* `<a>` biasa tanpa tambahan class atau apapun.

Nah mari kita bereksperimen dengan menambahkan `class="menu-list"` pada element `<p>`. Kita lihat apa yang akan terjadi.

```html
<div class="menu-list">
  <span><a href="#">Home</a></span>
  <span><a href="#">Profile</a></span>
  <span><a href="#">About</a></span>
  <span><a href="#">Blog</a></span>
</div>

<p class="menu-list">Ini paragraph hanya sebagai <a href="#">figuran</a></p>
```

Coba tebak apa yang terjadi? yang terjadi adalah sebagai berikut:

![Link tetap tidak berubah](./images/menu-list-2.png)

Yaps! Link figuran tetap tidak berubah. Mengapa? karena syaratnya selain menjadi child dari `class="menu-list"`, link juga harus menjadi child dari element `<span>`. Jadi harus satu kesatuan guis, tidak bisa terpisahkan satu sama lain. asek~

Mari kita coba tambahkan `<span>`.

```html
<div class="menu-list">
  <span><a href="#">Home</a></span>
  <span><a href="#">Profile</a></span>
  <span><a href="#">About</a></span>
  <span><a href="#">Blog</a></span>
</div>

<p class="menu-list">Ini paragraph hanya sebagai <span><a href="#">figuran</a></span></p>
```

Tadaaaa!

![Link figuran berubah warna jadi ungu](./images/link-figuran.png)


# Select Immediate Children (`>`)  

Berikutnya mirip dengan nested, tapi ini lebih spesifik pada childrennya di bawahnya secara langsung. Misal nih:

```html
<div class="level-1">
  <div>Level 2</div>
  
  <div>
    <div>Level 3</div>
  </div>

  <div>Level 2</div>

  <div>
    <div>Level 3</div>
  </div>
</div>
```

```css
div {
  border: 2px solid black;
  padding: 25px;
}

.level-1 > div {
  border: 2px solid red;
}
```

Hasilnya akan seperti ini:

![Select immediate children](./images/immediate-children.png)

Custom styling yang kita lakukan pada masing-masing div adalah memberinya garis hitam. Namun perbedaan yang mencolok adalah garis merah pada level 2 dan level 3. Hal ini dikarenakan ada rule khusus untuk div level 2 yang secara hirarki berperan sebagai `immediate children` dari element dengan `class="level-1"`.

Mengapa garis level 3 tidak berwarna merah? yaa karena dia bukan `immediate children` dari `class="level-1"` melainkan dia adalah `immediate children` dari element `class="level-2"`. Yuk kita coba eksperimen lagi.

```css
div {
  border: 2px solid black;
  padding: 25px;
}

.level-1 div {
  border: 2px solid red;
}
```

Tebak apa yang terjadi?

![Non Immediate Children](./images/non-immediate-children.png)

Jika kita menghapus tanda (`>`) maka **semua div yang ada di dalam element** `class="level-1"` akan terpengaruh dan memiliki garis merah.


## pseudo-class Selector




Mulai bingung? gapapa ga harus paham sekarang.

