// Enhanced Product Data
const products = [
    {
        id: 1,
        name: "Noreva Exfoliac Foaming Gel",
        skinType: "Oily, Acne-Prone",
        price: 24.99,
        description: "Gentle foaming cleanser that removes impurities without drying the skin. Formulated with zinc to regulate sebum production.",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "cleansers",
        rating: 4.5,
        isNew: true,
        popularity: 8
    },
    {
        id: 2,
        name: "Noreva Trio White XP Cream",
        skinType: "All Skin Types",
        price: 32.50,
        description: "Brightening cream that reduces dark spots and evens out skin tone. Contains vitamin B3 and white lupin extract.",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "moisturizers",
        rating: 4.8,
        isBestseller: true,
        popularity: 9
    },
    {
        id: 3,
        name: "Noreva Sensidiane Soothing Serum",
        skinType: "Sensitive",
        price: 28.75,
        description: "Calming serum that reduces redness and strengthens the skin barrier. Perfect for reactive and intolerant skin.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "serums",
        rating: 4.7,
        popularity: 7
    },
    {
        id: 4,
        name: "Noreva Cicadiane Repair Cream",
        skinType: "Dry, Damaged",
        price: 29.99,
        description: "Repairing cream that accelerates skin recovery. Ideal for post-procedure care or very dry skin.",
        image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "moisturizers",
        rating: 4.6,
        isNew: true,
        popularity: 6
    },
    {
        id: 5,
        name: "Noreva Actipur Anti-Blemish Cream",
        skinType: "Acne-Prone",
        price: 26.25,
        description: "Targeted treatment for blemishes that reduces inflammation and prevents new breakouts. Non-drying formula.",
        image: "https://images.unsplash.com/photo-1556228579-15a6ddb05f0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "acne",
        rating: 4.4,
        popularity: 7
    },
    {
        id: 6,
        name: "Noreva Ecran Mat Multi-Protection SPF50",
        skinType: "Oily, Combination",
        price: 22.99,
        description: "Mattifying sunscreen that protects without leaving a greasy finish. Broad spectrum UVA/UVB protection.",
        image: "https://images.unsplash.com/photo-1556228578-1a61328ff8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "sunscreen",
        rating: 4.9,
        isBestseller: true,
        popularity: 9
    },
    {
        id: 7,
        name: "Noreva Sensidiane AR Cream",
        skinType: "Sensitive, Redness-Prone",
        price: 31.50,
        description: "Anti-redness cream that soothes and reduces visible redness. Strengthens capillary walls.",
        image: "https://images.unsplash.com/photo-1571781926683-d80c86a0a979?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "moisturizers",
        rating: 4.3,
        popularity: 5
    },
    {
        id: 8,
        name: "Noreva Exfoliac Global Action",
        skinType: "Acne-Prone",
        price: 27.99,
        description: "Complete acne treatment that regulates sebum, exfoliates, and prevents breakouts. All-in-one solution.",
        image: "https://images.unsplash.com/photo-1556228578-9d725e0c1e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "acne",
        rating: 4.7,
        isBestseller: true,
        popularity: 8
    },
    {
        id: 9,
        name: "Noreva Hydra-Nutrition Cream",
        skinType: "Dry, Very Dry",
        price: 34.99,
        description: "Intensely hydrating cream with shea butter and hyaluronic acid for 24-hour moisture retention.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "moisturizers",
        rating: 4.5,
        popularity: 6
    },
    {
        id: 10,
        name: "Noreva Sensidiane Eye Contour",
        skinType: "Sensitive",
        price: 30.25,
        description: "Gentle eye cream that reduces puffiness and dark circles while soothing delicate eye area.",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "moisturizers",
        rating: 4.6,
        popularity: 7
    }
];

