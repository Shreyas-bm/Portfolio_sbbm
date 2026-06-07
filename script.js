document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. FAQ ACCORDION COLLAPSE/EXPAND
    // ==========================================================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question-btn');
        const answer = item.querySelector('.faq-answer');
        
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items first for accordion effect
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // If the item clicked wasn't already active, open it
            if (!isActive) {
                item.classList.add('active');
                // Set max-height to its scrollHeight for smooth CSS transition
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ==========================================================================
    // 2. SCROLL-SPY ACTIVE NAVIGATION HIGH-LIGHTING
    // ==========================================================================
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const updateActiveNavLink = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + window.innerHeight * 0.35; // offset for center focus
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        // If we scroll to the very bottom, highlight contact
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            currentSectionId = 'contact';
        }
        
        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    // Trigger once on load to highlight the initially loaded section
    updateActiveNavLink();

    // ==========================================================================
    // 3. SMOOTH SCROLLING FOR ALL ANCHOR LINKS
    // ==========================================================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Offset calculation (accounts for floating navbar pill height + padding)
                const offset = window.innerWidth <= 1024 ? 90 : 120;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================================================
    // 4. INTERSECTION OBSERVER SCROLL REVEAL ANIMATIONS
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.05, // triggers when 5% of the element is visible
        rootMargin: '0px 0px -60px 0px'
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(element => {
        // Pre-add the reveal styling class if not present
        revealObserver.observe(element);
    });
});
