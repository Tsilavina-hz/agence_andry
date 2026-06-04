document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    // 1. Fitantanana ny Menu Mobile (Hamburger)
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // 2. Fitantanana ireo Select Box sy ny Textarea Fanampiny
    const clientSelect = document.getElementById('client-service-select');
    const candidatSelect = document.getElementById('candidat-service-select');

    if (clientSelect) {
        clientSelect.addEventListener('change', toggleClientTextarea);
    }
    if (candidatSelect) {
        candidatSelect.addEventListener('change', toggleCandidatTextarea);
    }

    // =========================================================================
    // 3. Fandefasana ny Formulaire Client any amin'ny WhatsApp
    // =========================================================================
    const clientForm = document.getElementById('client-form');
    if (clientForm) {
        clientForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Misakana ny pejy tsy hanao refresh
            const statusBox = document.getElementById('client-status');
            
            // Maka ny angona rehetra avy amin'ny formulaire
            const name = document.getElementById('client-name').value;
            const phone1 = document.getElementById('client-phone1').value;
            const phone2 = document.getElementById('client-phone2').value || "Tsy misy";
            const address = document.getElementById('client-address').value;
            const service = document.getElementById('client-service-select').value;
            const details = document.getElementById('client-details').value || "Tsy misy";

            // Mamorona ny lahatsoratra halefa voadahatra tsara
            const text = `*FANGATAHANA MPAMPIASA (CLIENT)*\n\n` +
                         `• *Anarana:* ${name}\n` +
                         `• *Finday 1:* ${phone1}\n` +
                         `• *WhatsApp:* ${phone2}\n` +
                         `• *Adiresy:* ${address}\n` +
                         `• *Serivisy ilaina:* ${service}\n` +
                         `• *Antsipiriany:* ${details}`;

            // Laharana WhatsApp handray ny hafatra
            const whatsappNumber = "261345938044"; 
            
            // Asehoy ny hafatra fahombiazana eo amin'ny tranonkala
            statusBox.className = "form-status success";
            statusBox.innerText = "Tontosa ny fangatahanao! Rehefa misokatra ny WhatsApp dia tsindrio fotsiny ny 'Envoyer'.";
            
            // Sokafana ny rohy WhatsApp mandefa ny hafatra
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
            
            // Averina amin'ny zero ny formulaire
            clientForm.reset();
            document.getElementById('client-extra-box').style.display = 'none';
            window.scrollTo({ top: statusBox.offsetTop - 100, behavior: 'smooth' });
        });
    }

    // =========================================================================
    // 4. Fandefasana ny Formulaire Mpiasa any amin'ny WhatsApp
    // =========================================================================
    const candidatForm = document.getElementById('candidat-form');
    if (candidatForm) {
        candidatForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Misakana ny pejy tsy hanao refresh
            const statusBox = document.getElementById('candidat-status');
            
            // Maka ny angona rehetra avy amin'ny formulaire
            const name = document.getElementById('candidat-name').value;
            const cin = document.getElementById('candidat-cin').value;
            const age = document.getElementById('candidat-age').value;
            const phone = document.getElementById('candidat-phone').value;
            const date = document.getElementById('candidat-date').value;
            const address = document.getElementById('candidat-address').value;
            const service = document.getElementById('candidat-service-select').value;
            const details = document.getElementById('candidat-details').value || "Tsy misy";

            // Mamorona ny lahatsoratra halefa voadahatra tsara
            const text = `*FISORATANA ANARANA (MPIASA)*\n\n` +
                         `• *Anarana:* ${name}\n` +
                         `• *CIN:* ${cin}\n` +
                         `• *Taona:* ${age} taona\n` +
                         `• *Finday:* ${phone}\n` +
                         `• *Daty afaka:* ${date}\n` +
                         `• *Adiresy:* ${address}\n` +
                         `• *Asa hainao:* ${service}\n` +
                         `• *Traikefa:* ${details}`;

            // Laharana WhatsApp handray ny hafatra
            const whatsappNumber = "261345938044"; 
            
            // Asehoy ny hafatra fahombiazana eo amin'ny tranonkala
            statusBox.className = "form-status success";
            statusBox.innerText = "Voaray ny fisoratana anaranao! Rehefa misokatra ny WhatsApp dia tsindrio fotsiny ny 'Envoyer'.";
            
            // Sokafana ny rohy WhatsApp mandefa ny hafatra
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
            
            // Averina amin'ny zero ny formulaire
            candidatForm.reset();
            document.getElementById('candidat-extra-box').style.display = 'none';
            window.scrollTo({ top: statusBox.offsetTop - 100, behavior: 'smooth' });
        });
    }
});