// Translation Data
const translations = {
    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        heroTitle: "Al Dwalia Drug Store",
        heroText: "Premium pharmaceutical products and skincare solutions for all your health needs.",
        shopNow: "Shop Now",
        learnMore: "Learn More",
        ourProducts: "Our Products",
        allSkinTypes: "All Skin Types",
        oily: "Oily",
        dry: "Dry",
        combination: "Combination",
        sensitive: "Sensitive",
        acneProne: "Acne-Prone",
        normal: "Normal",
        allPrices: "All Prices",
        under25: "Under $25",
        "25to30": "$25 - $30",
        "30to35": "$30 - $35",
        over35: "Over $35",
        default: "Default",
        mostPopular: "Most Popular",
        highestRating: "Highest Rating",
        newest: "Newest",
        priceLowHigh: "Price: Low to High",
        priceHighLow: "Price: High to Low",
        allProducts: "All Products",
        cleansers: "Cleansers",
        moisturizers: "Moisturizers",
        serums: "Serums",
        sunscreen: "Sunscreen",
        acneSolutions: "Acne Solutions",
        aboutUs: "About Us",
        aboutText1: "Al Dwalia Drug Store has been serving the community with premium pharmaceutical products and skincare solutions for over 20 years.",
        aboutText2: "Our team of experienced pharmacists and skincare specialists are dedicated to providing personalized care and expert advice.",
        aboutText3: "We carry only the highest quality products from trusted brands to ensure your health and wellness.",
        contactUs: "Contact Us",
        address: "123 Health St, Medical District, City",
        phone: "+123 456 7890",
        hours: "Mon-Sat: 8:00 AM - 10:00 PM | Sun: 10:00 AM - 8:00 PM",
        yourCart: "Your Cart",
        emptyCartTitle: "Your cart is empty",
        emptyCartText: "Looks like you haven't added anything to your cart yet",
        continueShopping: "Continue Shopping",
        total: "Total",
        checkout: "Checkout",
        completeOrder: "Complete Your Order",
        fillDetails: "Please fill in your details to complete your purchase",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        city: "City",
        selectCity: "Select City",
        ramallah: "Ramallah",
        nablus: "Nablus",
        jerusalem: "Jerusalem",
        bethlehem: "Bethlehem",
        hebron: "Hebron",
        address: "Address",
        selectAddress: "Select Address",
        address1: "123 Main St",
        address2: "456 Oak Ave",
        address3: "789 Pine Rd",
        address4: "321 Elm Blvd",
        submitOrder: "Submit Order",
        confirmOrder: "Confirm Your Order",
        confirmOrderText: "Are you sure you want to proceed with this order?",
        yes: "Yes",
        no: "No",
        orderSuccess: "Order Submitted Successfully!",
        orderSuccessText: "Our customer support will call you in the next 24 hours to confirm your order.",
        backToShopping: "Back to Shopping",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2023 Al Dwalia Drug Store. All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",
        heroTitle: "صيدلية الدوالي",
        heroText: "منتجات صيدلانية وحلول للعناية بالبشرة لجميع احتياجاتك الصحية.",
        shopNow: "تسوق الآن",
        learnMore: "تعرف أكثر",
        ourProducts: "منتجاتنا",
        allSkinTypes: "جميع أنواع البشرة",
        oily: "دهنية",
        dry: "جافة",
        combination: "مختلطة",
        sensitive: "حساسة",
        acneProne: "عرضة لحب الشباب",
        normal: "عادية",
        allPrices: "جميع الأسعار",
        under25: "أقل من $25",
        "25to30": "$25 - $30",
        "30to35": "$30 - $35",
        over35: "أكثر من $35",
        default: "افتراضي",
        mostPopular: "الأكثر شعبية",
        highestRating: "الأعلى تقييماً",
        newest: "الأحدث",
        priceLowHigh: "السعر: من الأقل للأعلى",
        priceHighLow: "السعر: من الأعلى للأقل",
        allProducts: "جميع المنتجات",
        cleansers: "منظفات",
        moisturizers: "مرطبات",
        serums: "سيروم",
        sunscreen: "واقي شمس",
        acneSolutions: "علاجات حب الشباب",
        aboutUs: "من نحن",
        aboutText1: "تقدم صيدلية الدوالي منتجات صيدلانية وحلول للعناية بالبشرة لأكثر من 20 عاماً.",
        aboutText2: "فريقنا من الصيادلة ذوي الخبرة ومتخصصي العناية بالبشرة مكرسون لتقديم رعاية شخصية ونصائح خبراء.",
        aboutText3: "نحمل فقط منتجات عالية الجودة من علامات تجارية موثوقة لضمان صحتك ورفاهيتك.",
        contactUs: "اتصل بنا",
        address: "123 شارع الصحة، المنطقة الطبية، المدينة",
        phone: "+123 456 7890",
        hours: "السبت-الخميس: 8:00 صباحاً - 10:00 مساءً | الجمعة: 10:00 صباحاً - 8:00 مساءً",
        yourCart: "سلة التسوق",
        emptyCartTitle: "سلة التسوق فارغة",
        emptyCartText: "يبدو أنك لم تقم بإضافة أي منتجات إلى سلة التسوق بعد",
        continueShopping: "مواصلة التسوق",
        total: "المجموع",
        checkout: "إنهاء الطلب",
        completeOrder: "أكمل طلبك",
        fillDetails: "يرجى ملء بياناتك لإكمال عملية الشراء",
        fullName: "الاسم الكامل",
        phoneNumber: "رقم الهاتف",
        city: "المدينة",
        selectCity: "اختر المدينة",
        ramallah: "رام الله",
        nablus: "نابلس",
        jerusalem: "القدس",
        bethlehem: "بيت لحم",
        hebron: "الخليل",
        address: "العنوان",
        selectAddress: "اختر العنوان",
        address1: "123 الشارع الرئيسي",
        address2: "456 جادة البلوط",
        address3: "789 طريق الصنوبر",
        address4: "321 شارع الدردار",
        submitOrder: "إرسال الطلب",
        confirmOrder: "تأكيد الطلب",
        confirmOrderText: "هل أنت متأكد أنك تريد المتابعة مع هذا الطلب؟",
        yes: "نعم",
        no: "لا",
        orderSuccess: "تم إرسال الطلب بنجاح!",
        orderSuccessText: "سيتصل بك فريق خدمة العملاء خلال الـ 24 ساعة القادمة لتأكيد طلبك.",
        backToShopping: "العودة للتسوق",
        privacyPolicy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        copyright: "© 2023 صيدلية الدوالي. جميع الحقوق محفوظة."
    }
};

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const overlay = document.getElementById('overlay');
const checkoutModal = document.getElementById('checkoutModal');
const confirmationModal = document.getElementById('confirmationModal');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const cancelOrderBtn = document.getElementById('cancelOrderBtn');
const successModal = document.getElementById('successModal');
const orderForm = document.getElementById('orderForm');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const categoryBtns = document.querySelectorAll('.category-btn');
const errorContainer = document.getElementById('errorContainer');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const languageFlag = document.getElementById('languageFlag');

