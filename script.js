const facts = [
    {
        title: "Rocket Takeoff Power",
        question: "How much 'Rocket Power' is hidden in a vault takeoff?",
        fact: "You generate over 4,000 Watts of power during takeoff—that's more raw explosive force than a high-performance industrial engine!",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Super-Speed Velocity",
        question: "How fast do you have to run to fly?",
        fact: "Elite gymnasts sprint at 18 mph—the same speed as a fast-moving car—converting that run into a massive vertical launch!",
        icon: "M13 5H19M5 5H5.01M8 21L12 17L16 21M12 7V17M12 17L8 13M12 17L16 13"
    },
    {
        title: "The 'Stick-It' Impact",
        question: "What happens to your body when you stick a landing?",
        fact: "A landing happens in just 20ms! Your joints act like high-tech shock absorbers to perfectly stabilize your whole body.",
        icon: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Explosive Launch",
        question: "How do you get that 'Super-Jump' height?",
        fact: "It's all about 'Rate of Force Development.' We train your muscles to explode in a split second for maximum height.",
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    },
    {
        title: "Fast-Twitch Magic",
        question: "What's the secret to lightning-fast flips?",
        fact: "Your body uses 'Type IIb' Fast-Twitch fibers—the same ones used by Olympic sprinters for ultra-fast rotation in the air.",
        icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    },
    {
        title: "Mid-Air Radar",
        question: "How do you know where the floor is when upside down?",
        fact: "Gymnasts have 'Super-Proprioception.' Your internal radar detects where you are in the air in less than 200 milliseconds!",
        icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
    },
    {
        title: "Precision Balance",
        question: "How do you stay steady on a tiny 10cm beam?",
        fact: "It takes millimeter-perfect center-of-gravity corrections every single second to stay perfectly balanced.",
        icon: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m9-4.5L21 16.5m0 0L16.5 21M21 16.5H7.5"
    },
    {
        title: "Titanium Strength",
        question: "How much strength is needed for an Iron Cross?",
        fact: "Holding the rings steady requires massive 'Joint Torque'—your arms have to work like powerful hydraulic pistons!",
        icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    },
    {
        title: "Iron Bone Shield",
        question: "Does jumping from high up make you stronger?",
        fact: "Yes! High-impact training actually builds higher bone density, creating a 'shield' that protects your skeletal frame.",
        icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5l-3-1m-4.5-5.455l-9 3.273m9 1.173l-9 3.273M9.135 18.75h.008v.008H9.135v-.008zm3.375 0h.008v.008h-.008v-.008zm3.375 0h.008v.008h-.008v-.008zm-3.375-3.375h.008v.008h-.008v-.008zm0-3.375h.008v.008h-.008v-.008z"
    },
    {
        title: "Neural Focus",
        question: "Can you 'Train Your Brain' to stick every skill?",
        fact: "Advanced 'Neural Priming' helps your brain talk to your muscles faster, reducing execution errors by up to 30%!",
        icon: "M2.036 12.322a1.012 1.012 0 010-.644l.711-2.066c.253-.733.932-1.258 1.702-1.34l2.126-.226c.71-.075 1.258-.598 1.34-1.282l.245-2.041c.088-.73.655-1.303 1.39-1.402l2.052-.274c.73-.097 1.258-.619 1.34-1.343l.243-2.147a1.01 1.01 0 011.144-.897l2.13.315c.74.11 1.395-.316 1.62-.977l.635-1.85a1.01 1.01 0 011.332-.613l1.942.846c.67.29 1.45.093 1.905-.48l1.458-1.834a1.01 1.01 0 011.602.215l1.04 1.834c.36.634 1.115.952 1.83.774l2.041-.5c.73-.18 1.436.262 1.604.985l.48 2.05c.16.68.74 1.21 1.43 1.31l2.06.29c.73.1 1.3.67 1.4 1.4l.28 2.05c.08.68.61 1.22 1.28 1.33l2.04.33c.73.12 1.26.75 1.26 1.48v2.09c0 .73-.53 1.36-1.26 1.48l-2.04.33c-.67.11-1.2.65-1.28 1.33l-.28 2.05c-.1.73-.67 1.3-1.4 1.4l-2.06.29c-.69.1-1.27.63-1.43 1.31l-.48 2.05c-.168.723-.874 1.165-1.604.985l-2.041-.5a1.503 1.503 0 00-1.83.774l-1.04 1.834a1.01 1.01 0 01-1.602.215l-1.458-1.834a1.503 1.503 0 00-1.905-.48l-1.942.846a1.01 1.01 0 01-1.332-.613l-.635-1.85a1.503 1.503 0 00-1.62-.977l-2.13.315a1.01 1.01 0 01-1.144-.897l-.243-2.147c-.082-.724-.61-1.246-1.34-1.343l-2.052-.274a1.013 1.013 0 01-1.39-1.402l.245-2.041c.082-.684-.465-1.207-1.34-1.282l-2.126-.226c-.77-.082-1.449.443-1.702 1.176l-.711 2.066a1.012 1.012 0 01-.644.644zM12 15a3 3 0 100-6 3 3 0 000 6z"
    }
];

