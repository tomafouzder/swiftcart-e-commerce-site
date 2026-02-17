const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayFilterProducts(data))
}

const loadProductsCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => console.log(data))
}

const displayFilterProducts = (products) => {
    const cartFilter = document.getElementById('cart-filter');
    cartFilter.innerHTML = "";

    const topRated = products
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3);

    for (let product of topRated) {
        const cartDiv = document.createElement("div");
        cartDiv.innerHTML = `
         <div class="bg-white rounded-xl shadow-md overflow-hidden">

            <!-- Product Image -->
            <div class="bg-gray-100 flex justify-center p-6">
                <img src=${product.image} alt="product image" class="h-40 object-contain">
            </div>

            <!-- Card Content -->
            <div class="p-4 space-y-2">

                <!-- Category Badge -->
                <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                   ${product.category}
                </span>

                <!-- Rating -->
                <div class="flex items-center justify-between text-sm text-gray-500">
                    <h2 class="font-medium text-gray-800 truncate w-40">
                         ${product.title}
                    </h2>
                    <div class="flex items-center gap-1">
                        <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                        <span>${product.rating.rate} (${product.rating.count})</span>
                    </div>
                </div>

                <!-- Price -->
                <p class="text-lg font-semibold text-gray-900">
                    $${product.price}
                </p>

                <!-- Buttons -->
                <div class="flex gap-2 pt-2">
                    <button
                        class="flex-1 border border-gray-300 rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                        <i class="fa-regular fa-eye"></i>
                        Details
                    </button>

                    <button
                        class="flex-1 bg-indigo-600 text-white rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add
                    </button>
                </div>

            </div>
        </div>
        `;

        cartFilter.append(cartDiv);
    }
}

loadAllProducts();

const displayProductsCategory = (categorize) => {
    const productsCategory = document.getElementById('products-category');
    productsCategory.innerHTML = "";

    for (let category of categorize) {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-outline btn-primary">Primary</button>
        `


        productsCategory.append(categoryDiv);
    }
}
loadProductsCategory();








// login button functionality
document.getElementById('btn-products')
    .addEventListener('click', function (e) {
        e.preventDefault()
        window.location.href = "./products.html"
    })