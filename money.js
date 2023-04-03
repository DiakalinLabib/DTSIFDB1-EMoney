class Money {
    constructor(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }

    convert(amount, isFormatted = true) {
        let result = amount * this.amount;

        // Jika argumennya bernilai true (ingin diformat)
        if (isFormatted) {
            return this.format(result);
        } else {
            return result;
        }
    }
    format(amount) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: this.to }).format(amount);
    }
}

export default Money;