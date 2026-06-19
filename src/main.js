// CHAKRONIX Principal Frontend Controller v2026.06

document.addEventListener("DOMContentLoaded", () => {
  console.log("CHAKRONIX Student Initiative Platform Initialized successfully.");

  // ==========================================
  // 0. INTERACTIVE PARTICLE CANVAS SYSTEM
  // ==========================================
  const canvas = document.getElementById("hero-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 35;
    let mouse = { x: null, y: null, radius: 140 };

    // Resize handler
    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse coordinates tracker
    const heroSec = document.getElementById("hero");
    if (heroSec) {
      heroSec.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      });
      heroSec.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
      });
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 2 + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(11, 83, 117, 0.18)";
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Interaction with mouse pointer
        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = dx / distance;
            let directionY = dy / distance;
            this.x += directionX * force * 1.2;
            this.y += directionY * force * 1.2;
          }
        }
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 110) {
            let opacity = 1 - (distance / 110);
            ctx.strokeStyle = `rgba(11, 83, 117, ${opacity * 0.08})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ==========================================
  // 0.2. DYNAMIC HOVER COPY COGNITIVE SYSTEM
  // ==========================================
  const defaultCopy = {
    title: 'Architect Your <br /><span class="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-indigo-600 to-emerald-600">Masterpiece.</span>',
    desc: 'Transform your final-year engineering ideas into industry-grade prototypes. We provide full funding, corporate lab hardware, and dedicated engineering mentorship.',
    features: [
      'Full hardware kit sponsorship',
      '1-on-1 corporate engineer guides',
      'Viva review & paper support',
      'Placement placement alignment'
    ],
    hudTitle: 'CHAKRONIX CONSOLE OVERVIEW',
    hudStatus: 'MONITOR ACTIVE',
    leftTelemetry: 'INITIATIVE MATRIX',
    rightTelemetry: 'NOMINAL READY',
    bootLog: '[NEXUS] Awaiting card hover target selection...',
    compLog: '[READY] System overview logs online.'
  };

  const deptCopy = {
    ece: {
      title: 'ECE final year projects, <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-teal to-cyan-500">engineered to impress.</span>',
      desc: 'Chakronix builds industry-ready IEEE & non-IEEE projects for ECE students — focusing on IoT, VLSI, and Embedded Systems with source code, hardware kits, documentation, and one-to-one mentoring from idea to viva.',
      features: [
        'Source Code & Docs',
        'IoT/ESP32 Hardware',
        '1-on-1 Mentoring'
      ],
      hudTitle: 'CHAKRONIX CONSOLE ECE_IOT',
      hudStatus: 'SENSOR_LINK: NOMINAL',
      leftTelemetry: 'NODE_MCU ONLINE',
      rightTelemetry: 'DATA_SYNC 12ms',
      bootLog: '[NEXUS] Initializing ECE IoT dashboard websocket...',
      compLog: '[READY] Real-time sensor data streaming: ACTIVE.'
    },
    cse: {
      title: 'CSE final year projects, <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-teal to-indigo-600">engineered to impress.</span>',
      desc: 'Chakronix builds industry-ready IEEE & non-IEEE projects for CSE students — focusing on AI, Machine Learning, and Web Apps with source code, documentation, and one-to-one mentoring from idea to viva.',
      features: [
        'Source Code & Docs',
        'AI/ML Integrations',
        '1-on-1 Mentoring'
      ],
      hudTitle: 'CHAKRONIX CONSOLE CSE_WEB',
      hudStatus: 'API_GATEWAY: STABLE',
      leftTelemetry: 'REACT_APP RUNNING',
      rightTelemetry: 'DB_LATENCY 8ms',
      bootLog: '[NEXUS] Booting CSE full-stack web environment...',
      compLog: '[READY] Application programming interfaces: ONLINE.'
    },
    eee: {
      title: 'EEE final year projects, <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-teal to-emerald-600">engineered to impress.</span>',
      desc: 'Chakronix builds industry-ready IEEE & non-IEEE projects for EEE students — focusing on Power Electronics, Smart Grids, and EV systems with source code, hardware, documentation, and one-to-one mentoring from idea to viva.',
      features: [
        'Source Code & Docs',
        'Grid/Motor Hardware',
        '1-on-1 Mentoring'
      ],
      hudTitle: 'CHAKRONIX CONSOLE EEE_GRID',
      hudStatus: 'GRID_SYNC: 99.8%',
      leftTelemetry: 'POWER_METRICS LOADED',
      rightTelemetry: 'EFFICIENCY 96.2%',
      bootLog: '[NEXUS] Connecting EEE grid monitoring dashboard...',
      compLog: '[READY] Power consumption analytics: LIVE.'
    }
  };

  const heroLeftContent = document.getElementById("hero-left-content");
  const heroTitle = document.getElementById("hero-title");
  const heroDesc = document.getElementById("hero-desc");
  const heroFeatures = document.getElementById("hero-features");
  
  const heroHUDTitle = document.getElementById("hero-hud-title");
  const heroHUDStatus = document.getElementById("hero-hud-status");
  const heroTelemetryLeft = document.getElementById("hero-telemetry-left");
  const heroTelemetryRight = document.getElementById("hero-telemetry-right");
  const heroTerminalConsole = document.getElementById("hero-terminal-console");

  const heroOscilloscopeWave = document.getElementById("hero-oscilloscope-wave");
  const heroOscilloscopeVal = document.getElementById("hero-oscilloscope-val");
  const heroCalibrationSlider = document.getElementById("hero-calibration-slider");
  const heroSliderDisplayVal = document.getElementById("hero-slider-display-val");

  let calibrationMultiplier = 1.0;
  let oscilloscopeTime = 0;
  let hoverTimeout = null;

  function printHeroLog(text, colorClass = "text-slate-500") {
    if (heroTerminalConsole) {
      const logLine = document.createElement("div");
      logLine.className = colorClass;
      logLine.textContent = text;
      heroTerminalConsole.appendChild(logLine);
      
      while (heroTerminalConsole.children.length > 3) {
        heroTerminalConsole.removeChild(heroTerminalConsole.firstChild);
      }
      heroTerminalConsole.scrollTop = heroTerminalConsole.scrollHeight;
    }
  }

  function updateLeftPane(data) {
    if (heroLeftContent) {
      heroLeftContent.classList.remove("content-visible");
      heroLeftContent.classList.add("content-hidden");
      
      setTimeout(() => {
        if (heroTitle) heroTitle.innerHTML = data.title;
        if (heroDesc) heroDesc.textContent = data.desc;
        if (heroFeatures) {
          heroFeatures.innerHTML = data.features.map(f => `<span class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100/80 backdrop-blur-sm border border-slate-200/50 text-slate-600 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-sm"><span class="text-brand-teal">✓</span> ${f}</span>`).join("");
        }
        
        heroLeftContent.classList.remove("content-hidden");
        heroLeftContent.classList.add("content-visible");
      }, 200);
    }
  }

  function updateConsoleHUD(data) {
    if (heroHUDTitle) heroHUDTitle.textContent = data.hudTitle;
    if (heroHUDStatus) heroHUDStatus.textContent = data.hudStatus;
    if (heroTelemetryLeft) heroTelemetryLeft.textContent = data.leftTelemetry;
    if (heroTelemetryRight) heroTelemetryRight.textContent = data.rightTelemetry;
    
    printHeroLog(data.bootLog, "text-slate-500");
    setTimeout(() => {
      printHeroLog(data.compLog, "text-emerald-400 font-bold");
    }, 300);
  }

  const heroTabs = document.querySelectorAll(".hero-select-btn");
  const showcaseImgs = document.querySelectorAll(".hero-bg-showcase-img");
  const overlayCode = document.getElementById("hud-overlay-dept-code");

  function switchActiveShowcase(dept) {
    // Crossfade showcase background images
    showcaseImgs.forEach(img => {
      if (img.id === `showcase-img-${dept}`) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });

    // Update overlay code tag
    if (overlayCode) {
      if (dept === "ece") overlayCode.textContent = "ECE_SIM_V9";
      else if (dept === "cse") overlayCode.textContent = "CSE_AI_V2";
      else if (dept === "eee") overlayCode.textContent = "EEE_GRID_V4";
    }

    // Toggle tab active styles
    heroTabs.forEach(tab => {
      const tabDept = tab.getAttribute("data-dept");
      tab.classList.remove("active-ece", "active-cse", "active-eee");
      const dot = tab.querySelector("span");
      if (dot) dot.className = "w-1.5 h-1.5 rounded-full bg-slate-400";
      
      if (tabDept === dept) {
        tab.classList.add(`active-${dept}`);
        if (dot) {
          if (dept === "ece") dot.className = "w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse";
          else if (dept === "cse") dot.className = "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse";
          else if (dept === "eee") dot.className = "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse";
        }
      }
    });
  }

  // Automatic slideshow variables
  let activeDeptIndex = 0; // Starts with EEE active on load
  const depts = ["eee", "ece", "cse"];
  let isUserInteracting = false;

  // Sync initial tab highlights
  switchActiveShowcase("eee");

  function showDepartment(dept) {
    activeDeptIndex = depts.indexOf(dept);
    
    // Update left text pane and right-side showcase image
    if (deptCopy[dept]) {
      updateLeftPane(deptCopy[dept]);
      updateConsoleHUD(deptCopy[dept]);
      switchActiveShowcase(dept);
      
      if (dept === "ece") calibrationMultiplier = 2.8;
      else if (dept === "cse") calibrationMultiplier = 1.8;
      else if (dept === "eee") calibrationMultiplier = 0.8;
    }
  }

  // Start single interval loop
  setInterval(() => {
    if (!isUserInteracting) {
      activeDeptIndex = (activeDeptIndex + 1) % depts.length;
      const nextDept = depts[activeDeptIndex];
      showDepartment(nextDept);
    }
  }, 5000);

  // Handle interactions with tabs
  heroTabs.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      isUserInteracting = true;
      const dept = tab.getAttribute("data-dept");
      showDepartment(dept);
    });
    
    tab.addEventListener("mouseleave", () => {
      isUserInteracting = false;
    });
  });

  // Handle interactions with left copy content to pause slideshow during reading
  const leftContentWrapper = document.getElementById("hero-left-content");
  if (leftContentWrapper) {
    leftContentWrapper.addEventListener("mouseenter", () => {
      isUserInteracting = true;
    });
    leftContentWrapper.addEventListener("mouseleave", () => {
      isUserInteracting = false;
    });
  }

  // ==========================================
  // 0.3. DYNAMIC STATS COUNTER UP
  // ==========================================
  function animateStatsCounter() {
    const stats = [
      { id: "stat-grant", suffix: "₹", divideFactor: 1000, suffixEnd: "K" },
      { id: "stat-nodes", suffix: "", divideFactor: 1, suffixEnd: "+" },
      { id: "stat-teams", suffix: "", divideFactor: 1, suffixEnd: "+" }
    ];

    stats.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        const target = parseInt(el.getAttribute("data-val"));
        let current = 0;
        const duration = 1500; // 1.5s
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;
        
        let counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(counter);
            current = target;
          }
          
          if (item.divideFactor > 1) {
            el.textContent = `${item.suffix}${Math.round(current / item.divideFactor)}${item.suffixEnd}`;
          } else {
            el.textContent = `${item.suffix}${Math.round(current)}${item.suffixEnd}`;
          }
        }, stepTime);
      }
    });
  }
  // Run on page load
  setTimeout(animateStatsCounter, 200);

  // Slider change handler
  if (heroCalibrationSlider) {
    heroCalibrationSlider.addEventListener("input", (e) => {
      calibrationMultiplier = parseFloat(e.target.value);
      if (heroSliderDisplayVal) {
        heroSliderDisplayVal.textContent = `${calibrationMultiplier.toFixed(2)}x CALIB`;
      }
      if (heroOscilloscopeVal) {
        heroOscilloscopeVal.textContent = `FREQ: ${(1.0 * calibrationMultiplier).toFixed(2)}Hz`;
      }
      if (Math.random() > 0.7) {
        printHeroLog(`[CALIB] Calibration tuning bias modified to: ${calibrationMultiplier.toFixed(2)}x.`, "text-brand-gold");
      }
    });
  }

  // Draw oscilloscope waveform loop
  function drawHeroOscilloscope() {
    if (heroOscilloscopeWave) {
      oscilloscopeTime += 0.05 * calibrationMultiplier;
      
      const width = 200;
      const height = 60;
      const midY = height / 2;
      const points = [];
      
      for (let x = 0; x <= width; x += 2) {
        const angle = (x / width) * Math.PI * 4 * calibrationMultiplier + oscilloscopeTime;
        const amplitude = 18 * Math.sin(angle) * Math.cos(angle * 0.5);
        const y = midY + amplitude;
        points.push(`${x},${y}`);
      }
      
      const d = `M ${points.join(" L ")}`;
      heroOscilloscopeWave.setAttribute("d", d);
    }
    requestAnimationFrame(drawHeroOscilloscope);
  }
  drawHeroOscilloscope();

  // ==========================================
  // 1. SCROLL PROGRESS & NAVBAR COMPONENT
  // ==========================================
  const scrollIndicator = document.getElementById("scroll-indicator");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  
  // Mobile navbar selectors
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    // Scroll progress indicator
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollIndicator) {
      scrollIndicator.style.width = `${scrolled}%`;
    }

    // Glass navbar height, width & shadow/glow adjustment on scroll
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.remove("top-6", "container", "bg-white/70", "border-slate-200/50", "shadow-premium");
        navbar.classList.add("top-2", "max-w-7xl", "border-brand-teal/20", "shadow-[0_10px_30px_rgba(4,80,112,0.08)]");
      } else {
        navbar.classList.remove("top-2", "max-w-7xl", "border-brand-teal/20", "shadow-[0_10px_30px_rgba(4,80,112,0.08)]");
        navbar.classList.add("top-6", "container", "bg-white/70", "border-slate-200/50", "shadow-premium");
      }
    }
  });

  // Mobile menu toggle logic
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      const isExpanded = mobileMenu.classList.contains("mobile-menu-active");
      
      if (isExpanded) {
        // Close menu
        mobileMenu.classList.remove("mobile-menu-active");
        mobileMenu.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300);
        // Hamburger icon back to normal
        if (hamburgerIcon) {
          hamburgerIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />`;
          hamburgerIcon.classList.remove("rotate-90");
        }
      } else {
        // Open menu
        mobileMenu.classList.remove("hidden");
        // Trigger reflow/animation
        void mobileMenu.offsetWidth;
        mobileMenu.classList.add("mobile-menu-active");
        mobileMenu.classList.remove("scale-95", "opacity-0");
        // Cross icon
        if (hamburgerIcon) {
          hamburgerIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`;
          hamburgerIcon.classList.add("rotate-90");
        }
      }
    });

    // Close menu when clicking links
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu-active");
        mobileMenu.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300);
        if (hamburgerIcon) {
          hamburgerIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />`;
          hamburgerIcon.classList.remove("rotate-90");
        }
      });
    });
  }

  // Active section high-lighting in navigation links
  const sections = document.querySelectorAll("section");
  const navObserverOptions = {
    root: null,
    rootMargin: "-25% 0px -25% 0px",
    threshold: 0.1,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("text-brand-teal", "font-bold");
          link.classList.add("text-slate-500");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.remove("text-slate-500");
            link.classList.add("text-brand-teal", "font-bold");
          }
        });
        mobileNavLinks.forEach((link) => {
          link.classList.remove("text-brand-teal", "font-bold");
          link.classList.add("text-slate-600");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.remove("text-slate-600");
            link.classList.add("text-brand-teal", "font-bold");
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach((section) => navObserver.observe(section));

  // ==========================================
  // 1.2. INTERACTIVE QUANTUM LAB HUD CONTROLLER
  // ==========================================
  const hudSelectorCse = document.getElementById("hud-selector-cse");
  const hudSelectorEce = document.getElementById("hud-selector-ece");
  const hudSelectorEee = document.getElementById("hud-selector-eee");
  
  const hudViewCse = document.getElementById("hud-view-cse");
  const hudViewEce = document.getElementById("hud-view-ece");
  const hudViewEee = document.getElementById("hud-view-eee");

  const hudSliderInput = document.getElementById("hud-slider-input");
  const hudSliderVal = document.getElementById("hud-slider-val font-mono") || document.getElementById("hud-slider-val");
  const hudTerminalLogs = document.getElementById("hud-terminal-logs");
  
  const heroSection = document.getElementById("hero");

  let activeHUDBranch = "CSE"; // Default active branch

  // Helper function to append terminal logs
  function printHUDLog(text, isSuccess = false) {
    if (hudTerminalLogs) {
      const logLine = document.createElement("div");
      logLine.textContent = text;
      if (isSuccess) {
        logLine.className = "text-emerald-400 font-bold";
      } else if (text.startsWith("[ERR]")) {
        logLine.className = "text-rose-500 font-bold animate-pulse";
      } else if (text.startsWith("[SYS]") || text.startsWith("[BOOT]")) {
        logLine.className = "text-slate-500";
      } else {
        logLine.className = "text-cyan-400";
      }
      hudTerminalLogs.appendChild(logLine);
      
      // Limit console buffer to 5 lines to fit container
      while (hudTerminalLogs.children.length > 5) {
        hudTerminalLogs.removeChild(hudTerminalLogs.firstChild);
      }
      hudTerminalLogs.scrollTop = hudTerminalLogs.scrollHeight;
    }
  }

  // Real-time mouse movement spotlight follow effect on Hero backdrop
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroSection.style.setProperty("--mouse-x", `${x}px`);
      heroSection.style.setProperty("--mouse-y", `${y}px`);
    });
  }

  // Branch selector handler
  function switchHUDBranch(branch) {
    activeHUDBranch = branch;
    
    // Toggle active selector buttons styling
    const selectors = [
      { id: "CSE", btn: hudSelectorCse, view: hudViewCse },
      { id: "ECE", btn: hudSelectorEce, view: hudViewEce },
      { id: "EEE", btn: hudSelectorEee, view: hudViewEee }
    ];

    selectors.forEach((sel) => {
      if (sel.id === branch) {
        if (sel.btn) {
          sel.btn.classList.add("active", "border-cyan-500/35", "bg-cyan-950/20", "text-white");
          sel.btn.classList.remove("border-white/5", "bg-white/5", "text-slate-400");
          
          // Switch selector dot class
          const dot = sel.btn.querySelector(".hud-status-dot");
          if (dot) {
            dot.className = "hud-status-dot relative flex h-2 w-2";
            dot.innerHTML = `<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>`;
          }
          const titleLabel = sel.btn.querySelector(".font-mono");
          if (titleLabel) titleLabel.classList.add("text-cyan-400");
        }
        if (sel.view) sel.view.classList.remove("hidden");
      } else {
        if (sel.btn) {
          sel.btn.classList.remove("active", "border-cyan-500/35", "bg-cyan-950/20", "text-white");
          sel.btn.classList.add("border-white/5", "bg-white/5", "text-slate-400");
          
          const dot = sel.btn.querySelector(".hud-status-dot");
          if (dot) {
            dot.className = "hud-status-dot w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-500/50 transition-colors";
            dot.innerHTML = "";
          }
          const titleLabel = sel.btn.querySelector(".font-mono");
          if (titleLabel) titleLabel.classList.remove("text-cyan-400");
        }
        if (sel.view) sel.view.classList.add("hidden");
      }
    });

    // Flashing debugger screen simulation
    printHUDLog(`[SYS] Core diagnostic parameters changed to: ${branch}_TRACK.`);
    
    // Simulate terminal compilation logs
    if (branch === "CSE") {
      printHUDLog("[BOOT] CSE stack loaded: app, API, database, AI module.");
      setTimeout(() => printHUDLog("[PLAN] Dashboard screens and model workflow mapped.", false), 200);
      setTimeout(() => printHUDLog("[SUCCESS] CSE demo path ready for proposal review.", true), 400);
    } else if (branch === "ECE") {
      printHUDLog("[BOOT] ECE stack loaded: sensors, controller, PCB, communication.");
      setTimeout(() => printHUDLog("[TEST] Signal flow and measurement blocks verified.", false), 200);
      setTimeout(() => printHUDLog("[SUCCESS] ECE prototype path ready for proposal review.", true), 400);
    } else if (branch === "EEE") {
      printHUDLog("[BOOT] EEE stack loaded: load, relay, metering, controller.");
      setTimeout(() => printHUDLog("[TEST] Power flow and safety checkpoints verified.", false), 200);
      setTimeout(() => printHUDLog("[SUCCESS] EEE demo path ready for proposal review.", true), 400);
    }

    // Refresh telemetry based on current slider setting
    updateHUDTelemetry();
  }

  // Hook up event listeners for selector buttons
  if (hudSelectorCse) hudSelectorCse.addEventListener("click", () => switchHUDBranch("CSE"));
  if (hudSelectorEce) hudSelectorEce.addEventListener("click", () => switchHUDBranch("ECE"));
  if (hudSelectorEee) hudSelectorEee.addEventListener("click", () => switchHUDBranch("EEE"));

  // Real-time telemetry calibration updates based on slider value
  function updateHUDTelemetry() {
    if (!hudSliderInput) return;
    const val = parseFloat(hudSliderInput.value);
    
    // Update value indicator label
    if (hudSliderVal) {
      hudSliderVal.textContent = `VAL: ${val.toFixed(2)}x`;
    }

    if (activeHUDBranch === "CSE") {
      const moduleVal = Math.round(5 * val);
      const completionVal = Math.min(98, Math.round(68 * val));
      
      const densitySpan = document.getElementById("hud-cse-density");
      const latencySpan = document.getElementById("hud-cse-latency");
      
      if (densitySpan) densitySpan.textContent = `MODULES: ${moduleVal.toString().padStart(2, "0")}`;
      if (latencySpan) latencySpan.textContent = `COMPLETION: ${completionVal}%`;
      
    } else if (activeHUDBranch === "ECE") {
      const signalVal = Math.round(8 * val);
      const stabilityVal = Math.min(99, Math.round(92 * val));
      
      const clockSpan = document.getElementById("hud-ece-clock");
      const voltageSpan = document.getElementById("hud-ece-voltage");
      
      if (clockSpan) clockSpan.textContent = `SIGNALS: ${signalVal.toString().padStart(2, "0")}`;
      if (voltageSpan) voltageSpan.textContent = `STABILITY: ${stabilityVal}%`;
      
    } else if (activeHUDBranch === "EEE") {
      const wattsVal = Math.round(240 * val);
      const efficiencyVal = Math.min(96, Math.round(89 * val));
      
      const wattsSpan = document.getElementById("hud-eee-watts");
      const efficiencySpan = document.getElementById("hud-eee-efficiency");
      
      if (wattsSpan) wattsSpan.textContent = `LOAD: ${wattsVal} W`;
      if (efficiencySpan) efficiencySpan.textContent = `EFFICIENCY: ${efficiencyVal}%`;

      // Update smart grid waveform dynamically by altering SVG path curve heights
      const wavePath = document.getElementById("hud-eee-wave-path");
      const waveDashed = document.getElementById("hud-eee-wave-dashed");
      
      if (wavePath && waveDashed) {
        const h1 = 20 - (15 * val);
        const h2 = 20 + (15 * val);
        
        // Draw modified sine wave paths matching the frequency/amplitude multiplier
        const newD = `M 0,20 Q 12.5,${h1} 25,20 T 50,20 T 75,20 T 100,20`;
        const newDashed = `M 0,20 Q 12.5,${h2} 25,20 T 50,20 T 75,20 T 100,20`;
        
        wavePath.setAttribute("d", newD);
        waveDashed.setAttribute("d", newDashed);
      }
    }
  }

  // Hook up event listener for slider input
  if (hudSliderInput) {
    hudSliderInput.addEventListener("input", () => {
      updateHUDTelemetry();
      
      // Print micro logs on calibration changes
      const val = parseFloat(hudSliderInput.value);
      if (Math.random() > 0.8) {
        printHUDLog(`[CALIB] Prototype complexity adjusted to: ${val.toFixed(2)}x.`);
      }
    });
  }

  // Trigger default logs sequence on boot
  setTimeout(() => {
    printHUDLog("[SYS] CSE, ECE, and EEE project paths synced.", false);
  }, 1000);



  // ==========================================
  // 3. HARDWARE SHOWCASE EXPLODED LAYER INTERACTIVES
  // ==========================================
  const specCards = document.querySelectorAll(".spec-item-card");
  const blueprintLayers = document.querySelectorAll(".blueprint-layer");

  function highlightLayer(layerId) {
    blueprintLayers.forEach((layer) => {
      // Toggle active class for horizontal accordion panels
      if (layer.id === `blueprint-${layerId}`) {
        layer.classList.add("active");
        if (layerId === "layer-die") {
          layer.style.borderColor = "#045070";
          layer.style.boxShadow = "0 10px 30px rgba(4, 80, 112, 0.25)";
        } else if (layerId === "layer-bus") {
          layer.style.borderColor = "#F5B422";
          layer.style.boxShadow = "0 10px 30px rgba(245, 180, 34, 0.25)";
        } else if (layerId === "layer-carrier") {
          layer.style.borderColor = "#059669";
          layer.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.25)";
        } else if (layerId === "layer-robotics") {
          layer.style.borderColor = "#4f46e5";
          layer.style.boxShadow = "0 10px 30px rgba(79, 70, 229, 0.25)";
        } else if (layerId === "layer-energy") {
          layer.style.borderColor = "#d97706";
          layer.style.boxShadow = "0 10px 30px rgba(217, 119, 6, 0.25)";
        }
      } else {
        layer.classList.remove("active");
        layer.style.borderColor = "";
        layer.style.boxShadow = "";
      }
    });
  }

  function resetLayers() {
    blueprintLayers.forEach((layer) => {
      layer.classList.remove("active");
      layer.style.borderColor = "";
      layer.style.boxShadow = "";
    });
  }

  // Enable hover-only expansion on accordion panels.
  // Default: all panels stay collapsed until hovered.
  const accordionContainer = document.getElementById("chip-blueprint-container");

  function activateLayer(layerId) {
    blueprintLayers.forEach((layer) => {
      const lid = layer.id.replace("blueprint-", "");
      if (lid === layerId) {
        layer.classList.add("active");
        // Sync left-side spec cards
        const matchedCard = document.querySelector(`.spec-item-card[data-highlight-layer="${lid}"]`);
        if (matchedCard) {
          specCards.forEach((c) => c.classList.remove("active", "border-brand-teal/40", "bg-white"));
          matchedCard.classList.add("active", "border-brand-teal/40", "bg-white");
        }
        // Apply colored border/shadow
        if (lid === "layer-die") {
          layer.style.borderColor = "#045070";
          layer.style.boxShadow = "0 10px 30px rgba(4, 80, 112, 0.25)";
        } else if (lid === "layer-bus") {
          layer.style.borderColor = "#F5B422";
          layer.style.boxShadow = "0 10px 30px rgba(245, 180, 34, 0.25)";
        } else if (lid === "layer-carrier") {
          layer.style.borderColor = "#059669";
          layer.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.25)";
        } else if (lid === "layer-robotics") {
          layer.style.borderColor = "#4f46e5";
          layer.style.boxShadow = "0 10px 30px rgba(79, 70, 229, 0.25)";
        } else if (lid === "layer-energy") {
          layer.style.borderColor = "#d97706";
          layer.style.boxShadow = "0 10px 30px rgba(217, 119, 6, 0.25)";
        }
      } else {
        layer.classList.remove("active");
        layer.style.borderColor = "";
        layer.style.boxShadow = "";
      }
    });
  }

  // Set up hover triggers for linked cards and accordion panels.
  specCards.forEach((card) => {
    const targetLayer = card.getAttribute("data-highlight-layer");

    card.addEventListener("mouseenter", () => {
      activateLayer(targetLayer);
    });

    card.addEventListener("mouseleave", () => {
      resetLayers();
      specCards.forEach((c) => c.classList.remove("active", "border-brand-teal/40", "bg-white"));
    });
  });

  // Hover triggers on each accordion panel
  blueprintLayers.forEach((layer) => {
    const layerId = layer.id.replace("blueprint-", "");

    layer.addEventListener("mouseenter", () => {
      activateLayer(layerId);
    });

    layer.addEventListener("mouseleave", () => {
      resetLayers();
      specCards.forEach((c) => c.classList.remove("active", "border-brand-teal/40", "bg-white"));
    });
  });

  // When mouse leaves the entire accordion container, collapse every panel.
  if (accordionContainer) {
    accordionContainer.addEventListener("mouseleave", () => {
      resetLayers();
      specCards.forEach((c) => c.classList.remove("active", "border-brand-teal/40", "bg-white"));
    });
  }


  // ==========================================
  // 4. PROJECT FEASIBILITY SIMULATOR (SANDBOX)
  // ==========================================
  const sandboxSectorBtns = document.querySelectorAll(".sandbox-sector-btn");
  const voltageSlider = document.getElementById("voltage-bias-range");
  const voltageDisplay = document.getElementById("voltage-bias-display");
  const prescalerBtns = document.querySelectorAll(".prescaler-btn");
  
  const runDiagBtn = document.getElementById("run-diagnostics-trigger-btn");
  const spinnerIcon = document.getElementById("diagnostics-spinner-icon");
  const diagScreen = document.getElementById("diagnostics-console-screen");
  
  const latencyDisplay = document.getElementById("diagnostic-latency-val");
  const gaugeEffPath = document.getElementById("gauge-eff-path");
  const gaugeEffVal = document.getElementById("gauge-eff-val");
  const gaugeTempPath = document.getElementById("gauge-temp-path");
  const gaugeTempVal = document.getElementById("gauge-temp-val");
  const gaugeSyncPath = document.getElementById("gauge-sync-path");
  const gaugeSyncVal = document.getElementById("gauge-sync-val");

  let selectedSector = "ECE";
  let voltageBiasVal = 1.20;
  let scalerVal = 4;

  sandboxSectorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sandboxSectorBtns.forEach((b) => {
        b.classList.remove("border-brand-teal", "bg-brand-teal/5", "active-sector", "shadow-sm");
        b.classList.add("border-slate-200", "bg-[#F8FAFC]", "text-slate-600");
      });
      btn.classList.remove("border-slate-200", "bg-[#F8FAFC]", "text-slate-600");
      btn.classList.add("border-brand-teal", "bg-brand-teal/5", "active-sector", "shadow-sm");
      
      const sectorId = btn.id;
      if (sectorId.includes("ece")) {
        selectedSector = "ECE";
      } else if (sectorId.includes("eee")) {
        selectedSector = "EEE";
      } else if (sectorId.includes("cse")) {
        selectedSector = "CSE";
      }
      
      printToConsole(`[CONFIG] Active feasibility simulator track switched to: ${selectedSector}_TRACK.`);
    });
  });

  if (voltageSlider && voltageDisplay) {
    voltageSlider.addEventListener("input", (e) => {
      voltageBiasVal = parseFloat(e.target.value);
      voltageDisplay.textContent = `${voltageBiasVal.toFixed(2)}V`;
    });
  }

  prescalerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      prescalerBtns.forEach((b) => {
        b.classList.remove("border-brand-teal/30", "bg-brand-teal/5", "active-scaler", "shadow-sm");
        b.classList.add("border-slate-200", "bg-slate-50", "text-slate-600");
      });
      btn.classList.remove("border-slate-200", "bg-slate-50", "text-slate-600");
      btn.classList.add("border-brand-teal/30", "bg-brand-teal/5", "active-scaler", "shadow-sm");
      
      const label = btn.textContent;
      if (label.includes("x1")) scalerVal = 1;
      else if (label.includes("x2")) scalerVal = 2;
      else if (label.includes("x4")) scalerVal = 4;
      else if (label.includes("x8")) scalerVal = 8;
      
      printToConsole(`[CONFIG] Simulator Prescaler multiplier: x${scalerVal}_${label.split("_")[1]}.`);
    });
  });

  function printToConsole(text, colorClass = "text-slate-400") {
    if (diagScreen) {
      const logLine = document.createElement("div");
      logLine.className = colorClass;
      logLine.textContent = text;
      diagScreen.appendChild(logLine);
      diagScreen.scrollTop = diagScreen.scrollHeight;
    }
  }

  if (runDiagBtn) {
    runDiagBtn.addEventListener("click", () => {
      runDiagBtn.disabled = true;
      if (spinnerIcon) spinnerIcon.classList.remove("hidden");
      
      if (diagScreen) diagScreen.innerHTML = "";
      printToConsole(`CHAKRONIX Feasibility Testing Terminal v2026.06`, "text-slate-500");
      printToConsole(`Checking hardware compatibility for student final-year proposal...`, "text-slate-500");
      printToConsole(`------------------------------------------------------------`, "text-brand-gold font-bold");
      
      setTimeout(() => {
        printToConsole(`[INIT] Running physical parameters check under ${voltageBiasVal.toFixed(2)}V bias...`, "text-[#80CAFF]");
      }, 300);

      setTimeout(() => {
        printToConsole(`[TEST] Verifying compatibility criteria for: ${selectedSector}_TRACK...`, "text-[#80CAFF]");
      }, 700);

      if (selectedSector === "ECE") {
        setTimeout(() => {
          printToConsole(`[ECE] Testing sub-nanometer layout core densities...`, "text-[#80CAFF]");
        }, 1100);
        setTimeout(() => {
          printToConsole(`[ECE] Silicon clock gates compatible with 5.8 GHz frequency ranges.`, "text-brand-gold");
        }, 1500);
      }
      
      if (selectedSector === "EEE") {
        setTimeout(() => {
          printToConsole(`[EEE] Calculating grid shunts load compatibility index...`, "text-[#80CAFF]");
        }, 1100);
        setTimeout(() => {
          printToConsole(`[EEE] Load balancer limits aligned: 765 kV grid balanced.`, "text-brand-gold");
        }, 1500);
      }

      if (selectedSector === "CSE") {
        setTimeout(() => {
          printToConsole(`[CSE] Simulating edge AI compiled model memory capacities...`, "text-[#80CAFF]");
        }, 1100);
        setTimeout(() => {
          printToConsole(`[CSE] Neuromorphic firmware constraints nominal. 2.4B weights loadable.`, "text-brand-gold");
        }, 1500);
      }

      setTimeout(() => {
        const effDiff = Math.abs(1.20 - voltageBiasVal);
        let computedEff = Math.round(99 - (effDiff * 15) - Math.random() * 2);
        computedEff = Math.max(50, Math.min(100, computedEff));

        let computedTemp = Math.round(30 + (scalerVal * 3) + ((voltageBiasVal - 0.8) * 18) + Math.random() * 2);
        computedTemp = Math.max(25, Math.min(95, computedTemp));

        let computedSync = 100;
        if (scalerVal === 8) {
          computedSync = 97;
        } else if (scalerVal === 1) {
          computedSync = 100;
        } else {
          computedSync = Math.round(99 + Math.random() * 1);
        }

        const computedLatency = (0.05 + (scalerVal * 0.02) + (effDiff * 0.1)).toFixed(2);
        
        printToConsole(`[ANALYSIS] Analysis time: ${computedLatency} ms | Thermal load: ${computedTemp}°C | Feasibility: ${computedEff}%`, "text-emerald-400 font-bold");
        printToConsole(`[SUCCESS] Project configuration feasibility: nominal. Suitable for R&D lab testing.`, "text-emerald-400 font-black");

        if (latencyDisplay) latencyDisplay.textContent = `${computedLatency} ms`;
        
        if (gaugeEffPath && gaugeEffVal) {
          gaugeEffPath.setAttribute("stroke-dasharray", `${computedEff}, 100`);
          gaugeEffVal.textContent = `${computedEff}%`;
        }
        
        if (gaugeTempPath && gaugeTempVal) {
          gaugeTempPath.setAttribute("stroke-dasharray", `${computedTemp}, 100`);
          gaugeTempVal.textContent = `${computedTemp}°C`;
        }
        
        if (gaugeSyncPath && gaugeSyncVal) {
          gaugeSyncPath.setAttribute("stroke-dasharray", `${computedSync}, 100`);
          gaugeSyncVal.textContent = `${computedSync}%`;
        }

        runDiagBtn.disabled = false;
        if (spinnerIcon) spinnerIcon.classList.add("hidden");
      }, 2000);

    });
  }


  // ==========================================
  // 5. STUDENT PROPOSAL FORM HANDLER
  // ==========================================
  const proposalForm = document.getElementById("proposal-form");
  const successScreen = document.getElementById("proposal-success-screen");
  const successRef = document.getElementById("success-proposal-ref");
  const successResetBtn = document.getElementById("success-reset-btn");
  const submitBtn = document.getElementById("submit-proposal-btn");

  if (proposalForm) {
    proposalForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>REGISTERING TEAM PROPOSAL...</span>";
      }

      const leaderName = document.getElementById("leader-name").value;
      const leaderEmail = document.getElementById("leader-email").value;
      const track = document.getElementById("track-selection").value;
      const title = document.getElementById("project-title").value;

      setTimeout(() => {
        const hex = Math.floor(0x100000 + Math.random() * 0x900000).toString(16).toUpperCase();
        const refCode = `CHK-2026-${hex}`;

        if (successRef) successRef.textContent = `REF_ID: ${refCode}`;

        if (successScreen) {
          successScreen.classList.remove("opacity-0", "scale-95", "pointer-events-none");
          successScreen.classList.add("opacity-100", "scale-100");
        }

        printToConsole(`[PROPOSAL] New final-year proposal registered: "${title}"`, "text-emerald-400 font-bold");
        printToConsole(`[PROPOSAL] Leader: ${leaderName} (${leaderEmail}) | Track: ${track}_TRACK`, "text-slate-300");
        printToConsole(`[PROPOSAL] Ref ID code: ${refCode} synced with primary panel queue.`, "text-brand-gold");

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = "<span>SUBMIT PROJECT PROPOSAL</span>";
        }
      }, 1500);
    });
  }

  if (successResetBtn) {
    successResetBtn.addEventListener("click", () => {
      if (proposalForm) proposalForm.reset();
      
      if (successScreen) {
        successScreen.classList.remove("opacity-100", "scale-100");
        successScreen.classList.add("opacity-0", "scale-95", "pointer-events-none");
      }
    });
  }


  // ==========================================
  // 6. INTERACTIVE FAQ ACCORDION COMPONENT
  // ==========================================
  const faqToggles = document.querySelectorAll(".faq-toggle-btn");

  faqToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      const item = btn.parentElement;

      const isOpen = !answer.classList.contains("hidden");

      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.add("hidden");
        ans.style.maxHeight = "0px";
      });
      document.querySelectorAll(".faq-icon").forEach((ic) => {
        ic.textContent = "+";
        ic.style.transform = "rotate(0deg)";
      });
      document.querySelectorAll(".faq-item").forEach((it) => {
        it.classList.remove("border-brand-teal");
      });

      if (!isOpen) {
        answer.classList.remove("hidden");
        answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) {
          icon.textContent = "−";
          icon.style.transform = "rotate(180deg)";
        }
        item.classList.add("border-brand-teal");
      }
    });
  });


  // ==========================================
  // 7. WHATSAPP CONSOLE LOG REDIRECTION TRIGGER
  // ==========================================
  const whatsappBtns = document.querySelectorAll(".whatsapp-trigger-btn");

  whatsappBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      printToConsole(`[COMMUNICATION] WhatsApp chat redirection initialized for R&D query.`, "text-brand-gold font-bold");
      printToConsole(`[REDIRECT] Query: "Hi CHAKRONIX, I would like to know more about final year projects."`, "text-slate-300");
    });
  });

  // ==========================================
  // 8. NAVBAR SCROLLSPY
  // ==========================================
  const spySections = document.querySelectorAll("section[id]");
  const spyNavLinks = document.querySelectorAll("#desktop-nav .nav-link");

  const scrollSpyOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Trigger when section is around middle of screen
    threshold: 0.1
  };

  const scrollSpyCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        spyNavLinks.forEach(link => {
          link.classList.remove("text-brand-teal", "active");
          link.classList.add("text-slate-500", "hover:text-slate-900");
          
          const indicator = link.querySelector(".nav-indicator");
          if (indicator) {
            indicator.classList.remove("bg-brand-teal", "scale-x-100");
            indicator.classList.add("bg-slate-900", "scale-x-0", "group-hover:scale-x-100");
          }
        });

        // Add active class to corresponding link
        const targetId = entry.target.id;
        const activeLink = document.querySelector(`#desktop-nav a[href="#${targetId}"]`);
        
        if (activeLink) {
          activeLink.classList.remove("text-slate-500", "hover:text-slate-900");
          activeLink.classList.add("text-brand-teal", "active");
          
          const indicator = activeLink.querySelector(".nav-indicator");
          if (indicator) {
            indicator.classList.remove("bg-slate-900", "scale-x-0", "group-hover:scale-x-100");
            indicator.classList.add("bg-brand-teal", "scale-x-100");
          }
        }
      }
    });
  };

  const scrollSpyObserver = new IntersectionObserver(scrollSpyCallback, scrollSpyOptions);
  spySections.forEach(section => scrollSpyObserver.observe(section));

  // ==========================================
  // 9. COPY TO CLIPBOARD EMAIL TRIGGER
  // ==========================================
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "hello@chakronix.com";
      navigator.clipboard.writeText(email).then(() => {
        const tooltip = copyEmailBtn.querySelector(".copy-tooltip");
        if (tooltip) {
          tooltip.classList.add("show-tooltip");
          setTimeout(() => {
            tooltip.classList.remove("show-tooltip");
          }, 2000);
        }
        if (typeof printToConsole === "function") {
          printToConsole(`[COMMUNICATION] Email copied to clipboard: ${email}`, "text-brand-teal font-bold");
        }
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    });
  }

  // ==========================================
  // 10. INTERACTIVE FAQ TAB CONSOLE SWITCHER
  // ==========================================
  const faqTabBtns = document.querySelectorAll(".faq-tab-btn");
  const faqAnswerPanes = document.querySelectorAll(".faq-answer-pane");
  const faqTelemetryBadge = document.getElementById("faq-telemetry-badge");

  const telemetryBadges = {
    "1": "SUITABILITY",
    "2": "DELIVERABLES",
    "3": "GRANTS & BUDGET",
    "4": "VIVA INDEX"
  };

  faqTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-faq-index");
      
      // Update buttons active status
      faqTabBtns.forEach((b) => {
        b.classList.remove("active", "border-brand-teal/20", "text-slate-900", "shadow-soft");
        b.classList.add("border-slate-200/50", "bg-white/40", "text-slate-600");
        const dot = b.querySelector("span:last-child");
        if (dot) {
          dot.classList.remove("bg-brand-teal");
          dot.classList.add("bg-slate-300");
        }
      });
      btn.classList.add("active", "border-brand-teal/20", "text-slate-900", "shadow-soft");
      btn.classList.remove("border-slate-200/50", "bg-white/40", "text-slate-600");
      const dot = btn.querySelector("span:last-child");
      if (dot) {
        dot.classList.add("bg-brand-teal");
        dot.classList.remove("bg-slate-300");
      }

      // Show/hide answer panes with smooth fade-in
      faqAnswerPanes.forEach((pane) => {
        pane.classList.add("hidden");
        pane.classList.remove("opacity-100");
        pane.classList.add("opacity-0");
      });

      const targetPane = document.getElementById(`faq-answer-${index}`);
      if (targetPane) {
        targetPane.classList.remove("hidden");
        // Trigger layout reflow for CSS opacity animation
        void targetPane.offsetWidth;
        targetPane.classList.add("opacity-100");
        targetPane.classList.remove("opacity-0");
      }

      // Update badge
      if (faqTelemetryBadge && telemetryBadges[index]) {
        faqTelemetryBadge.textContent = telemetryBadges[index];
      }
    });
  });

});
