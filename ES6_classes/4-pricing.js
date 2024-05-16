/* eslint-disable */
import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        if (typeof currency !== 'Currency') {
            throw new TypeError('Currency must be a currency');
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }
    set amount(amount){
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = amount;
    }

    set currency(currency){
        if (typeof currency !== 'currency') {
            throw new TypeError('Currency must be a currency');
        }
        this._currency = currency;
    }
    
    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }

    static convertPrice(amount, conversionRates){
        return amount * conversionRates;
    }
}