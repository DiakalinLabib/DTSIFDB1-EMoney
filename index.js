import { 
    convert,
    buildMoneyList,
    buildMoneyListTo,
    prepareMoneyFrom
} from "./helpers.js";

console.clear();
let log = console.log;

buildMoneyList(prepareMoneyFrom(), 'from')
buildMoneyListTo()

document.getElementById('info').addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = `https://www.bi.go.id/id/publikasi/kajian/Pages/Indeks%20Saham%20Perbankan.aspx`;
})

document.getElementById('convert').addEventListener('click', convert);

document.getElementById('from').addEventListener('change', () => {
    buildMoneyListTo()
});

document.getElementById('swap').addEventListener('click', (e) => {
    e.preventDefault();

    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let fromVal = from.value;
    let toVal = to.value;

    from.value = toVal;
    buildMoneyListTo()
    to.value = fromVal;
});

// √ button clear atau hapus
// button angka 0-9 nya mas
// grafik konversi mata uang
// √ tombol swap untuk mengkorversi ke mata uang sebaliknya
// √ mungkin tambah konversi emas ke mata uang
// √ tambah link ke info saham
// √ Update from dan to secara dinamis
// √ update to menyesuaikan dengan from