const UNLOCK_KEY = 'gforce_report_unlocked';

// Main initialization
window.addEventListener('DOMContentLoaded', () => {
    // 1. Capture UTM parameters for forwarding
    const urlParams = new URLSearchParams(window.location.search);
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const activeUtms = {};
    
    utms.forEach(param => {
        if (urlParams.get(param)) {
            activeUtms[param] = urlParams.get(param);
        }
    });

    // 2. Forward UTMs to all assessment links
    if (Object.keys(activeUtms).length > 0) {
        const queryString = new URLSearchParams(activeUtms).toString();
        document.querySelectorAll('a[href*="docs.google.com/forms"]').forEach(link => {
            const separator = link.href.includes('?') ? '&' : '?';
            link.href += separator + queryString;
        });
    }

    // 3. Track all outbound link clicks + Tag social/main site links
    document.querySelectorAll('a').forEach(link => {
        const href = link.href;
        
        // Tag main site and social links with funnel source for their analytics
        if (href.includes('theyard.sg') || href.includes('instagram.com') || href.includes('facebook.com')) {
            if (!href.includes('#') && !href.includes('utm_source')) {
                const separator = href.includes('?') ? '&' : '?';
                link.href += separator + 'utm_source=gforce_funnel&utm_medium=referral&utm_campaign=lcc_2026';
            }
        }

        link.addEventListener('click', (e) => {
            const href = link.href;
            if (href && (href.startsWith('http') || href.includes('wa.me'))) {
                trackClick(href, link.innerText || 'Icon Link');
            }
        });
    });

    // Check if user has already unlocked the report
    if (localStorage.getItem(UNLOCK_KEY) === 'true') {
        revealReport(false); 
    }
});

function trackClick(url, label) {
    if (typeof gtag === 'function') {
        gtag('event', 'click_outbound', {
            'event_category': 'Outbound Links',
            'event_label': label.trim(),
            'destination_url': url
        });
    }
}

document.getElementById('gforce-lead-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    // UI Feedback
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');
    loadingSpinner.classList.remove('hidden');

    const formData = new FormData(this);
    const urlParams = new URLSearchParams(window.location.search);
    const data = {
        parentName: formData.get('parentName'),
        email: formData.get('email'),
        childName: formData.get('childName') || 'N/A',
        childAge: formData.get('childAge') || 'N/A',
        utm_source: urlParams.get('utm_source') || 'direct',
        utm_medium: urlParams.get('utm_medium') || 'none',
        utm_campaign: urlParams.get('utm_campaign') || 'none',
        timestamp: new Date().toISOString()
    };

    try {
        // 1. Send data to Google Sheets (Hidden Form Method)
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzQG_y18OM9FfdveUsQvxROhSwoBozDR5JFhV93tq2XcY9xtE1_Y6XBRr-ycNXZhIej/exec';
        
        if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_URL')) {
            const testForm = document.createElement('form');
            testForm.method = 'POST';
            testForm.action = GOOGLE_SCRIPT_URL;
            testForm.target = 'hidden_iframe';
            
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'json_data';
            input.value = JSON.stringify(data);
            testForm.appendChild(input);
            
            if (!document.getElementById('hidden_iframe')) {
                const iframe = document.createElement('iframe');
                iframe.id = 'hidden_iframe';
                iframe.name = 'hidden_iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }
            
            document.body.appendChild(testForm);
            testForm.submit();
            setTimeout(() => { if (testForm.parentNode) document.body.removeChild(testForm); }, 1000);
        }

        // 2. Remember the unlock
        localStorage.setItem(UNLOCK_KEY, 'true');

        // 3. Reveal the report
        revealReport(true);

    } catch (error) {
        console.warn('Transmission error:', error);
        // We still reveal the report so we don't block the user if Google is slow
        localStorage.setItem(UNLOCK_KEY, 'true');
        revealReport(true);
    }
    
    // 4. Trigger GA4 Lead Event
    if (typeof gtag === 'function') {
        // Capture UTMs for the event
        const urlParams = new URLSearchParams(window.location.search);
        gtag('event', 'generate_lead', {
            'event_category': 'Leads',
            'event_label': 'G-Force Science Report Reveal',
            'source': urlParams.get('utm_source') || 'direct',
            'medium': urlParams.get('utm_medium') || 'none',
            'campaign': urlParams.get('utm_campaign') || 'none'
        });
    }
});