// 5. Fiasa manova ny pejy jerena (Navigation SPA)
function showPage(pageId) {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
    }

    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-page');
    });

    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active-page');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Mampavitrika ny loko eo amin'ny lohatenin'ny menio mifanaraka amin'ny pejy
    if (pageId === 'home-page' && document.getElementById('link-home')) document.getElementById('link-home').classList.add('active');
    else if (pageId === 'serivisy-page' && document.getElementById('link-serivisy')) document.getElementById('link-serivisy').classList.add('active');
    else if (pageId === 'galerie-page' && document.getElementById('link-galerie')) document.getElementById('link-galerie').classList.add('active');
    else if (pageId === 'offres-page' && document.getElementById('link-offres')) document.getElementById('link-offres').classList.add('active');
    else if (pageId === 'mpampiasa-page' && document.getElementById('link-mpampiasa')) document.getElementById('link-mpampiasa').classList.add('active');
    else if (pageId === 'mpiasa-page' && document.getElementById('link-mpiasa')) document.getElementById('link-mpiasa').classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Fiasa mampiseho/manafina ny Textarea ho an'ny Client
function toggleClientTextarea() {
    const select = document.getElementById('client-service-select');
    const extraBox = document.getElementById('client-extra-box');
    const label = document.getElementById('client-extra-label');
    
    if (select && extraBox && label) {
        if (select.value === 'Autre' || select.value === 'Immobilier' || select.value === 'Design') {
            extraBox.style.display = 'block';
            if (select.value === 'Immobilier') {
                label.innerText = "Hamarito ny karazan-trano/tany tadiavinao na amidy (Toerana, teti-bola...) *";
            } else if (select.value === 'Design') {
                label.innerText = "Inona ny karazana dokam-barotra na logo ilainao? *";
            } else {
                label.innerText = "Soraty eto antsipiriany ny zavatra tadiaviao *";
            }
        } else {
            extraBox.style.display = 'none';
        }
    }
}

// 7. Fiasa mampiseho/manafina ny Textarea ho an'ny Mpiasa
function toggleCandidatTextarea() {
    const select = document.getElementById('candidat-service-select');
    const extraBox = document.getElementById('candidat-extra-box');
    
    if (select && extraBox) {
        if (select.value === 'Autre' || select.value === 'Chauffeur' || select.value === 'Cuisine') {
            extraBox.style.display = 'block';
        } else {
            extraBox.style.display = 'none';
        }
    }
}

// =========================================================================
// 8. Fitaovana Vaovao: Sivana ho an'ny Galerie (Filter Gallery)
// =========================================================================
function filterGallery(category) {
    // Manova ny bokotra mavitrika (Active button class)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Asiana 'active' ilay bokotra voatsindry
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Sivanina ny entana ao amin'ny galerie
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// =========================================================================
// 9. Fitaovana Vaovao: Fikarohana Asa Dinamika (Dynamic Job Search)
// =========================================================================
function searchJobs() {
    const input = document.getElementById('job-search').value.toLowerCase();
    const cards = document.querySelectorAll('.job-card');

    cards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        
        // Raha mifandraika amin'ny teny nosoratana ny lohateny na ny fanazavana
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}