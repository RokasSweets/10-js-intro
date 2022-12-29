class Shop {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.products = [];
    }

    intro() {
        const res = `Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`
        console.log(res);
        return res;
    }

    formatedPrice(price) {
        const formatedPrice = (price / 100).toFixed(2);
        return `${formatedPrice} ${this.currency}`
    }

    formatedName(name) {
        const formatedName = name[0].toUpperCase() + name.slice(1);
        return `${formatedName}`
    }

    addItem(product, price) {
        this.products.push({
            name: product,
            price: price,
        });

        const res = `"${this.name}" sells ${product} for ${this.formatedPrice(price)} now!`;

        console.log(res);
        return res
    }

    items() {
        const title = `Items for sale at "${this.name}"`;
        const line = `====================`;
        let list = ``;
        let i = 0;

        for(const { name, price } of this.products){
            list += `${++i}) ${this.formatedName(name)} - ${this.formatedPrice(price)};\n`;
        }
        const res = `${title}\n${line}\n${list}${line}`;
        //`Items for sale at "Meskiuko kioskas":
       // ====================
       // 1) Obuolys - 1.30 EUR;
       // 2) Morka - 0.65 EUR;
       // 3) Arbata - 0.95 EUR;
      //  4) Bulves - 1.35 EUR;
      //  5) Cepelinai - 1.95 EUR;
      //  ====================`

        console.log(res);
        return res;
    }
 }

export { Shop }