function revealReport(shouldScroll) {
    const formSection = document.getElementById('lead-form-section');
    const reportSection = document.getElementById('science-report');
    
    renderFacts();
    
    formSection.classList.add('hidden');
    reportSection.style.display = 'block';
    
    // Staggered Reveal Animation
    const cards = document.querySelectorAll('.fact-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('reveal-active');
        }, i * 150); // 150ms delay between each card
    });
    
    if (shouldScroll) {
        fireConfetti();
        window.scrollTo({ top: reportSection.offsetTop - 50, behavior: 'smooth' });
    }
}

function fireConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        colors: ['#da0d20', '#f2cd00', '#00519d'], // Branded Red, Gold, Azure
        zIndex: 1000
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

function renderFacts() {
    const container = document.getElementById('facts-container');
    let html = '';
    
    facts.forEach((fact, index) => {
        // Add Fact Card
        html += `
            <div class="fact-card glass-panel p-8 rounded-2xl gold-border flex flex-col h-full cursor-pointer relative overflow-hidden opacity-0 group" 
                 onclick="analyzeCard(this)">
                <div class="scan-line"></div>
                <div class="flex items-center gap-5 mb-6">
                    <div class="icon-box w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#00519d]/20 text-[#f2cd00] transition-all duration-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${fact.icon}"></path>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-black text-xl text-white leading-tight uppercase tracking-tight">${fact.title}</h4>
                        <span class="analyzed-badge opacity-0 text-[9px] font-black text-[#f2cd00] tracking-widest uppercase transition-opacity">Data Revealed ✓</span>
                    </div>
                </div>
                <div class="discovery-grid flex-grow min-h-[100px]">
                    <p class="question-text text-white text-base font-semibold leading-relaxed transition-all duration-500">
                        ${fact.question}
                    </p>
                    <p class="fact-text text-gray-400 text-base font-semibold leading-relaxed">
                        ${fact.fact}
                    </p>
                </div>
                <div class="mt-6 flex items-center gap-2 text-[#f2cd00] text-[10px] font-bold uppercase tracking-widest group-[.analyzed]:hidden">
                    <span class="w-2 h-2 bg-[#f2cd00] rounded-full animate-pulse"></span>
                    Tap to Discover
                </div>
            </div>
        `;

        // Insert Mid-Point CTA after Fact #5
        if (index === 4) {
            html += `
                <div class="col-span-full my-12 opacity-0 reveal-active" style="animation-delay: 800ms">
                    <div class="glass-panel p-10 rounded-3xl border-2 border-[#da0d20]/30 bg-gradient-to-br from-black to-[#da0d20]/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div class="text-center md:text-left">
                            <h3 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Ready to Benchmark?</h3>
                            <p class="text-gray-400 max-w-md">Secure a private technical evaluation to identify your child's high-performance markers.</p>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkpTp72hoSPIq3kH-0-DsRVfvIg9mrXrjHt6gzkrZZIlWVbg/viewform" target="_blank" 
                           class="w-full md:w-auto px-10 py-5 red-gradient rounded-full font-black text-white text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-red-900/40 text-center">
                            Fast-Track Assessment
                        </a>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

function analyzeCard(card) {
    if (card.classList.contains('scanning')) return;
    
    const isAnalyzed = card.classList.contains('analyzed');
    
    // Add scanning effect
    card.classList.add('scanning');
    
    // Haptic-style feedback
    card.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        card.style.transform = '';
        card.classList.remove('scanning');
        
        if (isAnalyzed) {
            card.classList.remove('analyzed');
        } else {
            card.classList.add('analyzed');
        }
    }, 800);
}
