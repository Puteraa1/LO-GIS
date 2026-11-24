/* ============================================
   LO GIS — Main Application JavaScript
   Location-Allocation GIS Kabupaten Kendal
   Data Hasil Analisis Spasial Network Dataset
   ============================================ */

// === DATA DESTINASI WISATA (Sesuai Hasil Analisis Network Analysis) ===
const destinations = [
    {
        id: 1,
        name: "Curug Lawe Sicepit",
        kec: "Kec. Sukorejo",
        cat: "alam",
        desc: "Air terjun alami di kawasan perbukitan asri dengan aliran air jernih dan jalur tracking menyusuri hutan tropis.",
        road: "Kolektor–Lokal",
        // Titik B (Pegandon - Optimal)
        dist: 41.27,
        time: 73,
        hours: 1.22,
        // Titik A (Sukorejo)
        a_dist: 71.65,
        a_time: 177,
        a_hours: 2.95,
        // Titik C (Boja)
        c_dist: 14.25,
        c_time: 38,
        c_hours: 0.64
    },
    {
        id: 2,
        name: "Curug Semawur",
        kec: "Kec. Plantungan",
        cat: "alam",
        desc: "Air terjun bertingkat delapan yang eksotis di lereng Gunung Prahu dengan panorama alam pegunungan yang asri.",
        road: "Kolektor–Lokal",
        dist: 53.61,
        time: 110,
        hours: 1.83,
        a_dist: 23.81,
        a_time: 72,
        a_hours: 1.20,
        c_dist: 84.02,
        c_time: 150,
        c_hours: 2.50
    },
    {
        id: 3,
        name: "Curug Sewu",
        kec: "Kec. Patean",
        cat: "alam",
        desc: "Air terjun megah bertingkat tiga dengan ketinggian total ±80 meter di kawasan hutan lindung, ikon wisata alam Kendal.",
        road: "Kolektor Primer",
        dist: 39.56,
        time: 56,
        hours: 0.94,
        a_dist: 4.43,
        a_time: 11,
        a_hours: 0.18,
        c_dist: 69.96,
        c_time: 97,
        c_hours: 1.61
    },
    {
        id: 4,
        name: "Pemandian Air Panas Nglimut",
        kec: "Kec. Limbangan",
        cat: "alam",
        desc: "Sumber mata air panas belerang alami di lereng Gunung Ungaran dengan kolam pemandian air hangat dan udara sejuk.",
        road: "Kolektor–Lokal",
        dist: 38.62,
        time: 63,
        hours: 1.05,
        a_dist: 69.00,
        a_time: 166,
        a_hours: 2.77,
        c_dist: 11.60,
        c_time: 28,
        c_hours: 0.46
    },
    {
        id: 5,
        name: "Kebun Teh Medini",
        kec: "Kec. Limbangan",
        cat: "alam",
        desc: "Hamparan perkebunan teh seluas 386 hektar di ketinggian 1.500 mdpl lereng Gunung Ungaran dengan pemandangan hijau berkabut.",
        road: "Lokal Primer",
        dist: 41.66,
        time: 75,
        hours: 1.25,
        a_dist: 72.04,
        a_time: 179,
        a_hours: 2.98,
        c_dist: 14.64,
        c_time: 40,
        c_hours: 0.66
    },
    {
        id: 6,
        name: "River Walk Boja",
        kec: "Kec. Boja",
        cat: "buatan",
        desc: "Destinasi wisata keluarga terpadu modern dengan waterpark tematik, mini zoo, spot foto estetik, dan restoran tepi sungai.",
        road: "Kolektor Primer",
        dist: 27.66,
        time: 37,
        hours: 0.61,
        a_dist: 58.04,
        a_time: 140,
        a_hours: 2.34,
        c_dist: 3.06,
        c_time: 5,
        c_hours: 0.08
    },
    {
        id: 7,
        name: "Goa Kiskendo",
        kec: "Kec. Singorojo",
        cat: "alam",
        desc: "Goa stalaktit-stalagmit alami di perbukitan kapur selatan Kendal yang sarat nilai geologi dan legenda pewayangan.",
        road: "Kolektor–Lokal",
        dist: 24.78,
        time: 36,
        hours: 0.59,
        a_dist: 55.16,
        a_time: 139,
        a_hours: 2.32,
        c_dist: 10.40,
        c_time: 19,
        c_hours: 0.32
    },
    {
        id: 8,
        name: "Hutan Pinus Nglimut",
        kec: "Kec. Limbangan",
        cat: "alam",
        desc: "Kawasan ekowisata hutan pinus yang rindang di lereng pegunungan, area perkemahan alami, dan sarana outbound.",
        road: "Kolektor–Lokal",
        dist: 39.04,
        time: 65,
        hours: 1.08,
        a_dist: 69.00,
        a_time: 166,
        a_hours: 2.77,
        c_dist: 12.02,
        c_time: 29,
        c_hours: 0.49
    },
    {
        id: 9,
        name: "Tirto Arum Kendal",
        kec: "Kec. Kendal",
        cat: "buatan",
        desc: "Agrowisata dan taman rekreasi air terbesar di tepi jalur Pantura Kota Kendal dengan kolam renang prestasi dan fasilitas ramah anak.",
        road: "Arteri Primer",
        dist: 0.79,
        time: 1,
        hours: 0.01,
        a_dist: 32.52,
        a_time: 96,
        a_hours: 1.59,
        c_dist: 29.61,
        c_time: 39,
        c_hours: 0.66
    },
    {
        id: 10,
        name: "Pantai Indah Kemangi",
        kec: "Kec. Kangkung",
        cat: "pantai",
        desc: "Destinasi pantai pesisir utara berpasir luas dengan deretan cemara laut rindang, spot sunset menawan, dan kuliner laut.",
        road: "Kolektor–Lokal",
        dist: 11.81,
        time: 29,
        hours: 0.49,
        a_dist: 32.89,
        a_time: 108,
        a_hours: 1.80,
        c_dist: 42.22,
        c_time: 70,
        c_hours: 1.16
    },
    {
        id: 11,
        name: "Pantai Ngebum",
        kec: "Kec. Kaliwungu",
        cat: "pantai",
        desc: "Pantai berpasir hitam yang luas di pesisir Mororejo dengan panorama Laut Jawa, perahu nelayan, dan rekreasi keluarga.",
        road: "Arteri–Kolektor",
        dist: 17.24,
        time: 26,
        hours: 0.44,
        a_dist: 47.61,
        a_time: 137,
        a_hours: 2.29,
        c_dist: 27.47,
        c_time: 46,
        c_hours: 0.77
    },
    {
        id: 12,
        name: "Pantai Cahaya",
        kec: "Kec. Rowosari",
        cat: "pantai",
        desc: "Kawasan rekreasi bahari terpadu di Sendang Sikucing dengan atraksi lumba-lumba, kebun binatang mini, dan pemandangan sunset.",
        road: "Arteri–Kolektor",
        dist: 19.67,
        time: 34,
        hours: 0.57,
        a_dist: 30.09,
        a_time: 86,
        a_hours: 1.44,
        c_dist: 50.07,
        c_time: 75,
        c_hours: 1.24
    }
];

