document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Dictionary ---
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-sub": "Hi, I am",
            "hero-desc": "I turn concepts into polished, real-world products through creativity, logic, and precision.",
            "hero-btn-work": "View My Work",
            "hero-btn-contact": "Let's Talk",
            "about-title": "About Me",
            "about-p1": "A passionate developer specialized in creating high-performance web applications and engaging game experiences. With a background in Full-Stack development and Game design, I blend technical efficiency with artistic vision.",
            "about-p2": "My journey is driven by a constant curiosity for new technologies. Whether it's a high-performance web app or a complex game system, I bring precision to every line of code.",
            "stat-exp": "Years Experience",
            "stat-prj": "Projects Completed",
            "skills-title": "Mastery & Skills",
            "skill-fe": "Frontend",
            "skill-fe1": "HTML5 / CSS3",
            "skill-fe2": "JavaScript (ES6+)",
            "skill-fe3": "React.js",
            "skill-fe4": "Responsive Design",
            "skill-be": "Backend",
            "skill-be1": "Node.js",
            "skill-be2": "Express",
            "skill-be3": "MongoDB",
            "skill-be4": "SQL / PostgreSQL",
            "skill-gd": "Game Dev",
            "skill-gd1": "Unity 3D/2D",
            "skill-gd2": "Unreal Engine",
            "skill-gd3": "C# / C++",
            "skill-gd4": "Game Mechanics",
            "projects-title": "Featured Projects",
            "prj1-title": "E-Commerce Platform",
            "prj1-desc": "Full-stack React & Node.js application.",
            "prj2-title": "Neon Strike",
            "prj2-desc": "Fast-paced action game built in Unity.",
            "prj-view": "View Project",
            "contact-title": "Get In Touch",
            "contact-btn": "Send Message",
            "contact-email": "Email",
            "contact-loc": "Location",
            "placeholder-name": "Your Name",
            "placeholder-email": "Your Email",
            "placeholder-msg": "Your Message",
            "footer-rights": "Mohamed Aziz. All rights reserved.",
            "roles": ["Web Developer", "Game Developer", "Full-Stack Freelancer"]
        },
        fr: {
            "nav-home": "Accueil",
            "nav-about": "À Propos",
            "nav-skills": "Compétences",
            "nav-projects": "Projets",
            "nav-contact": "Contact",
            "hero-sub": "Salut, je suis",
            "hero-desc": "Je transforme les concepts en produits réels et polis grâce à la créativité, la logique et la précision.",
            "hero-btn-work": "Voir mon travail",
            "hero-btn-contact": "Discutons",
            "about-title": "À Propos de Moi",
            "about-p1": "Un développeur passionné spécialisé dans la création d'applications web haute performance et d'expériences de jeu engageantes. Avec une base en développement Full-Stack et en Game design, je mélange efficacité technique et vision artistique.",
            "about-p2": "Mon parcours est guidé par une curiosité constante pour les nouvelles technologies. Qu'il s'agisse d'une application web performante ou d'un système de jeu complexe, j'apporte de la précision à chaque ligne de code.",
            "stat-exp": "Ans d'expérience",
            "stat-prj": "Projets Terminés",
            "skills-title": "Maîtrise & Compétences",
            "skill-fe": "Frontend",
            "skill-fe1": "HTML5 / CSS3",
            "skill-fe2": "JavaScript (ES6+)",
            "skill-fe3": "React.js",
            "skill-fe4": "Design Responsive",
            "skill-be": "Backend",
            "skill-be1": "Node.js",
            "skill-be2": "Express",
            "skill-be3": "MongoDB",
            "skill-be4": "SQL / PostgreSQL",
            "skill-gd": "Jeu Vidéo",
            "skill-gd1": "Unity 3D/2D",
            "skill-gd2": "Unreal Engine",
            "skill-gd3": "C# / C++",
            "skill-gd4": "Mécaniques de Jeu",
            "projects-title": "Projets Vedettes",
            "prj1-title": "Plateforme E-Commerce",
            "prj1-desc": "Application complète React & Node.js.",
            "prj2-title": "Neon Strike",
            "prj2-desc": "Jeu d'action rapide construit avec Unity.",
            "prj-view": "Voir le Projet",
            "contact-title": "Contactez-moi",
            "contact-btn": "Envoyer le Message",
            "contact-email": "E-mail",
            "contact-loc": "Localisation",
            "placeholder-name": "Votre Nom",
            "placeholder-email": "Votre E-mail",
            "placeholder-msg": "Votre Message",
            "footer-rights": "Mohamed Aziz. Tous droits réservés.",
            "roles": ["Développeur Web", "Développeur de Jeux", "Freelance Full-Stack"]
        },
        ar: {
            "nav-home": "الرئيسية",
            "nav-about": "حول",
            "nav-skills": "المهارات",
            "nav-projects": "المشاريع",
            "nav-contact": "اتصل بي",
            "hero-sub": "مرحباً، أنا",
            "hero-desc": "أقوم بتحويل الأفكار إلى منتجات واقعية مصقولة من خلال الإبداع والمنطق والدقة.",
            "hero-btn-work": "عرض أعمالي",
            "hero-btn-contact": "لنبدأ التحدث",
            "about-title": "نبذة عني",
            "about-p1": "مطور شغوف متخصص في إنشاء تطبيقات ويب عالية الأداء وتجارب ألعاب جذابة. مع خلفية في تطوير Full-Stack وتصميم الألعاب، أمزج بين الكفاءة التقنية والرؤية الفنية.",
            "about-p2": "رحلتي مدفوعة بالفضول المستمر للتقنيات الجديدة. سواء كان تطبيق ويب عالي الأداء أو نظام ألعاب معقدًا، فإنني أضفي الدقة على كل سطر من الأكواد.",
            "stat-exp": "سنوات خبرة",
            "stat-prj": "مشاريع مكتملة",
            "skills-title": "الإتقان والمهارات",
            "skill-fe": "واجهة أمامية",
            "skill-fe1": "HTML5 / CSS3",
            "skill-fe2": "JavaScript (ES6+)",
            "skill-fe3": "React.js",
            "skill-fe4": "تصميم متجاوب",
            "skill-be": "واجهة خلفية",
            "skill-be1": "Node.js",
            "skill-be2": "Express",
            "skill-be3": "MongoDB",
            "skill-be4": "SQL / PostgreSQL",
            "skill-gd": "تطوير ألعاب",
            "skill-gd1": "Unity 3D/2D",
            "skill-gd2": "Unreal Engine",
            "skill-gd3": "C# / C++",
            "skill-gd4": "ميكانيكا الألعاب",
            "projects-title": "المشاريع المميزة",
            "prj1-title": "منصة تجارة إلكترونية",
            "prj1-desc": "تطبيق متكامل باستخدام React & Node.js.",
            "prj2-title": "Neon Strike",
            "prj2-desc": "لعبة حركة سريعة الوتيرة مبنية باستخدام Unity.",
            "prj-view": "عرض المشروع",
            "contact-title": "تواصل معي",
            "contact-btn": "إرسال الرسالة",
            "contact-email": "البريد الإلكتروني",
            "contact-loc": "الموقع",
            "placeholder-name": "اسمك",
            "placeholder-email": "بريدك الإلكتروني",
            "placeholder-msg": "رسالتك",
            "footer-rights": "محمد عزيز. جميع الحقوق محفوظة.",
            "roles": ["مطور ويب", "مطور ألعاب", "مطور شامل مستقل"]
        }
    };

    // --- Language Switching Logic ---
    let currentLang = 'en';

    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update regular text elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update roles for typewriter effect
        window.currentRoles = translations[lang]["roles"];

        // Update language button text
        document.querySelector('.lang-btn').innerHTML = `${lang.toUpperCase()} <i class="fas fa-chevron-down"></i>`;
    }

    // Language Dropdown Event Listeners
    document.querySelectorAll('.lang-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // --- Loader ---
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // --- Pro Particle Trail Animation ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `rgba(0, 210, 255, ${Math.random() * 0.5 + 0.5})`;
            this.life = 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 0.02;
            if (this.size > 0.1) this.size -= 0.05;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.life;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        for (let i = 0; i < 3; i++) {
            particles.push(new Particle(mouse.x, mouse.y));
        }
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animate);
    }
    animate();

    // --- Magnetic Effect ---
    const magneticElements = document.querySelectorAll('.btn, .nav-links li a, .social-links a, .lang-btn');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });

    // Click Ripple effect
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);

        for (let i = 0; i < 20; i++) {
            particles.push(new Particle(e.clientX, e.clientY));
        }
    });

    // --- Mobile Navigation ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    // --- Typewriter Effect ---
    window.currentRoles = translations[currentLang]["roles"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    const roleTextElement = document.querySelector('.role-text');

    function type() {
        const currentRole = window.currentRoles[roleIndex] || "";
        if (isDeleting) {
            roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % window.currentRoles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
        }
    }
    if (roleTextElement) type();

    // --- Hero Parallax Effect ---
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('mousemove', (e) => {
        if (!heroImage) return;
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        heroImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    // --- Modern Scroll Reveal ---
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('reveal');
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 150);
                });
            }
        });
    }, revealOptions);

    document.querySelectorAll('section, .reveal-blur, .skill-category, .project-card, .stat-item').forEach(el => {
        if (!el.classList.contains('reveal-blur') && !el.classList.contains('stagger-item')) {
            el.classList.add('section-hidden');
        }
        revealObserver.observe(el);
    });

    // --- Contact Form ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.classList.add('success');
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('success');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
