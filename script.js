// Enhanced Product Data
const products = [
    {
        id: 1,
        name: "Noreva Exfoliac Foaming Gel",
        skinType: "دهنية",
        price: 24.99,
        description: "غسول رغوي لطيف يزيل الشوائب دون أن يجفف البشرة. يحتوي على الزنك لتنظيم إفراز الدهون.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Exfoliac_GelMoussantIntensif-200ml_Carroussel2_1512x1340.jpg",
        category: "Cleansers",
        rating: 4.5,
        isNew: true,
        popularity: 8
    },
    {
        id: 2,
        name: "Noreva Trio White XP Cream",
        skinType: "جميع أنواع البشرة",
        price: 32.50,
        description: "كريم تفتيح يقلل البقع الداكنة ويوحد لون البشرة. يحتوي على فيتامين B3 ومستخلص اللوبين الأبيض.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/10/Noreva_Produit_TrioWhite_ContourDesYeux_Carroussel1_1512x1340.jpg",
        category: "Moisturizers",
        rating: 4.8,
        isBestseller: true,
        popularity: 9
    },
    {
        id: 3,
        name: "Noreva Sensidiane Soothing Serum",
        skinType: "حساسة",
        price: 28.75,
        description: "سيروم مهدئ يقلل الاحمرار ويقوي حاجز البشرة. مثالي للبشرة المتفاعلة والحساسة جداً.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Exfoliac_GelMoussantIntensif-200ml_Carroussel2_1512x1340.jpg",
        category: "Serums",
        rating: 4.7,
        popularity: 7
    },
    {
        id: 4,
        name: "Noreva Cicadiane Repair Cream",
        skinType: "جافة، متضررة",
        price: 29.99,
        description: "كريم إصلاحي يسرّع تعافي البشرة. مثالي للعناية بعد الإجراءات أو للبشرة الجافة جداً.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Cicadiane_Crème_Réparatrice_Carroussel2_1512x1340.jpg",
        category: "Moisturizers",
        rating: 4.6,
        isNew: true,
        popularity: 6
    },
    {
        id: 5,
        name: "Noreva Actipur Anti-Blemish Cream",
        skinType: "معرضة لحب الشباب",
        price: 26.25,
        description: "علاج موضعي للحبوب يقلل الالتهاب ويمنع ظهورها مجدداً. تركيبة غير مجففة.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Actipur_Crème_Anti-Imperfections_Carroussel2_1512x1340.jpg",
        category: "Acne",
        rating: 4.4,
        popularity: 7
    },
    {
        id: 6,
        name: "Noreva Ecran Mat Multi-Protection SPF50",
        skinType: "دهنية، مختلطة",
        price: 22.99,
        description: "واقي شمس بتركيبة مطفية يحمي من الشمس دون أن يترك طبقة دهنية. حماية واسعة ضد UVA/UVB.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Ecran_Mat_Multi-Protection_SPF50_Carroussel2_1512x1340.jpg",
        category: "Sunscreen",
        rating: 4.9,
        isBestseller: true,
        popularity: 9
    },
    {
        id: 7,
        name: "Noreva Sensidiane AR Cream",
        skinType: "حساسة، معرضة للاحمرار",
        price: 31.50,
        description: "كريم مضاد للاحمرار يهدئ البشرة ويقلل الاحمرار الظاهر. يقوي جدران الشعيرات الدموية.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Sensidiane_Crème_AR_Carroussel1_1512x1340.jpg",
        category: "Moisturizers",
        rating: 4.3,
        popularity: 5
    },
    {
        id: 8,
        name: "Noreva Exfoliac Global Action",
        skinType: "معرضة لحب الشباب",
        price: 27.99,
        description: "علاج شامل لحب الشباب ينظم الدهون، يقشر ويمنع ظهور الحبوب. حل متكامل.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Exfoliac_ActionGlobale_Carroussel2_1512x1340.jpg",
        category: "Acne",
        rating: 4.7,
        isBestseller: true,
        popularity: 8
    },
    {
        id: 9,
        name: "Noreva Hydra-Nutrition Cream",
        skinType: "جافة، شديدة الجفاف",
        price: 34.99,
        description: "كريم ترطيب مكثف بزبدة الشيا وحمض الهيالورونيك لترطيب يدوم 24 ساعة.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Hydra-Nutrition_Crème_Carroussel2_1512x1340.jpg",
        category: "Moisturizers",
        rating: 4.5,
        popularity: 6
    },
    {
        id: 10,
        name: "Noreva Sensidiane Eye Contour",
        skinType: "حساسة",
        price: 30.25,
        description: "كريم عيون لطيف يقلل الانتفاخ والهالات السوداء مع تهدئة المنطقة الحساسة حول العين.",
        image: "https://noreva-laboratoires.com/wp-content/uploads/2022/11/Noreva_Produit_Sensidiane_Crème_ContourdesYeux_Carroussel2_1512x1340.jpg",
        category: "Moisturizers",
        rating: 4.6,
        popularity: 7
    },
    {
        id: 11,
        name: "Noreva Actipur Anti-Blemish Gel",
        skinType: "معرضة لحب الشباب",
        price: 23.50,
        description: "جيل موضعي لعلاج حب الشباب، يقلل الالتهابات ويمنع ظهور الحبوب الجديدة.",
        image: "https://images.unsplash.com/photo-1567636582-c7380de4f5f3?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MTl8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Acne",
        rating: 4.3,
        popularity: 5
    },
    {
        id: 12,
        name: "Noreva Trio White Corrector Serum",
        skinType: "جميع أنواع البشرة",
        price: 36.99,
        description: "سيروم لتوحيد لون البشرة وتقليل التصبغات الداكنة.",
        image: "https://images.unsplash.com/photo-1587614467240-2a94650b267f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MXx8c3VubmVyaWxhdGV8ZW58MHx8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Serums",
        rating: 4.7,
        popularity: 7
    },
    {
        id: 13,
        name: "Noreva Ecran High Protection SPF50+",
        skinType: "دهنية، مختلطة",
        price: 39.99,
        description: "واقي شمس للوجه والبشرة الحساسة بتركيبة حماية فائقة ضد الأشعة الضارة.",
        image: "https://images.unsplash.com/photo-1573002590980-80a50ec0f12a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MjZ8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Sunscreen",
        rating: 4.9,
        isBestseller: false,
        popularity: 9
    },
    {
        id: 14,
        name: "Noreva Hydra-Nutrition Mask",
        skinType: "جافة، شديدة الجفاف",
        price: 42.99,
        description: "قناع ترطيب مكثف للبشرة الجافة جداً مع خلاصة زبدة الشيا.",
        image: "https://images.unsplash.com/photo-1604631078088-fdbf72f7a0a1?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MTR8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Moisturizers",
        rating: 4.8,
        popularity: 8
    },
    {
        id: 15,
        name: "Noreva Exfoliac Daily Scrub",
        skinType: "دهنية، معرضة لحب الشباب",
        price: 27.50,
        description: "مقشر يومي للبشرة الدهنية والمعرضة لحب الشباب. يقشر ويزيل الشوائب بفعالية.",
        image: "https://images.unsplash.com/photo-1605046682251-2b5fa6b4b2f0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MjJ8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Cleansers",
        rating: 4.6,
        popularity: 7
    },
    {
        id: 16,
        name: "Noreva Sun Screen Gel SPF30",
        skinType: "جميع أنواع البشرة",
        price: 25.99,
        description: "جل واقي من الشمس يحمي البشرة من الأشعة الضارة ويحافظ على النعومة.",
        image: "https://images.unsplash.com/photo-1605243704677-fdd2e1e4377d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MjV8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Sunscreen",
        rating: 4.7,
        popularity: 6
    },
    {
        id: 17,
        name: "Noreva Sensidiane Eye Care Gel",
        skinType: "حساسة",
        price: 28.99,
        description: "جيل مهدئ للعين يقلل من الانتفاخ والهالات السوداء حول العين.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8MjN8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Moisturizers",
        rating: 4.6,
        popularity: 7
    },
    {
        id: 18,
        name: "Noreva Exfoliac Gel",
        skinType: "دهنية، معرضة لحب الشباب",
        price: 22.50,
        description: "جيل منظف يزيل الشوائب والدهون الزائدة ويمنع ظهور الحبوب.",
        image: "https://images.unsplash.com/photo-1573319829203-ec953b195ec9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2MnwwfDF8c2VhY2h8Mjl8fGJlYXV0eXxlbnwwfDF8fHxlbi1VdW5ndWxhdHxlbnww&ixlib=rb-1.2.1&q=80&w=400",
        category: "Acne",
        rating: 4.4,
        popularity: 6
    }
];


  
// Translation Data
const translations = {
    en: {
        home: "Home",
        remove:"Remove",
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
        addorder: "Add",
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
        copyright: "© 2025 Al Dwalia Drug Store. All rights reserved.",
        emptyProductsTitle: "No Products Found",
        emptyProductsText: "We couldn't find any products matching your filters. Try adjusting your search criteria.",
        resetFilters: "Reset Filters",
        bannerBadgeNew: "New Collection",
        bannerBadgeSale: "Limited Offer",
        banner1Title: "Science-Backed Skincare",
        banner1Text: "Clinically proven formulas for visible results",
        banner2Title: "Dermatologist Approved",
        banner2Text: "Trusted by skincare professionals worldwide",
        banner3Title: "Exclusive Deals",
        banner3Text: "Premium quality at special prices",
        banner4Title: "Personalized Solutions",
        banner4Text: "Find the perfect products for your skin type",
        exploreProducts: "Explore Products",
        ourApproach: "Our Approach",
        shopDeals: "Shop Deals",
        takeQuiz: "Take Skin Quiz",
        limitedOffer: "Limited Offer",
        skinQuiz: "Skin Quiz",
        buyNow: "Buy Now",
        sale: "Sale",
        offerEnds: "Offer Ends",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        vegan: "Vegan",
        crueltyFree: "Cruelty Free",
        dermatologistTested: "Dermatologist Tested"
        
    },
    ar: {
        new: "جديد",
        bestseller: "الأكثر مبيعاً",
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        remove:"إزالة",
        contact: "اتصل بنا",
        heroTitle: "مستودع الدولية الحديثة ",
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
        addorder: "أضف",
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
        copyright: "مستودع الدولية الحديثة 2025© جميع الحقوق محفوظة",
        emptyProductsTitle: "لا توجد منتجات",
        emptyProductsText: "لم نتمكن من العثور على أي منتجات تطابق عوامل التصفية الخاصة بك. حاول تعديل معايير البحث.",
        resetFilters: "إعادة تعيين الفلاتر",
        bannerBadgeNew: "مجموعة جديدة",
        bannerBadgeSale: "عرض محدود",
        banner1Title: "العناية بالبشرة المدعومة علمياً",
        banner1Text: "تركيبات مثبتة سريرياً لنتائج مرئية",
        banner2Title: "معتمد من أطباء الجلدية",
        banner2Text: "موثوق به من قبل متخصصي العناية بالبشرة حول العالم",
        banner3Title: "عروض حصرية",
        banner3Text: "جودة ممتازة بأسعار خاصة",
        banner4Title: "حلول مخصصة",
        banner4Text: "ابحث عن المنتجات المثالية لنوع بشرتك",
        exploreProducts: "استكشف المنتجات",
        ourApproach: "نهجنا",
        shopDeals: "تسوق العروض",
        takeQuiz: "اختبار البشرة",
        limitedOffer: "عرض محدود",
        skinQuiz: "اختبار البشرة",
        buyNow: "اشتر الآن",
        sale: "تخفيض",
        offerEnds: "ينتهي العرض خلال",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        vegan: "نباتي",
        crueltyFree: "خالي من القسوة",
        dermatologistTested: "تم اختباره من قبل أطباء الجلدية",
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
    initBannerCarousel();
}

// Render products to the page with animations
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        // ... existing empty state code ...
        return;
    }
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.setProperty('--delay', index);
        
        // Add badges - these will be translated by translatePage()
        let badges = '';
        if (product.isNew) {
            badges += `<span class="product-badge" style="background-color: var(--primary);" data-i18n="new">New</span>`;
        }
        if (product.isBestseller) {
            badges += `<span class="product-badge" style="background-color: var(--accent); left: ${product.isNew ? '80px' : '12px'}" data-i18n="bestseller">Bestseller</span>`;
        }
        
       // Create bilingual description and skin type in one line
        const descriptionHtml = `<p class="product-desc">${product.description}</p>`;
        const skinTypeHtml = `<span class="product-skin-type">${product.skinType}</span>`;
        
        productCard.innerHTML = `
            ${badges}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                ${skinTypeHtml}
                <h3 class="product-title">${product.name}</h3>
                ${descriptionHtml}
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="text" class="quantity-input" value="1" readonly>
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> <span data-i18n="addorder">Add</span>
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
    
        // Update the checkoutBtn click handler
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showError(currentLanguage === 'en' ? 
                "Your cart is empty. Please add items before checkout." : 
                "سلة التسوق فارغة. يرجى إضافة منتجات قبل إنهاء الطلب.");
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



// Enhanced Banner Carousel Functionality
let currentBannerIndex = 0;
let bannerInterval;
let isPlaying = true;
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerContainer = document.querySelector('.banner-container');
const bannerDotsContainer = document.querySelector('.banner-dots');


// Create dots
bannerSlides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('banner-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToBanner(index);
    });
    bannerDotsContainer.appendChild(dot);
});

const bannerDots = document.querySelectorAll('.banner-dot');

// Navigation arrows
document.querySelector('.banner-nav.prev').addEventListener('click', () => {
    prevBanner();
    resetBannerInterval();
});

document.querySelector('.banner-nav.next').addEventListener('click', () => {
    nextBanner();
    resetBannerInterval();
});



function updateBanner() {
    // Reset all slides
    bannerSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Set active slide
    bannerSlides[currentBannerIndex].classList.add('active');
    
    // Update dots
    const dots = document.querySelectorAll('.banner-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentBannerIndex);
    });
    
    // Update transform based on language
    if (currentLanguage === 'ar') {
        bannerContainer.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    } else {
        bannerContainer.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    }
}

function nextBanner() {
    if (currentLanguage === 'ar') {
        currentBannerIndex = (currentBannerIndex - 1 + bannerSlides.length) % bannerSlides.length;
    } else {
        currentBannerIndex = (currentBannerIndex + 1) % bannerSlides.length;
    }
    updateBanner();
}

function prevBanner() {
    if (currentLanguage === 'ar') {
        currentBannerIndex = (currentBannerIndex + 1) % bannerSlides.length;
    } else {
        currentBannerIndex = (currentBannerIndex - 1 + bannerSlides.length) % bannerSlides.length;
    }
    updateBanner();
}

function goToBanner(index) {
    currentBannerIndex = index;
    updateBanner();
    resetBannerInterval();
}

function startBannerInterval() {
    bannerInterval = setInterval(nextBanner, 4500); // 6 seconds
    isPlaying = true;
    autoplayToggle.innerHTML = '<i class="fas fa-pause"></i>';
}

// Initialize Banner Carousel
function initBannerCarousel() {
    // Clear existing dots
    bannerDotsContainer.innerHTML = '';
    
    // Create new dots
    bannerSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('banner-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToBanner(index);
        });
        bannerDotsContainer.appendChild(dot);
    });
    
    // Set initial position based on language
    updateBannerPosition();
    startBannerInterval();
    
    // Navigation arrows
    document.querySelector('.banner-nav.prev').addEventListener('click', () => {
        prevBanner();
        resetBannerInterval();
    });
    
    document.querySelector('.banner-nav.next').addEventListener('click', () => {
        nextBanner();
        resetBannerInterval();
    });
}

function updateBannerPosition() {
    const translateValue = currentBannerIndex * 100;
    bannerContainer.style.transform = currentLanguage === 'ar' ? 
        `translateX(${translateValue}%)` : 
        `translateX(-${translateValue}%)`;
}

// Apply all active filters
function applyFilters() {
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const skinType = skinTypeFilter.value;
    const priceRange = priceFilter.value;
    const sortOption = sortBy.value;
    
    let filteredProducts = [...products];
    
    // Apply filters
    if (activeCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => 
            p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );
    }
    
    if (skinType !== 'all') {
        filteredProducts = filteredProducts.filter(p => 
            p.skinType.includes(skinType)
        );
    }
    
    if (priceRange !== 'all') {
        if (priceRange.includes('+')) {
            const min = parseFloat(priceRange.replace('+', ''));
            filteredProducts = filteredProducts.filter(p => p.price >= min);
        } else {
            const [min, max] = priceRange.split('-').map(Number);
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
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    // Show empty state if no products match
    if (filteredProducts.length === 0) {
        showEmptyState();
    } else {
        renderProducts(filteredProducts);
    }
}

function showEmptyState() {
    productsContainer.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <i class="fas fa-search" style="font-size: 4.5rem;"></i>
                <i class="fas fa-frown" style="font-size: 1.5rem; position: absolute; bottom: -5px; right: -5px;"></i>
            </div>
            <h3 data-i18n="emptyProductsTitle">Nothing to See Here!</h3>
            <p data-i18n="emptyProductsText">Our investigation lens couldn't spot any matches. Maybe try different filters?</p>
            <button class="btn reset-filters">
                <i class="fas fa-redo"></i> <span data-i18n="resetFilters">Reset Filters</span>
            </button>
        </div>
    `;
    
    // Add event listener for reset button
    document.querySelector('.reset-filters').addEventListener('click', resetFilters);
    
    // Translate the new elements
    translatePage();
}

