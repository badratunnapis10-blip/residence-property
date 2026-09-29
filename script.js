// ==== NAVIGATION CONTROLLER ==== //
const navId = document.getElementById("nav_menu"),
    ToggleBtnId = document.getElementById("toggle_btn"),
    CloseBtnId = document.getElementById("close_btn");

// Show mobile navigation menu
if (ToggleBtnId && navId) {
    ToggleBtnId.addEventListener("click", () => {
        navId.classList.add("show");
    });
}

// Hide mobile navigation menu
if (CloseBtnId && navId) {
    CloseBtnId.addEventListener("click", () => {
        navId.classList.remove("show");
    });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true
    });
}

// GSAP Animations (Safe Execution)
if (typeof gsap !== "undefined") {
    const safeGsapFrom = (selector, config) => {
        if (document.querySelector(selector)) {
            gsap.from(selector, config);
        }
    };

    safeGsapFrom(".logo", {
        opacity: 0,
        y: -10,
        delay: 0.5,
        duration: 0.5,
    });

    safeGsapFrom(".nav_menu_list .nav_menu_item", {
        opacity: 0,
        y: -10,
        delay: 0.6,
        duration: 0.5,
        stagger: 0.15,
    });

    safeGsapFrom(".toggle_btn", {
        opacity: 0,
        y: -10,
        delay: 0.5,
        duration: 0.5,
    });

    safeGsapFrom(".main-heading", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".btn_wrapper", {
        opacity: 0,
        y: 20,
        delay: 1,
        duration: 0.5,
    });

    safeGsapFrom(".team_img_wrapper img", {
        opacity: 0,
        y: 20,
        delay: 1,
        duration: 0.5,
    });

    safeGsapFrom(".info-text", {
        opacity: 0,
        y: 20,
        delay: 0.9,
        duration: 0.5,
    });

    safeGsapFrom(".fasilitas", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".tentang", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".kontak", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".title_tipe_rumah", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".tipe_rumah", {
        opacity: 0,
        y: 20,
        delay: 0.9,
        duration: 0.5,
    });

    safeGsapFrom(".detail_tipe_rumah", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".blog", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });

    safeGsapFrom(".detail_blog", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.5,
    });
}

// Header Shadow on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.header');
    if (!nav) return;
    if (window.pageYOffset >= 30) {
        nav.classList.add("shadow-header");
    } else {
        nav.classList.remove("shadow-header");
    }
});

// ==== MASTER DATA RUMAH ==== //
const jsonData = {
    "rumah": [
        {
            "tipe": "A",
            "gambar_rumah": "./img/house-1.png",
            "nama": "Casa Verde",
            "luas_bangunan": 120,
            "luas_tanah": 200,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Casa Verde, rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga harmonis. Dengan dua kamar mandi dan tiga kamar tidur, hunian ini memberikan kenyamanan dan kehangatan bagi keluarga Anda.",
            "harga": "700Jt-an",
            "carport": "1",
            "denah_rumah": "./img/denah_rumah.jpg"
        },
        {
            "tipe": "B",
            "gambar_rumah": "./img/house-2.png",
            "nama": "Sky Villa",
            "luas_bangunan": 180,
            "luas_tanah": 250,
            "kamar_mandi": 3,
            "kamar_tidur": 4,
            "deskripsi": "Sky Villa, rumah mewah dengan pemandangan yang menakjubkan. Dengan tiga kamar mandi dan empat kamar tidur, ini adalah tempat yang sempurna untuk hidup bergaya dan bersantai di atas langit biru.",
            "harga": "800Jt-an",
            "carport": "1",
            "denah_rumah": "./img/denah_rumah.jpg"
        },
        {
            "tipe": "C",
            "gambar_rumah": "./img/house-3.png",
            "nama": "Lakeview Mansion",
            "luas_bangunan": 220,
            "luas_tanah": 300,
            "kamar_mandi": 4,
            "kamar_tidur": 5,
            "deskripsi": "Lakeview Mansion, hunian megah dengan pemandangan danau yang menyejukkan. Dengan empat kamar mandi dan lima kamar tidur, rumah ini menghadirkan keanggunan dan kenyamanan untuk gaya hidup bergengsi.",
            "harga": "900Jt-an",
            "carport": "2",
            "denah_rumah": "./img/denah_rumah.jpg"
        },
        {
            "tipe": "D",
            "gambar_rumah": "./img/house-4.png",
            "nama": "Garden Retreat",
            "luas_bangunan": 150,
            "luas_tanah": 180,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Garden Retreat, rumah elegan dengan taman yang asri dan indah. Dua kamar mandi dan tiga kamar tidur memberikan keseimbangan sempurna antara keindahan alam dan kenyamanan rumah modern.",
            "harga": "950Jt-an",
            "carport": "1",
            "denah_rumah": "./img/denah_rumah.jpg"
        }
    ]
};

