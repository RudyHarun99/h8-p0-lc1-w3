/* Buatlah variable bernama line` yang memiliki value yang terdiri dari huruf, angka ( 0-9 ) dan simbol (only: #, $, &, @), value merupakan type data String.

Tugas kamu adalah memisahkan/membedakan angka dari variable line dengan code yang akan kamu tulis..
Jika total dari angka-angka pada line adalah angka genap, maka ouput merupakan kumpulan value dengan index genap dari line. Jika tidak, output adalah kumpulan value dengan index ganjil dari line

Contoh:
Input (line) : 'h31lO0?%@'
Proses : 3 + 1 + 0 = 4
Output : 'h1O@'

Rules :
- Diperbolehkan membuat variable baru
- Built-in function yang diizinkan:
    - Built-in untuk Math
    - Built-in untuk mengubah tipe data (number -> string / string -> number)
    - Informative built-in function ( isNaN(), isInteger(), .length, typeof) tidak diperbolehkan menggunakan build-in function diluar list tersebut
*/

// Write your code below`

// var line = '?1/1!';
// var line = 'h31lO0?%@'
// var line = 'ha7s8sad75r&#$@#&as991' //ini adalah contoh, silahkan ganti dengan string yang ingin kalian uji

var count = 0;
var angka = 0;
var hasil = '';

// ini jawaban yang saya upload
for (var i = 0; i < line.length; i++) {
    angka = Number(line[i]);
    if (Number.isInteger(angka) == true) {
        // salah di sini, harusnya count += angka
        count++;
    }
}

//di blok ini jg msh ada salah krn ga memperhatikan soal klo ternyata ada simbol yg ga boleh spt '?'
if (count % 2 == 0) {
    for (var j = 0; j < line.length; j++) {
        if (j % 2 == 0) {
            hasil += line[j];
        }
    } 
} else {
    for (var j = 0; j < line.length; j++) {
        if (j % 2 !== 0) {
            hasil += line[j];
        }
    }
}

// ini jawaban setelah revisi, tp udah lewat waktu, ga diupload
// for (var i = 0; i < line.length; i++) {
//     angka = Number(line[i]);
//     if (Number.isInteger(angka) == true) {
//         count += angka;
//     }
// }

// var kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$&@';
// for (var i = 0; i < line.length; i++) {
//     for (var j = 0; j < kamus.length; j++) {
//         if (line[i] == kamus[j]) {
//             if (count % 2 == 0 && i % 2 == 0) {
//                 hasil += line[i];
//             } else if (count % 2 !== 0 && i % 2 !== 0) {
//                 hasil += line[i];
//             }
//         }
//     }
// }

console.log(count);
console.log(hasil);