// Data Ringkasan Komparasi Kandidat
const candidates = [
    {
        id: "A",
        name: "Sukorejo",
        region: "Wilayah Selatan",
        totalDist: 566.24,
        totalTime: 1477,
        avgDist: 47.19,
        avgTime: 123,
        optimal: false
    },
    {
        id: "B",
        name: "Pegandon",
        region: "Wilayah Tengah",
        totalDist: 355.72,
        totalTime: 605,
        avgDist: 29.64,
        avgTime: 50,
        optimal: true
    },
    {
        id: "C",
        name: "Boja",
        region: "Wilayah Selatan / Tenggara",
        totalDist: 369.33,
        totalTime: 636,
        avgDist: 30.78,
        avgTime: 53,
        optimal: false
    }
];

// === DOM READY ===
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initDestinationFilter();
    initDropdownSimulation();
    initTableTabs();
    initScrollReveal();
    initCountUp();
});

// === NAVBAR SCROLL EFFECT ===
function initNavbar() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
}

// === MOBILE MENU TOGGLE ===
function initMobileMenu() {
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-nav");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        const isOpen = menu.classList.contains("open");
        const svg = toggle.querySelector("svg");
        svg.innerHTML = isOpen
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            const svg = toggle.querySelector("svg");
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        });
    });
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            const targetId = anchor.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// === ACTIVE NAV HIGHLIGHT ===
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("text-amber-600", "font-semibold");
                    link.classList.add("text-gray-600");
                });
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.remove("text-gray-600");
                    activeLink.classList.add("text-amber-600", "font-semibold");
                }
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => observer.observe(section));
}

