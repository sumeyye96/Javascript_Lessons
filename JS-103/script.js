let raining = true;

if (raining) {
  console.log("şemdsiyeni al");
}

let a = 17;
let b = 16;
let c = 6;

if (a > b && b === c) {
  console.log(`${a} ${b}'den büyüktür`);
} else {
  console.log(`${a} ${b}'den büyük değil`);
}

let net = "merhaba  let a = 25";
let net2 = "merherba let a = 25";
let net3 = `merhaba ${a}`;

console.log(net3);

if (a >= 18) {
  console.log("dışarı çıkabilir");
} else {
  console.log("dışarı çıkamaz");
}

if (a > 12 && a < 18) {
  // Her zaman ilk basta if gelir
  console.log("dışarı çık, çok uzaklaşma");
} else if (a >= 18) {
  sonra; // sonra else if gelir
  console.log("kalbinin götürdüğü yere git");
} else if (a >= 65) {
  console.log("yine evde otur");
} else {
  //En son else gelir
  console.log("evde otur");
}

if (b > 10) {
  console.log("sende evde otur");
}

if (a > 12 && a < 18) {
  if (b === 15) {
    console.log("abinle  git");
  }
  if (b > 15) {
    console.log(`tek başına gidebilirsin`);
  }
} else if (a >= 18) {
  console.log("kalbinin götürdüğü yere git");
} else if (a >= 65) {
  console.log("yine evde otur");
} else {
  console.log("evde otur");
}

isMantarZehiro = true;

if (isMantarZehiro) {
  if (a < 6 && a > 65) {
    console.log("yoğun bakım");
  } else {
    console.log("ayakta tedavi");
  }
} else {
  console.log("afiyet olsun");
}

//const inputValue = prompt("Lütfen yaşınızı giriniz!")
//console.log(inputValue);

// if(inputValue < 15) {
//   console.log(`${inputValue} yaşındasınız ve küçüksünüz`)
// }

console.log("10" + 1); // 101
console.log("10" - 1); // 9

let rain = 98; // true  // herhangi bir değer var ise
rain = false;
rain = 0;
rain = null;
rain = undefined;
rain = NaN;
rain = "";

console.log(rain);
if (rain) {
  console.log("şemsiyeni al");
} else {
  console.log("rain yok");
}

let x = 0;
let randum = Math.floor(Math.random() * 10);
if (randum > 5) {
  x--;
} else {
  x++;
}

console.log(x);

//let weekDay = prompt("günü giriniz").toLowerCase();
let weekDay = "monday";
//let lower = weekDay.toLowerCase();

// if (weekDay === "Monday") {
//   console.log(`bugün günlerden ${weekDay}, yemek menüsü .....`);
// }

switch (weekDay) {
  case "monday":
    console.log(`bugün günlerden ${weekDay}, yemek menüsü Pzartesi.....`);
    break;
  case "tuesday":
    console.log(`bugün günlerden ${weekDay}, yemek menüsü Salı.....`);
    break;
  case "wednesday":
    console.log(`bugün günlerden ${weekDay}, yemek menüsü Çarşamba.....`);
    break;
  case "thursday":
    console.log(`bugün günlerden ${weekDay}, yemek menüsü Perşembe.....`);
    break;
  case "friday":
    console.log(`bugün günlerden ${weekDay}, yemek menüsü Cuma.....`);
    break;
  default:
    console.log("bugün haftasonu");
    break;
}

let m = 3;
let n = 4;

switch (m > n) {
  case true:
    console.log("m n'den büyüktür");
    break;
  default:
    console.log("hayır n büyüktür");
    break;
}

switch (true) {
  case m > n:
    console.log("m n'den büyüktür");
    break;
  case m < n:
    console.log("hayır n büyüktür");
    break;
  default:
    console.log("eşitler");
    break;
}

let hava = "yagmurlu"; //BURAYI CALIS
switch (hava) {
  case "yagmurlu":
    console.log(hava);
    break; //BREAK OLMAZSA ...
  case "karlı":
    console.log(hava);
    break;
  case "gunesli":
    console.log(hava);
    break;

  default:
    console.log("default");
    break;
}
let yagmurluk = true;

switch (hava) {
  case "yagmurlu":
    switch (yagmurluk) {
      case true:
        console.log("yagmurluk giy");
        break;
      default:
        console.log("yagmurluk satın al");
        break;
    }
    console.log(hava);
    break; //BREAK OLMAZSA ...
  case "karlı":
    console.log(hava);
    break;
  case "gunesli":
    console.log(hava);
    break;

  default:
    console.log("default");
    break;
}

let araba = "toyota";
let var1 = null;
switch (araba) {
  case "honda":
    var1 = "kırmızı";
    break;
  case "toyota":
    var1 = "siyah";
    break;

  default:
    break;
}

console.log(var1);

let isNight = true;

if (isNight) {
  console.log("dişlerini fırçala");
} else {
  console.log("calışmaya devam");
}

isNight ? console.log("dişlerini fırçala") : console.log("calışmaya devam"); //KISAYOL


let time = 12;
let mesaj = "";

time >= 17 ? mesaj = "mesai bitti" : time >= 12 && time <=13 ? mesaj="öğlen arası" : time < 8 ? mesaj="mesai başlamadı" : mesaj="mesai devam"
console.log(mesaj)

let mesaj2 = time > 8 ? "mesai başladı" : "mesai başlamadı";
console.log(mesaj2)

// örnek kullanım syntax hatalı
//<input style={`border:${isPasswordTrue ? "black" : "red"}`}/>


let ahmet = 70;
let mehmet = 60;
let cemil = 45;

let inputVal = prompt("isim giriniz")
let inputVal2 = prompt("notunuzu giriniz")
switch (true) {
  case inputVal2 > 50:
    console.log(`${inputVal} Bey, sınıfı geçtiniz`)
    break;

  default:
    break;
}