// Filter Elements
const skinTypeFilter = document.getElementById('skinTypeFilter');
const priceFilter = document.getElementById('priceFilter');
const sortBy = document.getElementById('sortBy');

// Cart State
let cart = [];
let currentLanguage = 'en';
let darkMode = false;

// Initialize the app
function init() {
    renderProducts(products);
    setupEventListeners();
    updateCartCount();
    applyTheme();
    applyLanguage();
}

// Render products to the page with animations
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--light-text);">
                <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                <h3 data-i18n="noProducts">No products found</h3>
                <p data-i18n="adjustFilters">Try adjusting your filters or search criteria</p>
            </div>
        `;
        translatePage();
        return;
    }
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.setProperty('--delay', index);
        
        // Add badges
        let badges = '';
        if (product.isNew) {
            badges += `<span class="product-badge" style="background-color: var(--primary);" data-i18n="new">New</span>`;
        }
        if (product.isBestseller) {
            badges += `<span class="product-badge" style="background-color: var(--accent); left: ${product.isNew ? '80px' : '12px'}" data-i18n="bestseller">Bestseller</span>`;
        }
        
        productCard.innerHTML = `
            ${badges}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-skin-type">${product.skinType}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="text" class="quantity-input" value="1" readonly>
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> <span data-i18n="addToCart">Add</span>
                    </button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    translatePage();
}