// === DESTINATION FILTER ===
function initDestinationFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".dest-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === "semua" || card.dataset.category === filter) {
                    card.style.display = "";
                    card.style.opacity = "0";
                    card.style.transform = "translateY(15px)";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// === DROPDOWN SIMULATION (Perhitungan) ===
function initDropdownSimulation() {
    const select = document.getElementById("dest-select");
    const panel = document.getElementById("detail-panel");

    if (!select || !panel) return;

    select.addEventListener("change", () => {
        const destId = parseInt(select.value);
        if (!destId) {
            panel.classList.remove("open");
            return;
        }

        const dest = destinations.find(d => d.id === destId);
        if (!dest) return;

        // Populate Pegandon details
        document.getElementById("detail-name").textContent = dest.name;
        document.getElementById("detail-kec").textContent = dest.kec;
        document.getElementById("detail-dist").textContent = dest.dist.toFixed(2) + " km";
        document.getElementById("detail-time").textContent = dest.time + " menit (" + dest.hours.toFixed(2) + " jam)";
        document.getElementById("detail-road").textContent = dest.road;

        // Speed calculation
        const speed = ((dest.dist / dest.time) * 60).toFixed(1);
        document.getElementById("detail-speed").textContent = speed + " km/jam";

        // Comparison cards
        const cmpA_dist = document.getElementById("cmp-a-dist");
        const cmpA_time = document.getElementById("cmp-a-time");
        const cmpB_dist = document.getElementById("cmp-b-dist");
        const cmpB_time = document.getElementById("cmp-b-time");
        const cmpC_dist = document.getElementById("cmp-c-dist");
        const cmpC_time = document.getElementById("cmp-c-time");

        if (cmpA_dist) cmpA_dist.textContent = dest.a_dist.toFixed(2) + " km";
        if (cmpA_time) cmpA_time.textContent = dest.a_time + " mnt";
        if (cmpB_dist) cmpB_dist.textContent = dest.dist.toFixed(2) + " km";
        if (cmpB_time) cmpB_time.textContent = dest.time + " mnt";
        if (cmpC_dist) cmpC_dist.textContent = dest.c_dist.toFixed(2) + " km";
        if (cmpC_time) cmpC_time.textContent = dest.c_time + " mnt";

        panel.classList.add("open");
    });
}

// === TABLE TABS (O-D Matrix switching) ===
function initTableTabs() {
    const tabBtns = document.querySelectorAll(".table-tab-btn");
    const tabPanes = document.querySelectorAll(".table-tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.tableTarget;

            tabBtns.forEach(b => {
                b.classList.remove("bg-primary", "text-white");
                b.classList.add("bg-white", "text-gray-600");
            });
            btn.classList.add("bg-primary", "text-white");
            btn.classList.remove("bg-white", "text-gray-600");

            tabPanes.forEach(pane => {
                if (pane.id === target) {
                    pane.classList.remove("hidden");
                } else {
                    pane.classList.add("hidden");
                }
            });
        });
    });
}

// === SCROLL REVEAL ===
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(el => observer.observe(el));
}

// === COUNT UP ANIMATION ===
function initCountUp() {
    const counters = document.querySelectorAll("[data-count]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || "";
                const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
                const duration = 2000;
                const start = performance.now();

                function update(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = (target * eased).toFixed(decimals);
                    el.textContent = current + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target.toFixed(decimals) + suffix;
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}
