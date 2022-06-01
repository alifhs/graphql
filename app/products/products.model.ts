export class Product {
    public id: Number = 0;
    public name: String = '';
    public description: String = '';
    public price: Number = 0;

    constructor(productId: Number,
                productName: String,
                productDescription: String,
                price: Number) {
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
        this.price = price;
    }

}
