import { Product, taxCalculation, TaxCalculationOptions} from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Iphone',
        price: 725
    }, 
    {
        description: 'Samsung',
        price: 625
    }
];


const tax = 0.15;
const [total, taxTotal] = taxCalculation({products: shoppingCart, tax })

console.log('Total', total);
console.log('Tax', taxTotal);

export{}