// Function dynamically creates HTML for house cards on Tipe Rumah page
function createHouseCard(house, index, isMobileView) {
    const isOdd = index % 2 === 1;

    const penjelasan = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
          <div class="col-md-5 mb-3 col-6">
            <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_bangunan}m²</h3>
              <p>Luas Bangunan</p>
            </div>
          </div>
          <div class="col-md-5 mb-3 col-6">
            <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
              <i class="fa fa-building-o"></i>
              <h3>${house.luas_tanah}m²</h3>
              <p>Luas Tanah</p>
            </div>
          </div>
          <div class="col-md-5 mb-3 col-6">
            <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
              <i class="fa fa-shower"></i>
              <h3>${house.kamar_mandi}</h3>
              <p>Kamar Mandi</p>
            </div>
          </div>
          <div class="col-md-5 mb-3 col-6">
            <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
              <i class="fa fa-bed"></i>
              <h3>${house.kamar_tidur}</h3>
              <p>Kamar Tidur</p>
            </div>
          </div>
        </div>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-2" style="text-decoration:none;">
            Selengkapnya <i class="fa fa-arrow-right ms-2"></i>
        </a>
      </div>
    `;

    const gambar_rumah = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid rounded" />
        </div>
    `;

    let html = '';
    if (isMobileView || isOdd) {
        html = gambar_rumah + penjelasan;
    } else {
        html = penjelasan + gambar_rumah;
    }

    return html;
}

// Function to create "Lihat Tipe Lain" cards
function createTipeLain(house) {
    return `
        <div class="col-md-4 col-sm-6 mt-3 mb-4">
            <div class="card h-100 p-2 shadow-sm" style="border-radius: 16px; overflow: hidden;">
                <img src="${house.gambar_rumah}" alt="${house.nama}" class="w-100 rounded" style="height:200px; object-fit:cover; object-position:center">
                <div class="card-body text-center">
                    <h4 class="card-title text-dark">Rumah ${house.nama}</h4>
                    <p class="text-muted mb-2">Mulai ${house.harga}</p>
                    <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn btn-sm btn-outline-info rounded-pill px-3">
                        Lihat Detail <i class="fa fa-angle-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Render data on Tipe Rumah page (Desktop view)
const rumahContainer = document.getElementById('rumahContainer');
if (rumahContainer != null) {
    rumahContainer.innerHTML = '';
    jsonData.rumah.forEach((house, index) => {
        rumahContainer.innerHTML += createHouseCard(house, index, false);
    });
}

// Render data on Tipe Rumah page (Mobile view)
const rumahContainerMobile = document.getElementById('rumahContainerMobile');
if (rumahContainerMobile != null) {
    rumahContainerMobile.innerHTML = '';
    jsonData.rumah.forEach((house, index) => {
        rumahContainerMobile.innerHTML += createHouseCard(house, index, true);
    });
}

// Helper to filter house by type letter (A, B, C, D)
function filterRumahByTipe(tipe) {
    return jsonData.rumah.find(rumah => rumah.tipe.toUpperCase() === tipe.toUpperCase()) || null;
}

// Query parameters helper
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
let tipeRumahValue = searchParams.get('tipe_rumah');

// Automatically default to Tipe A if visiting detail_rumah.html without query string
if (!tipeRumahValue && document.getElementById("title-nama-rumah")) {
    tipeRumahValue = 'A';
}

// Load data into Detail Rumah HTML view
if (tipeRumahValue) {
    const filteredRumah = filterRumahByTipe(tipeRumahValue);

    if (filteredRumah != null) {
        const titleNama = document.getElementById("title-nama-rumah");
        const gambarRumah = document.getElementById("gambar-rumah");
        const namaRumah = document.getElementById("nama-rumah");
        const deskripsiRumah = document.getElementById("deskripsi-rumah");
        const hargaRumah = document.getElementById("harga-rumah");
        const luasBangunan = document.getElementById("luas-bangunan-rumah");
        const luasTanah = document.getElementById("luas-tanah-rumah");
        const kamarMandi = document.getElementById("kamar-mandi-rumah");
        const kamarTidur = document.getElementById("kamar-tidur-rumah");
        const carport = document.getElementById("carport-rumah");
        const denah = document.getElementById("denah-rumah");
        const waBtn = document.getElementById("wa-btn");

        if (titleNama) titleNama.innerText = 'Rumah ' + filteredRumah.nama;
        if (gambarRumah) {
            gambarRumah.src = filteredRumah.gambar_rumah;
            gambarRumah.alt = filteredRumah.nama;
        }
        if (namaRumah) namaRumah.innerText = filteredRumah.nama;
        if (deskripsiRumah) deskripsiRumah.innerText = filteredRumah.deskripsi;
        if (hargaRumah) hargaRumah.innerText = filteredRumah.harga;
        if (luasBangunan) luasBangunan.innerText = filteredRumah.luas_bangunan + 'm²';
        if (luasTanah) luasTanah.innerText = filteredRumah.luas_tanah + 'm²';
        if (kamarMandi) kamarMandi.innerText = filteredRumah.kamar_mandi;
        if (kamarTidur) kamarTidur.innerText = filteredRumah.kamar_tidur;
        if (carport) carport.innerText = filteredRumah.carport;
        if (denah) denah.src = filteredRumah.denah_rumah;

        if (waBtn) {
            const message = encodeURIComponent(`Halo Tim MySkill Residence, saya tertarik untuk informasi unit Rumah ${filteredRumah.nama} (Tipe ${filteredRumah.tipe}). Mohon info detailnya.`);
            waBtn.href = `https://api.whatsapp.com/send/?phone=6282223136022&text=${message}`;
        }
    }
}

