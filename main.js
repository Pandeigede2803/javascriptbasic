

// beratBadan = 73

// if(pacar == null) {
//     pacar = "belum punya"
// } else {
//     pacar = "udah punya"
// }
// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 5123
// const y = 123128
// const z = x / y 

// alert(`hasil dari x = ${x} : y = ${y} adalah ${z}`)


// alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`);
// alert(`saldo awal saya sebesar Rp. ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp. ${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp. ${saldoAkhir}`);

let nama = "dede sudiahna"; //tipestring
let usia = 30; //tipe angka
let tinggiBadan = 166.5; //tipe angka
let beratBadan ; //undefined
let pacar = 12123;

beratBadan = 60

//jika pacar saya null makan pacar saya belum punya tapi selain dari null makan pacar saya udah punya
// if(pacar == null) {
// pacar = 'belum punya'
// }else {
//     pacar = 'udah punya'
// }   

// switch (pacar) {
//     case 1: //case 1
//         pacar = 'punya 1 aja'
//         break 
//     case 2: //case 2
//         pacar = "punya pacar 2, aku cukup playboy"
//         break
//     default: // jika tidak termasuk 1 dan dua maka akan ke default
//         pacar = "belum punya pacar"
//         break
// }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 3 
// const y = 5
// const z = x / y

// alert(`nilai x = ${x} nilai y = ${y} maka x+y = ${z}`)

// alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`) //memberikan alert di browser

// alert(`saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan yang akan saya miliki Rp.${saldoTambahan}jadi total saldo yang saya miliki Rp. ${saldoAkhir} `)

// let namaGuru = ['jodi', 'bunga', 'rahman']

// namaGuru.push('dean', 'fikri') //menambahkan value
// namaGuru.shift() // menghapus awal
// namaGuru.pop() //menghapus akhir


// alert(namaGuru)

// let namaGuru = []
// namaGuru[0] = 'dea'
// namaGuru[1] = 'fikir'
// namaGuru.shift()

// alert(namaGuru)

//forloop pengulangan

//3statement 

//ga perlu buat console.log berulang kali
// for(let i = 1; i <= 20; i = i+1) { //nilai awal i adalah 0 atau "belm ada data" ketika jika i kurang dari sama dengan 10 maka i sama dengan i tambah 1, i akan terlooping i+1 sampai nilainya sama dengan 10
//     console.log('dede sudiahna')
// }

// const namaGuru = ['dea','fikri','retno','bunga']

// jadi namaGuru akan dipanggil melalui I dengan kondisi looping urutan I dari 0 terus bertambah +1 sampai dengan namaGuru lenght habis
// for(let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }



// sedangkan ketika i kurang dari 10  dikondisikan dengan looping i+1 dan di console.log d
// while(i < 10) {
//     i++
//     console.log('dede sudiahna')  
// }


//lakukan deklarasi dede sudiahna  ketika i kurang dari 10 dengan i terus bertambah +1 setiao deklarasi
// let i = 0
// do  {
//     i++
//     console.log('dede sudiahna')
// } while (i < 10)

// tugas kecil 
// 1. promp untuk mengetahui saldo akhir dari yang diinputkan user
// 2. menentukan hari dari tanggal yang ada saat ini di pc kalian

// let hari = new Date().getDay()
// let bulan = new Date().getMonth()
// let tahun = new Date().getFullYear()
// console.log(`hari ini adalah hari ${hari} bulan ${bulan} tahun ${tahun}`)

let cityName =  "Denpasar";

let number1 = 200;
let number2= 800;
let number3= number1 + number2;
console.log(cityName);
console.log(number1);
console.log(number2);
console.log (number3);


// jadi fungsi itu berfungsi untuk
// membuat fungsi dari berbagai variable
// bisa dikombinasikan dengan berbagai code
// yang nanti hasil akhirnya bisa di return
// untuk memanggilnya haruspangil name(isi dari paramater1,isi dari parameter2)

function sum(a,b) {
    return a + b;
}

sum(number1, number2);
console.log(sum(number1, number2));

// const myClone = (a) => {
//     let number = "";
//     for (let a = 0; a < 3; a++) {
//         number += a + "";
//     }
//     return number;
// };

let myClone = (a) => {
    let number = "";
    for (let i = 0; i <3; i++) {
    number += a.toString();
    }   
    return number;
    };

console.log(myClone("doni"));

const cartItem = {
    itemID: 1,
    ItemName:"Shoes Nike",
    itemPrice:"$56",
    itemQuantity:2,
    cartID: 201
};


let item = (b) => {
for (let x in cartItem) {
    console.log(x,':',cartItem[x]);
}
};



let display = '"Koding Akademi"';
console.log(`This is bootcamp Fullstack Web Developer by ${display}`);

const fruits=['jambu','mangga','durian','anggur'];

console.log(fruits.length);
fruits[3]= "salak";
fruits[4]="Rambutan";


console.log(fruits);

const student = {
    name:"wayan Suksme",
    age:30,
    hobbies:['baca','ngoding','tidur']

};

let murid={};

for (let a in student) {
    murid =`${a} : ${student[a]}`;
    };

    console.log(murid);



function sum1 (nilai1, nilai2) {

    return nilai1+nilai2;
    
}



let tambah="";


if (tambah<100) {
    console.log(true);   
} else {
    console.log(false);

};


class Lingkaran {
    constructor(Lebar,tinggi,panjang){
    this.lebar=Lebar;
    this.tinggi=tinggi;
    this.panjang=panjang;
    }
}

const circle = new Lingkaran(10,10,10);

console.log(Lingkaran);

const stringLength= (str) => {
    let length = str.length;
    console.log("Lenght of the strings : ",length);
    return length
};

stringLength ("abcde");

const salam = (val) => "jancuk kamu anjing "+val;

console.log (salam("gede"));

const musisi = ["Drummer","Gitaris","Bassis","vokalis","Kabelist","tukangsound"];

const result = musisi.filter(word => word.length > 7);
// variable musisi di filter dan dicari object apa saya yang jumlah length lebih dari 7
// Parameter digunakan untuk membuat variable semu.
console.log(result);

const alatMusik = new Array('gitar','drum','bass');

console.log(alatMusik);


// cara console.log satu satu tanpa ngetik console.log berulang kali
const array1 = new Array('gitar','drum','bass');

for (const array2 of array1){
    console.log(array2);
};

// FUNGSI MAP , MEMBUAT NEWARRAY1 BARU BERDASARKAN ARRAY1+FUNGSI/CODE 
 const numbers = [1,2,3,4,5,6,7,8,9] ;

 const tripleNumbers = numbers.map(param1 => param1*3);
 console.log(tripleNumbers);


//  membuat <p></p> dari mapping sebuah array, jadi isi dari array tersebut masing masing akan diinput ke P
const myParagraf = ['Halo','Ya ada apa?','masak sih'];

// const myParagraf2 = myParagraf.map((param2) => <p>{param2}</p>);


// kondisi ketika sebuah array memiliki key dan value
const arrayPanjang = [
    {
        id:1,
        titel:'Topi Army',
        category:'Topi',
        price:1000000,
        img:'./images/topi.jpg'
    },
    {
        id:2,
        titel:'Topi Arm',
        category:'Top',
        price:100000,
        img:'./images/top.jpg'
    }
]

const arrayPanjang2 = arrayPanjang.map((param3)=>param3.id);

console.log(arrayPanjang2);

// CREATE VARIABLE FROM AN ARRAY

const angka = [2,8,9] ;
const [angka1,angka2,angka3]= angka;
console.log(angka1);