function resetFilters() {
    // Reset all filters to default
    skinTypeFilter.value = 'all';
    priceFilter.value = 'all';
    sortBy.value = 'default';
    
    // Reset active category
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Reapply filters
    applyFilters();
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
                <i class="fas fa-shopping-cart my-cart"></i>
                <h4 data-i18n="emptyCartTitle">Your cart is empty</h4>
                <p data-i18n="emptyCartText">Looks like you haven't added anything to your cart yet</p>
                <button class="btn" id="continueShoppingBtn">
                    <i class="fas fa-arrow-left my-arrow"></i> <span id="my-span" data-i18n="continueShopping">Continue Shopping</span>
                </button>
            </div>
        `;
        document.getElementById('continueShoppingBtn').addEventListener('click', toggleCart);
        translatePage();
        return;
    }
    
    cartItems.innerHTML = '';
    
    // Render each cart item
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">
                    $${item.price.toFixed(2)} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
                </div>
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
    
    // Update the cart total in the header
    updateCartTotal();
    
    // Add event listeners
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromCart(parseInt(btn.dataset.id));
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
                } else {
                    removeFromCart(productId);
                    return;
                }
            } else if (btn.classList.contains('plus')) {
                item.quantity++;
                input.value = item.quantity;
            }
            
            updateCart();
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
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
    // Remove the incomplete line below
    // let x = document.getElementById
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
// Update the showError function
function showError(message) {
    errorContainer.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    errorContainer.style.display = 'flex';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorContainer.style.opacity = '0';
        setTimeout(() => {
            errorContainer.style.display = 'none';
            errorContainer.style.opacity = '1';
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


// Add this new function
function resetBannerCarousel() {
    clearInterval(bannerInterval);
    currentBannerIndex = 0;
    updateBanner();
    startBannerInterval();
}

// In the toggleLanguage function, add this:
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage();
    // Reset the banner carousel
    resetBannerCarousel();
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
            // Skip translation if element is an icon
            if (element.tagName === 'I' || element.classList.contains('fa')) {
                return;
            }
            // For buttons with icons and text
            if (element.parentElement.classList.contains('banner-btn') || 
                element.parentElement.classList.contains('add-to-cart')) {
                element.textContent = translations[currentLanguage][key];
            } 
            // For regular elements
            else {
                element.textContent = translations[currentLanguage][key];
            }
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



document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
    init();
    
    // Re-initialize carousel after language change
    languageToggle.addEventListener('click', function() {
        setTimeout(initBannerCarousel, 100);
    });
});