// Load data into "Lihat Tipe Lain" excluding the current type
const lihatTipeLain = document.getElementById('lihatTipeLain');
if (lihatTipeLain != null) {
    lihatTipeLain.innerHTML = '';
    const otherHouses = jsonData.rumah.filter(house => !tipeRumahValue || house.tipe.toUpperCase() !== tipeRumahValue.toUpperCase());
    otherHouses.forEach((house) => {
        lihatTipeLain.innerHTML += createTipeLain(house);
    });
}

// ==== MASTER DATA BLOG ==== //
const blogData = [
    {
        id: 1,
        title: "Perumahan Dengan Hunian Nyaman dan Modern: Casa Verde di MySkill Residence",
        date: "21 Maret 2024, 09:00 AM",
        description: "Dalam dunia properti, terutama di industri perumahan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. Salah satu perumahan yang menawarkan konsep tersebut adalah MySkill Residence dengan tipe hunian bernama Casa Verde...",
        detail_blog: "./content/blog-1.html",
        image_blog: "./img/house-1.png"
    },
    {
        id: 2,
        title: "Menikmati Kemewahan Hidup di Sky Villa: Rumah Hunian Modern dengan Pemandangan Mengagumkan",
        date: "22 Maret 2024, 08:00 AM",
        description: "Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru...",
        detail_blog: "./content/blog-2.html",
        image_blog: "./img/house-2.png"
    },
    {
        id: 3,
        title: "Gaya Hidup Megah Menghadap Danau di Lakeview Mansion MySkill Residence",
        date: "25 Maret 2024, 10:15 AM",
        description: "Hunian berkelas dengan panorama alami danau yang menenangkan kini hadir di MySkill Residence melalui tipe Lakeview Mansion. Menggabungkan kemegahan arsitektur kontemporer dan kesegaran alam terbuka...",
        detail_blog: "./content/blog-3.html",
        image_blog: "./img/house-3.png"
    },
    {
        id: 4,
        title: "Harmoni Alam dan Desain Modern di Garden Retreat MySkill Residence",
        date: "28 Maret 2024, 02:30 PM",
        description: "Garden Retreat menawarkan keseimbangan antara kehijauan asri dan fungsi hunian pintar. Sangat cocok bagi keluarga muda yang mengutamakan relaksasi dan kualitas istirahat setelah aktivitas harian...",
        detail_blog: "./content/blog-4.html",
        image_blog: "./img/house-4.png"
    }
];

