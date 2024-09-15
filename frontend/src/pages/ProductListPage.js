const products = [
    {
        name: "Nike Slim Shirt",
        category: "Shirts",
        image: "/images/p1.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "High-quality product",
    },
    {
        name: "Adidas Fit Shirt",
        category: "Shirts",
        image: "/images/p2.jpg",
        price: 100,
        countInStock: 20,
        brand: "Adidas",
        rating: 4.0,
        numReviews: 10,
        description: "High-quality product",
    },
    {
        name: "Lacoste Free Shirt",
        category: "Shirts",
        image: "/images/p3.jpg",
        price: 220,
        countInStock: 0,
        brand: "Lacoste",
        rating: 4.8,
        numReviews: 17,
        description: "High-quality product",
    },
    {
        name: "Nike Slim Pant",
        category: "Pants",
        image: "/images/p4.jpg",
        price: 78,
        countInStock: 15,
        brand: "Nike",
        rating: 4.5,
        numReviews: 14,
        description: "High-quality product",
    },
    {
        name: "Puma Slim Pant",
        category: "Pants",
        image: "/images/p5.jpg",
        price: 65,
        countInStock: 5,
        brand: "Puma",
        rating: 4.5,
        numReviews: 10,
        description: "High-quality product",
    },
    {
        name: "Adidas Fit Pant",
        category: "Pants",
        image: "/images/p6.jpg",
        price: 139,
        countInStock: 12,
        brand: "Adidas",
        rating: 4.5,
        numReviews: 15,
        description: "High-quality product",
    },
];

const ProductListPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.name}
                        className="border rounded-lg overflow-hidden shadow-lg bg-white"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-lg font-semibold">₹{product.price}</span>
                                <span
                                    className={`text-sm px-2 py-1 rounded ${product.countInStock > 0
                                            ? "bg-green-200 text-green-800"
                                            : "bg-red-200 text-red-800"
                                        }`}
                                >
                                    {product.countInStock > 0
                                        ? "In Stock"
                                        : "Out of Stock"}
                                </span>
                            </div>
                            <div className="flex items-center mt-3">
                                <span className="text-yellow-500">
                                    {"★".repeat(Math.floor(product.rating))}
                                    {"☆".repeat(5 - Math.floor(product.rating))}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">
                                    ({product.numReviews} reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
