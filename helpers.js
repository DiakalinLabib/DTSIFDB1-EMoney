import moneys from "./moneyData.js";

let convert = (e) => {
    e.preventDefault();

    // input => $
        let input = document.getElementById('amount').value;
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;

        if (input == '') {
            document.getElementById('result').innerHTML = 'Nominal belum ditentukan';
            document.getElementById('amount').focus();
            return 0;
        }
    
    // process
        // Define callback function untuk mencari data money sesuai dengan input user
        let findCurrency = (data) => {
            return data.from == from && data.to == to;
        };
        // Cari data money dengan menggunakan callback yang sudah dibuat
        let money = moneys.find(findCurrency);

        if (money == null) {
            return document.getElementById('result').innerHTML = 'Tidak ada data konversi';
        }

        // Lakukan konversi dengan data money yang telah didapat
        let output = money.convert(input);
    
    // output => Rp
        document.getElementById('result').innerHTML = output;
};

let buildMoneyList = (moneys, targetElement) => {
    document.getElementById(targetElement).innerHTML = "";

    moneys.forEach(money => {
        // <option></option>
        let element = document.createElement('option');
        // <option value="usd"></option>
        element.value = targetElement == 'from' ? money.from : money.to;
        // USD
        let text = document.createTextNode((targetElement == 'from' ? money.from : money.to).toUpperCase());
        // <option value="usd">USD</option>
        element.appendChild(text);
    
        // <option value="usd" selected>USD</option>
    
        // Tambahkan tag tersebut ke select tag
        document.getElementById(targetElement).appendChild(element);
    })
}

let buildMoneyListTo = () => {
    let moneysFilter = moneys.filter(money => 
        money.to !== document.getElementById('from').value
        &&
        money.from === document.getElementById('from').value
    );
    
    buildMoneyList(moneysFilter, 'to')
}

let prepareMoneyFrom = () => {
    let moneyFrom = [];
    let newMoneyFrom = [];

    moneys.forEach(money => {
        if (!moneyFrom.includes(money.from)) {
            moneyFrom.push(money.from);
            newMoneyFrom.push(money);
        }
    })

    return newMoneyFrom
}

export {
    convert, 
    buildMoneyList, 
    buildMoneyListTo, 
    prepareMoneyFrom
};