// Set up event listeners
function setupEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', closeAllModals);
    continueShoppingBtn.addEventListener('click', toggleCart);
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Product interactions (delegated)
    productsContainer.addEventListener('click', handleProductClick);
    
    // Checkout flow
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showError(currentLanguage === 'en' ? "Your cart is empty. Please add items before checkout." : "سلة التسوق فارغة. يرجى إضافة منتجات قبل إنهاء الطلب.");
            return;
        }
        openCheckoutModal();
    });
    
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });
    
    confirmOrderBtn.addEventListener('click', submitOrder);
    cancelOrderBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('open');
    });
    
    closeSuccessModal.addEventListener('click', closeAllModals);
    
    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });
    
    // Filter event listeners
    skinTypeFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    languageToggle.addEventListener('click', toggleLanguage);
}

// Handle product card clicks
function handleProductClick(e) {
    const target = e.target;
    const btn = target.closest('.quantity-btn') || target.closest('.add-to-cart');
    if (!btn) return;
    
    const productId = parseInt(btn.dataset.id);
    const product = products.find(p => p.id === productId);
    
    // Add to cart button
    if (btn.classList.contains('add-to-cart')) {
        const quantityInput = btn.parentElement.querySelector('.quantity-input');
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
        quantityInput.value = '1'; // Reset quantity
        showFeedback('success', currentLanguage === 'en' ? 
            `${product.name} added to cart!` : 
            `تم إضافة ${product.name} إلى السلة!`);
    }
    
    // Quantity buttons
    if (btn.classList.contains('quantity-btn')) {
        const input = btn.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);
        
        if (btn.classList.contains('minus') && value > 1) {
            input.value = value - 1;
        } else if (btn.classList.contains('plus')) {
            input.value = value + 1;
        }
    }
}

// Apply all active filters
function applyFilters() {
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const skinType = skinTypeFilter.value;
    const priceRange = priceFilter.value;
    const sortOption = sortBy.value;
    
    let filteredProducts = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
    }
    
    // Skin type filter
    if (skinType !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.skinType.includes(skinType));
    }
    
    // Price range filter
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (priceRange.endsWith('+')) {
            filteredProducts = filteredProducts.filter(p => p.price >= min);
        } else {
            filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
        }
    }
    
    // Sorting
    switch (sortOption) {
        case 'popular':
            filteredProducts.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        default:
            // Default sorting (by ID or whatever)
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts(filteredProducts);
}

// Cart functions
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showFeedback('info', currentLanguage === 'en' ? 
        'Item removed from cart' : 
        'تمت إزالة المنتج من السلة');
}