// Generate blog card HTML
function generateBlogHTML(blogPost) {
    return `
        <div class="card mb-4 shadow-sm" style="border-radius: 16px; overflow: hidden; border: 1px solid #edf2f7;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${blogPost.image_blog}" alt="${blogPost.title}" style="width:100%; height:100%; min-height:220px; object-fit:cover;" />
                </div>
                <div class="col-md-8 p-4 d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="fw-bold" style="color: #161c2d; line-height:1.4;">${blogPost.title}</h5>
                        <div class="blog-date d-flex align-items-center mt-2 text-muted" style="font-size: 0.85rem;">
                            <i class="fa fa-calendar me-2"></i>
                            <span>${blogPost.date}</span>
                        </div>
                        <p class="description-blog mt-3 text-secondary" style="font-size: 0.92rem; line-height: 1.6;">${blogPost.description}</p>
                    </div>
                    <div class="mt-3">
                        <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn_home view_more_btn" style="text-decoration:none; height:40px; width:auto; padding: 0 1.2rem; display:inline-flex;">
                           <i class="fa fa-book me-2"></i> Baca Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate latest blog item HTML
function generateLatestBlogHTML(blogPost) {
    return `
        <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items d-block mb-3 text-decoration-none">
            <p class="fw-bold mb-1 text-dark" style="font-size: 0.95rem; line-height: 1.4;">${blogPost.title}</p>
            <div class="blog-date d-flex align-items-center text-muted" style="font-size: 0.8rem;">
                <i class="fa fa-calendar me-2"></i>
                <span>${blogPost.date}</span>
            </div>
            <hr class="my-2" style="border-color: #eee;">
        </a>
    `;
}

// Render blog posts
function renderBlogPosts(filteredBlogData, isFiltered) {
    const blogContainer = document.getElementById('blogContainer');
    const latestBlogContent = document.getElementById('latestBlogContent');

    // Render latest posts
    if (latestBlogContent != null) {
        latestBlogContent.innerHTML = '';
        const lastTwoBlogPosts = blogData.slice(-3).reverse();
        lastTwoBlogPosts.forEach(blogPost => {
            latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost);
        });
    }

    if (blogContainer == null) {
        return;
    }

    blogContainer.innerHTML = '';

    if (isFiltered) {
        if (!filteredBlogData || filteredBlogData.length === 0) {
            blogContainer.innerHTML = `
                <div class="card p-5 text-center text-muted">
                    <i class="fa fa-search fa-3x mb-3 text-secondary"></i>
                    <h4>Artikel tidak ditemukan</h4>
                    <p>Coba kata kunci pencarian yang lain.</p>
                </div>
            `;
            return;
        }
        filteredBlogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost);
        });
    } else {
        blogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost);
        });
    }
}

// Live search blog handler
function searchBlog(input) {
    const searchTerm = (input.value || "").toLowerCase().trim();

    if (searchTerm !== "") {
        const filteredBlogData = blogData.filter(blogPost =>
            blogPost.title.toLowerCase().includes(searchTerm) ||
            blogPost.description.toLowerCase().includes(searchTerm)
        );
        renderBlogPosts(filteredBlogData, true);
    } else {
        renderBlogPosts([], false);
    }
}

// Get blog post by ID
function getBlogById(blogId) {
    return blogData.find(blog => blog.id === blogId) || null;
}

// Function to load detail blog content into iframe
function loadDetailBlog(detailBlogURL) {
    const cardDetailBlog = document.getElementById("cardDetailBlog");
    if (!cardDetailBlog) return;

    cardDetailBlog.src = detailBlogURL;
    cardDetailBlog.onload = function () {
        try {
            if (cardDetailBlog.contentWindow && cardDetailBlog.contentWindow.document.body) {
                const height = cardDetailBlog.contentWindow.document.body.scrollHeight;
                cardDetailBlog.style.height = (height + 40) + "px";
            }
        } catch (e) {
            // Fallback for cross-origin or sandboxed frames
            cardDetailBlog.style.height = "850px";
        }
    };
}

// Initialize Blog and Detail Blog when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Check if query has ?q= for blog search
    const querySearch = searchParams.get('q');
    const searchInput = document.getElementById("blogSearchInput");

    if (querySearch && searchInput) {
        searchInput.value = querySearch;
        searchBlog(searchInput);
    } else {
        renderBlogPosts([], false);
    }

    // Detail Blog Data Loading
    let idBlogValue = searchParams.get('id');
    const cardDetailImg = document.getElementById("cardDetailImg");

    // Default to first blog if on detail_blog.html without id
    if (!idBlogValue && cardDetailImg) {
        idBlogValue = "1";
    }

    if (idBlogValue) {
        const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
        if (filteredBlogData) {
            const tglBlog = document.getElementById("tgl-blog");
            const titleBlog = document.getElementById("title-blog");

            if (cardDetailImg) {
                cardDetailImg.src = filteredBlogData.image_blog;
                cardDetailImg.alt = filteredBlogData.title;
            }
            if (tglBlog) tglBlog.innerText = filteredBlogData.date;
            if (titleBlog) titleBlog.innerText = filteredBlogData.title;

            loadDetailBlog(filteredBlogData.detail_blog);
        }
    }

    // Contact Form submission handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = (this.elements["name"] ? this.elements["name"].value : "").trim();
            const email = (this.elements["email"] ? this.elements["email"].value : "").trim();
            const subject = (this.elements["subject"] ? this.elements["subject"].value : "").trim();
            const message = (this.elements["message"] ? this.elements["message"].value : "").trim();

            if (!name || !email || !message) {
                alert("Mohon lengkapi Nama, Email, dan Pesan Anda sebelum mengirim.");
                return;
            }

            const waText = encodeURIComponent(
                `Halo Admin MySkill Residence,\n\nSaya ingin menanyakan informasi properti:\n- Nama: ${name}\n- Email: ${email}\n- Subjek: ${subject || '-'}\n- Pesan: ${message}`
            );

            alert("Terima kasih! Pesan Anda akan dialihkan ke WhatsApp Customer Service MySkill Residence.");
            window.open(`https://api.whatsapp.com/send?phone=6282223136022&text=${waText}`, "_blank");
            this.reset();
        });
    }
});