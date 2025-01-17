
function updateProductInfo(product) 
{
    const { id, name } = product;
    return {
        ...{ id, name },
        discount: 50,
        inStock: true
    };
}

const product = { id: 1, name: 'Iphone', price: 50000, category: 'Electronics' };
const updatedProduct = updateProductInfo(product);
console.log(updatedProduct);
