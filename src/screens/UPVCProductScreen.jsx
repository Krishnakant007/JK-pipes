

const UPVCProductScreen = () => {
    const products = [
        {
            name: "JK UPVC Pipe",
            price: "₹ 55/ Meter",
            brand: "JK",
            material: "UPVC",
            size: "3 Inch",
            length: "6 m",
            thickness: "3 mm",
            jointType: "Sol fit",
            color: "White",
            country: "Made in India",
            imageUrl: "/images/jk_upvc_pipe.webp", // Add the actual path to your image
            description: "Durable and high-quality UPVC pipe designed for various plumbing applications.",
        },
        // Add more products as needed...
    ];

    return (
        <div className="py-12 px-8 bg-slate-200 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">UPVC Pipes</h2>
            <p className="text-center mb-12 text-lg text-gray-600">Explore our range of UPVC pipes:</p>

            <div className="grid gap-8 max-w-4xl mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
                        <div className="w-full h-48 flex items-center justify-center mb-4 border-b pb-4">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain rounded-lg" 
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>

                        <div className="border-t pt-4 mt-4">
                            <table className="w-full text-left text-gray-700">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Brand</td>
                                        <td className="py-2">{product.brand}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Material</td>
                                        <td className="py-2">{product.material}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Size/Diameter</td>
                                        <td className="py-2">{product.size}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Length</td>
                                        <td className="py-2">{product.length}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Thickness</td>
                                        <td className="py-2">{product.thickness}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Pipe Joint Type</td>
                                        <td className="py-2">{product.jointType}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Color</td>
                                        <td className="py-2">{product.color}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Country of Origin</td>
                                        <td className="py-2">{product.country}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Description Section */}
                        <div className="pt-4 text-gray-700 text-lg">
                            <p><strong>Description:</strong> {product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UPVCProductScreen;
