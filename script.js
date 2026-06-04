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

    // 3. Fandefasana ny Formulaire Client
    const clientForm = document.getElementById('client-form');
    if (clientForm) {
        clientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusBox = document.getElementById('client-status');
            
            // Simulation fandefasana fahombiazana
            statusBox.className = "form-status success";
            statusBox.innerText = "Tontosa ny fangatahanao! Hifandray aminao tsy ho ela ny ekipanay.";
            clientForm.reset();
            document.getElementById('client-extra-box').style.display = 'none';
            window.scrollTo({ top: statusBox.offsetTop - 100, behavior: 'smooth' });
        });
    }

    // 4. Fandefasana ny Formulaire Mpiasa (Candidat)
    const candidatForm = document.getElementById('candidat-form');
    if (candidatForm) {
        candidatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusBox = document.getElementById('candidat-status');
            
            // Simulation fandefasana fahombiazana
            statusBox.className = "form-status success";
            statusBox.innerText = "Voaray ny fisoratana anaranao! Handinika ny mombamomba anao izahay.";
            candidatForm.reset();
            document.getElementById('candidat-extra-box').style.display = 'none';
            window.scrollTo({ top: statusBox.offsetTop - 100, behavior: 'smooth' });
        });
    }
});

// 5. Fiasa manova ny pejy jerena (Navigation SPA)
function showPage(pageId) {
    // Fenoy ny menu mobile rehefa misy kitihina ny rohy
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');

    // Afeno ny pejy rehetra
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-page');
    });

    // Asehoy ny appraised pejy
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active-page');
    }

    // Soloy ny nav link mavitrika (Active link)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Tadiavo hoe aiza ny rohy natsindry
    if (pageId === 'home-page') document.getElementById('link-home').classList.add('active');
    else if (pageId === 'serivisy-page') document.getElementById('link-serivisy').classList.add('active');
    else if (pageId === 'mpampiasa-page') document.getElementById('link-mpampiasa').classList.add('active');
    else if (pageId === 'mpiasa-page') document.getElementById('link-mpiasa').classList.add('active');

    // Akatony ho any ambony ny fijery
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Fiasa mampiseho/manafina ny Textarea ho an'ny Client
function toggleClientTextarea() {
    const select = document.getElementById('client-service-select');
    const extraBox = document.getElementById('client-extra-box');
    const label = document.getElementById('client-extra-label');
    
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

// 7. Fiasa mampiseho/manafina ny Textarea ho an'ny Mpiasa
function toggleCandidatTextarea() {
    const select = document.getElementById('candidat-service-select');
    const extraBox = document.getElementById('candidat-extra-box');
    
    if (select.value === 'Autre' || select.value === 'Chauffeur' || select.value === 'Cuisine') {
        extraBox.style.display = 'block';
    } else {
        extraBox.style.display = 'none';
    }
}