function updateCart() {
    renderCartItems();
    updateCartCount();
    updateCartTotal();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <h4 data-i18n="emptyCartTitle">Your cart is empty</h4>
                <p data-i18n="emptyCartText">Looks like you haven't added anything to your cart yet</p>
                <button class="btn" id="continueShoppingBtn">
                    <i class="fas fa-arrow-left"></i> <span data-i18n="continueShopping">Continue Shopping</span>
                </button>
            </div>
        `;
        // Re-attach event listener to the new button
        document.getElementById('continueShoppingBtn').addEventListener('click', toggleCart);
        translatePage();
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity-control">
                        <button class="cart-item-quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="cart-item-quantity-input" value="${item.quantity}" readonly>
                        <button class="cart-item-quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}">
                        <i class="fas fa-trash-alt"></i> <span data-i18n="remove">Remove</span>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to remove buttons and quantity controls
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            removeFromCart(productId);
        });
    });
    
    document.querySelectorAll('.cart-item-quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === productId);
            const input = btn.parentElement.querySelector('.cart-item-quantity-input');
            
            if (btn.classList.contains('minus')) {
                if (item.quantity > 1) {
                    item.quantity--;
                    input.value = item.quantity;
                    updateCart();
                } else {
                    removeFromCart(productId);
                }
            } else if (btn.classList.contains('plus')) {
                item.quantity++;
                input.value = item.quantity;
                updateCart();
            }
        });
    });
    
    translatePage();
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Modal functions
function toggleCart() {
    cartModal.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('open') ? 'hidden' : '';
    
    // Close mobile menu if open
    navLinks.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showError(currentLanguage === 'en' ? 
            "Your cart is empty. Please add items before checkout." : 
            "سلة التسوق فارغة. يرجى إضافة منتجات قبل إنهاء الطلب.");
        return;
    }
    
    closeAllModals();
    checkoutModal.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    cartModal.classList.remove('open');
    checkoutModal.classList.remove('open');
    confirmationModal.classList.remove('open');
    successModal.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Also close mobile menu
    navLinks.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
}

// Form validation
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    
    let isValid = true;
    errorContainer.innerHTML = '';
    errorContainer.style.display = 'none';
    
    if (!fullName) {
        showError(currentLanguage === 'en' ? 
            "Please enter your full name" : 
            "يرجى إدخال الاسم الكامل", 'fullName');
        isValid = false;
    }
    
    if (!phone) {
        showError(currentLanguage === 'en' ? 
            "Please enter your phone number" : 
            "يرجى إدخال رقم الهاتف", 'phone');
        isValid = false;
    } else if (!/^[\d\s\-()+]+$/.test(phone)) {
        showError(currentLanguage === 'en' ? 
            "Please enter a valid phone number" : 
            "يرجى إدخال رقم هاتف صحيح", 'phone');
        isValid = false;
    }
    
    if (!city) {
        showError(currentLanguage === 'en' ? 
            "Please select your city" : 
            "يرجى اختيار المدينة", 'city');
        isValid = false;
    }
    
    if (!address) {
        showError(currentLanguage === 'en' ? 
            "Please select your address" : 
            "يرجى اختيار العنوان", 'address');
        isValid = false;
    }
    
    if (isValid) {
        checkoutModal.classList.remove('open');
        confirmationModal.classList.add('open');
    }
}

// Form submission
function submitOrder() {
    // In a real app, you would send this data to your backend
    const formData = {
        name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    console.log('Order submitted:', formData);
    
    // Show success message
    confirmationModal.classList.remove('open');
    successModal.classList.add('open');
    
    // Clear cart
    cart = [];
    updateCart();
    
    // Reset form
    orderForm.reset();
}

// Show error message
function showError(message, fieldId = null) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    
    errorContainer.appendChild(errorElement);
    errorContainer.style.display = 'block';
    
    if (fieldId) {
        const field = document.getElementById(fieldId);
        field.focus();
        field.style.borderColor = 'var(--error)';
        setTimeout(() => {
            field.style.borderColor = '';
        }, 2000);
    }
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorElement.style.opacity = '0';
        setTimeout(() => {
            errorElement.remove();
            if (errorContainer.children.length === 0) {
                errorContainer.style.display = 'none';
            }
        }, 300);
    }, 5000);
}

// Show feedback message (success/error/info)
function showFeedback(type, message) {
    const types = {
        success: { icon: 'check-circle', color: 'var(--success)' },
        error: { icon: 'exclamation-circle', color: 'var(--error)' },
        info: { icon: 'info-circle', color: 'var(--primary)' },
        warning: { icon: 'exclamation-triangle', color: 'var(--warning)' }
    };
    
    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    feedback.style.position = 'fixed';
    feedback.style.bottom = '20px';
    feedback.style.right = '20px';
    feedback.style.backgroundColor = 'var(--white)';
    feedback.style.color = types[type].color;
    feedback.style.padding = '1rem 1.5rem';
    feedback.style.borderRadius = '8px';
    feedback.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    feedback.style.zIndex = '1002';
    feedback.style.display = 'flex';
    feedback.style.alignItems = 'center';
    feedback.style.gap = '0.8rem';
    feedback.style.transform = 'translateY(30px)';
    feedback.style.opacity = '0';
    feedback.style.transition = 'all 0.3s ease';
    feedback.innerHTML = `
        <i class="fas fa-${types[type].icon}" style="font-size: 1.2rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.transform = 'translateY(0)';
        feedback.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        feedback.style.transform = 'translateY(-30px)';
        feedback.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Theme functions
function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyTheme();
}

function applyTheme() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage();
}

function applyLanguage() {
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
        languageFlag.src = 'https://flagcdn.com/w20/ps.png';
        languageFlag.alt = 'Palestine';
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
        languageFlag.src = 'https://flagcdn.com/w20/gb.png';
        languageFlag.alt = 'English';
    }
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Load saved preferences
function loadPreferences() {
    // Load theme preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
        darkMode = savedDarkMode === 'true';
    } else {
        // Default to system preference
        darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Load language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
}

// Initialize the app
loadPreferences();
init();