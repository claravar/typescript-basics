

interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 250.25
}

const tablet: Product = {
    description: 'Ipad 2',
    price: 452.2
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): number[]{
//function taxCalculation({tax, products}: TaxCalculationOptions): number[]{
function taxCalculation(options: TaxCalculationOptions): [number, number]{
   
    const {tax, products} = options;

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({products: shoppingCart, tax})

console.log('Total', total);
console.log('Tax', taxTotal);

export{}