/*
Sebuah Toko perlengkapan bernama “FoxShop” sedang membagikan beberapa barang khusus bagi membernya.
Pembeli dari barang - barang khusus ini diwajibkan membawa kartu keanggotaan FoxShop.
Kartu keanggotaan terdiri dari 2 label berbeda yaitu Reguler dan VIP, dari setiap kartu memiliki 3 level yang berbeda.

Barang yang akan dibagikan memiliki syarat berikut :
1. kartu dengan level 1 akan mendapatkan kotak berwarna merah
2. kartu dengan level 2 akan mendapatkan kotak berwarna biru
3. kartu dengan level 3 akan mendapatkan kotak berwarna kuning
4. kartu dengan label VIP akan mendapatkan kotak berukuran besar
5. kartu dengan label Reguler akan mendapatkan kotak berukuran kecil
6. jika tidak menginput kartu/nama/level, maka tampilkan 'Data tidak lengkap'
7. jika level melebihi 3 atau jenis kartu berbeda dari yang di atas, maka tampilkan 'Invalid Card'

Program ini akan menerima 3 input:
Name -> di dalam variabel name
Kartu -> di dalam variabel kartu
Level  -> di dalam variabel level
 
Jika kartu VIP dan level 2 , maka output:
[Name] mendapatkan kotak berwarna biru berukuran besar.

Jika input invalid meka output seperti yang di jelaskan pada syarat di atas

Rules : 
- Diperbolehkan membuat variable baru
- Dilarang menggunakan built-in function
- Dilarang menghapus dan mengubah nama dari variable yang tersedia
*/


var name = 'Rudy' // change variable name value to any String
var kartu = 'VIP' // change variable kartu to 'VIP' or 'Reguler' or ''
var level = 1 // change variable level value to any Number 

// Write your code below
var vip = 'besar', reg = 'kecil', lev1 = 'merah', lev2 = 'biru', lev3 = 'kuning';

if (name == '' || kartu == '' || level < 1) {
    console.log('Data tidak lengkap');
} else if (kartu == 'VIP') {
        if (level == 1) {
            console.log(`${name} mendapatkan kotak berwarna ${lev1} berukuran ${vip}`);
        }   else if (level == 2) {
            console.log(`${name} mendapatkan kotak berwarna ${lev2} berukuran ${vip}`)
        }   else if (level == 3) {
            console.log(`${name} mendapatkan kotak berwarna ${lev3} berukuran ${vip}`)
        }   else {
            console.log(`Invalid Card`);
        }
    }   else if (kartu == 'Reguler') {
        if (level == 1) {
            console.log(`${name} mendapatkan kotak berwarna ${lev1} berukuran ${reg}`);
        }   else if (level == 2) {
            console.log(`${name} mendapatkan kotak berwarna ${lev2} berukuran ${reg}`)
        }   else if (level == 3) {
            console.log(`${name} mendapatkan kotak berwarna ${lev3} berukuran ${reg}`)
        }   else {
            console.log(`Invalid Card`);
        }
    } else {
        console.log(`Invalid Card`)
    }

/* //Switch Case
if (name == '' || kartu == '' || level < 1) {
    console.log('Data tidak lengkap');
} else if (kartu == 'VIP') {
    switch (level) {
        case 1 : {console.log(`${name} mendapatkan kotak berwarna ${lev1} berukuran ${vip}`); break; }
        case 2 : {console.log(`${name} mendapatkan kotak berwarna ${lev2} berukuran ${vip}`); break; }
        case 3 : {console.log(`${name} mendapatkan kotak berwarna ${lev3} berukuran ${vip}`); break; }
        default : {console.log(`Invalid Card`); break}
    }
} else if (kartu == 'Reguler') {
    switch (level) {
        case 1 : {console.log(`${name} mendapatkan kotak berwarna ${lev1} berukuran ${reg}`); break; }
        case 2 : {console.log(`${name} mendapatkan kotak berwarna ${lev2} berukuran ${reg}`); break; }
        case 3 : {console.log(`${name} mendapatkan kotak berwarna ${lev3} berukuran ${reg}`); break; }
        default : {console.log(`Invalid Card`); break}
    }
} else {
    console.log(`Invalid Card`)
}
*/
