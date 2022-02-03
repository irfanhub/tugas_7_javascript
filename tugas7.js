
const tinggiBadan = [172,163,178,189,152,164,181,163,155,160]

console.log("Dengan menggunakan perulangan biasa")
for (var i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i])
}

console.log("Dengan menggunakan perulangan for of")
for (const ab of tinggiBadan){
  console.log(ab)
}


/*
analisis saya adalah perulangan for of lebih sederhana, efisien
dan tidak perlu lagi memanggil sebuah index dari sebuah array
*/
