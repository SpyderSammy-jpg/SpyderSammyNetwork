// home.js
let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}
if (!localStorage.getItem("ab")) localStorage.setItem("ab", true);
if (!inFrame && !navigator.userAgent.includes("Firefox") && localStorage.getItem("ab") === "true") {
  const popup = open("about:blank", "_blank");
  setTimeout(() => {
    if (!popup || popup.closed) {
      alert("Please allow popups for this site. Doing so will allow us to open the site in a about:blank tab and preventing this site from showing up in your history. You can turn this off in the site settings.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomUrl();
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `;
      doc.head.appendChild(script);
    }
  }, 2000);
}
// Particles
document.addEventListener("DOMContentLoaded", event => {
  if (window.localStorage.getItem("Particles") === "true") {
    const particlesConfig = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 40,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    // Ensure particles.js is loaded in your HTML before this runs
    particlesJS("particles-js", particlesConfig);
  }
});
// Splash texts
const SplashT = [
  "Thanks for using SpyderSammyUI Proxy",
  "This is dedicated for Homeroom 222 of the Frank R. Conwell Middle School 4",
  "Made by Sharvesh Vijayanand (SpyderSammy)",
  "Check out my new SpyderSammy Proxy! :)",
  "SpyderSammy is a high-speed proxy designed to bypass school filters.",
  "All hail SpyderSammy",
  "Check out the settings page",
  "Don't forget to play admin abuse this week!",
  "Contact 208419@jcpsnj.org for updates, requests, errors and new url's",
  "Tung Tung Tung Sahur!",
  "Announcement: Mohanesh's favorite word is: TESTICLES!",
];

let SplashI = Math.floor(Math.random() * SplashT.length);
const SplashE = document.getElementById("splash");

function US() {
  SplashI = (SplashI + 1) % SplashT.length;
  SplashE.innerText = SplashT[SplashI];
}

if (SplashE) {
  SplashE.innerText = SplashT[SplashI];
  SplashE.addEventListener("click", US);
}

// Random URL
function getRandomUrl() {
  const randomUrls = [
    "https://kahoot.it",
    "https://classroom.google.com",
    "https://drive.google.com",
    "https://google.com",
    "https://docs.google.com",
    "https://slides.google.com",
    "https://www.nasa.gov",
    "https://blooket.com",
    "https://clever.com",
    "https://edpuzzle.com",
    "https://khanacademy.org",
    "https://wikipedia.org",
    "https://dictionary.com",
  ];
  return randomUrls[randRange(0, randomUrls.length)];
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
(function() {
    const ui = `
    <div id="spyder-bar">
        <div class="bar-left">
            <div id="fps-dot" class="status-dot"></div>
            <span id="online-status" style="font-weight:bold;">Online</span>
            <span style="font-size:11px; color:#888;">FPS: <span id="fps-val">0</span></span>
        </div>
        
        <div class="bar-center">
            <span>Vol <input type="range" id="vol-slider" min="0" max="100" value="80"></span>
            <span>Bri <input type="range" id="bri-slider" min="10" max="100" value="100"></span>
        </div>

        <div class="bar-right">
            <span id="bar-date" style="color:#aaa;">Date</span>
            <span id="bar-time" style="font-family:monospace; font-size:15px;">00:00:00</span>
            <span id="notif-icon" style="cursor:pointer; font-size:20px; color:#ff0000;">📅</span>
        </div>
    </div>
    <div id="spyder-sidebar">
        <h2 class="red-text">Reminders <button class="add-btn" id="spyder-add-rem">+</button></h2>
        <div id="reminder-list" class="sidebar-box"></div>
        
        <h3 class="red-text">Notifications</h3>
        <div id="notif-list" class="sidebar-box">No current notifications</div>
        
        <h3 class="red-text">Countdown to School End</h3>
        <div id="school-countdown" style="font-size:22px; text-align:center; color:#ffff00;"></div>
        
        <h3 class="yellow-text">National Day Fact</h3>
        <div id="national-day" class="sidebar-box" style="font-style:italic;"></div>

        <h2 class="red-text">SpyderCalendar</h2>
        <div id="cal-container" class="sidebar-box"></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:9999; opacity:0;"></div>`;

    document.body.insertAdjacentHTML('beforeend', ui);

    // --- Core Logic ---
    function tick() {
        const now = new Date();
        document.getElementById('bar-time').innerText = now.toLocaleTimeString(); // Includes Seconds
        document.getElementById('bar-date').innerText = now.toDateString();

        // National Day Fact (Real March 21 Fact)
        const key = `${now.getMonth()+1}-${now.getDate()}`;
        const facts = { "3-21": "National Countdown Day", "3-22": "National Goof Off Day" };
        document.getElementById('national-day').innerText = facts[key] || "Nothing special about today!";

        // Countdown (June 19, 2026)
        const diff = new Date("2026-06-19") - now;
        const days = Math.floor(diff / 86400000);
        document.getElementById('school-countdown').innerText = days > 0 ? days + " Days" : "School's Out!";
    }

    // FPS Engine (Checks every millisecond)
    let frames = 0, last = performance.now();
    function checkFPS() {
        frames++;
        const now = performance.now();
        if (now >= last + 1000) {
            const fps = frames;
            document.getElementById('fps-val').innerText = fps;
            const dot = document.getElementById('fps-dot');
            const stat = document.getElementById('online-status');
            
            if (fps === 0) { dot.style.background = "red"; stat.innerText = "Offline"; }
            else if (fps < 20) { dot.classList.add('beep-anim'); stat.innerText = "Online"; }
            else { dot.style.background = "#00ff00"; dot.classList.remove('beep-anim'); stat.innerText = "Online"; }
            frames = 0; last = now;
        }
        requestAnimationFrame(checkFPS);
    }

    // Interactive Controls
    document.addEventListener('input', (e) => {
        if(e.target.id === 'bri-slider') document.getElementById('bri-overlay').style.opacity = (100 - e.target.value) / 100;
        if(e.target.id === 'vol-slider') document.querySelectorAll('audio, video').forEach(v => v.volume = e.target.value / 100);
    });

    document.getElementById('notif-icon').onclick = () => document.getElementById('spyder-sidebar').classList.toggle('open');

    // Calendar Generator
    function renderCal() {
        const d = new Date();
        const days = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        document.getElementById('cal-container').innerHTML = `
            <div style="text-align:center; padding-bottom:10px;">${d.toLocaleString('default',{month:'long'})} ${d.getFullYear()}</div>
            <div class="calendar-grid">` + 
            Array.from({length: days}, (_, i) => `<div class="cal-day ${i+1===d.getDate()?'cal-today':''}">${i+1}</div>`).join('') + `</div>`;
    }

    setInterval(tick, 1000);
    checkFPS(); renderCal();
})();
