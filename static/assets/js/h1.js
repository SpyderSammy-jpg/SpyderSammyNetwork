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
        <div class="left-group">
            <div class="fps-box">
                <span id="fps-val" style="color:#ff0; font-size:11px; font-weight:bold;">0</span>
                <div id="fps-dot" class="status-dot"></div>
                <span style="font-size:8px; color:#666; font-weight:bold;">LIVE</span>
            </div>
            <div class="short-bars">
                VOL <input type="range" id="vol-slider" min="0" max="100" value="100">
                BRI <input type="range" id="bri-slider" min="10" max="100" value="100">
            </div>
        </div>
        <div class="right-group">
            <div class="battery-group" id="batt-box" title="Checking battery...">
                <span id="charge-icon" style="display:none;">⚡</span>
                <div class="batt-container"><div id="batt-fill"></div></div>
            </div>
            <span id="notif-bell">🔔</span>
            <div class="time-stack">
                <span id="bar-time">00:00</span>
                <span id="bar-date">Date</span>
            </div>
        </div>
    </div>
    <div id="spyder-sidebar">
        <h3 style="color:#f00; font-size:13px; letter-spacing:1px;">REMINDERS <button id="add-rem-btn" style="float:right; background:#f00; color:#000; border:none; cursor:pointer; font-weight:bold;">+</button></h3>
        <div id="rem-list" class="sidebar-box"></div>
        <h3 style="color:#f00; font-size:13px; letter-spacing:1px;">ACTION CENTER</h3>
        <div id="notif-history" class="sidebar-box" style="font-size:11px; color:#ccc;">No new notifications.</div>
        <h3 style="color:#f00; font-size:13px; letter-spacing:1px;">CALENDAR</h3>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; align-items:center;">
            <button id="prev-mo" style="background:none; border:1px solid #333; color:#f00; cursor:pointer;">&lt;</button>
            <span id="cal-label" style="font-size:12px; font-weight:bold;"></span>
            <button id="next-mo" style="background:none; border:1px solid #333; color:#f00; cursor:pointer;">&gt;</button>
        </div>
        <div id="cal-box" class="sidebar-box"></div>
        <div style="font-size:11px; color:#ffff00;">Events: <span id="nat-day" style="color:#fff;"></span></div>
    </div>
    <div id="bri-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; pointer-events:none; z-index:9999; opacity:0;"></div>`;

    document.body.insertAdjacentHTML('beforeend', ui);

    let calD = new Date(), rems = JSON.parse(localStorage.getItem('spyderReminders') || '[]');
    const holidays = { "12-25": "Christmas", "1-1": "New Year", "3-21": "Memory Day", "3-22": "Water Day" };

    function pushNotification(msg) {
        // 1. Desktop Popup
        if (Notification.permission === "granted") {
            new Notification("SpyderSammy", { body: msg });
        }
        // 2. Sidebar Logging
        const hist = document.getElementById('notif-history');
        if (hist.innerText.includes("No new")) hist.innerHTML = "";
        const time = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
        hist.insertAdjacentHTML('afterbegin', `<div style="border-bottom:1px solid #222; padding:5px 0;"><b>${msg}</b><br><span style="color:#666">${time}</span></div>`);
    }

    function tick() {
        const now = new Date();
        document.getElementById('bar-time').innerText = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', hour12:false});
        document.getElementById('bar-date').innerText = now.toLocaleDateString();
        
        const key = `${now.getMonth()+1}-${now.getDate()}`;
        document.getElementById('nat-day').innerText = holidays[key] || "No events today.";

        const curT = now.getHours().toString().padStart(2,'0') + ":" + now.getMinutes().toString().padStart(2,'0');
        rems.forEach(r => {
            if(r.tm === curT && !r.fired) {
                pushNotification(`Reminder: ${r.t}`);
                r.fired = true;
                localStorage.setItem('spyderReminders', JSON.stringify(rems));
            }
        });
    }

    if (navigator.getBattery) navigator.getBattery().then(b => {
        const up = () => {
            const lvl = Math.round(b.level * 100);
            document.getElementById('batt-box').title = `Battery: ${lvl}% ${b.charging ? '(Charging)' : ''}`;
            const fill = document.getElementById('batt-fill');
            fill.style.width = lvl + "%";
            fill.style.background = lvl < 20 ? "#f00" : (lvl < 50 ? "#ffa500" : "#0f0");
            document.getElementById('charge-icon').style.display = b.charging ? "inline" : "none";
        };
        up(); b.onlevelchange = up; b.onchargingchange = up;
    });

    function drawCal() {
        const y = calD.getFullYear(), m = calD.getMonth();
        document.getElementById('cal-label').innerText = calD.toLocaleString('default', {month:'long'}) + " " + y;
        const days = new Date(y, m + 1, 0).getDate();
        let h = `<div class="cal-grid">`;
        for(let i=1; i<=days; i++) {
            const isH = holidays[`${m+1}-${i}`], isT = i===new Date().getDate() && m===new Date().getMonth();
            h += `<div class="cal-day ${isT?'cal-today':''} ${isH?'cal-holiday':''}" title="${isH||''}">${i}</div>`;
        }
        document.getElementById('cal-box').innerHTML = h + '</div>';
    }

    document.addEventListener('click', e => {
        if(e.target.id === 'notif-bell') document.getElementById('spyder-sidebar').classList.toggle('open');
        if(e.target.id === 'prev-mo' && calD.getFullYear() >= 2000) { calD.setMonth(calD.getMonth()-1); drawCal(); }
        if(e.target.id === 'next-mo' && calD.getFullYear() <= 3000) { calD.setMonth(calD.getMonth()+1); drawCal(); }
        if(e.target.id === 'add-rem-btn') {
            const t = prompt("Title:"), tm = prompt("Time (HH:MM):");
            if(t && tm) { rems.push({t, tm, id: Date.now(), fired: false}); localStorage.setItem('spyderReminders', JSON.stringify(rems)); renderRems(); }
        }
    });

    document.addEventListener('input', e => {
        if(e.target.id === 'bri-slider') document.getElementById('bri-overlay').style.opacity = (100 - e.target.value)/100;
        if(e.target.id === 'vol-slider') document.querySelectorAll('audio, video').forEach(v => v.volume = e.target.value/100);
    });

    let fr = 0, last = performance.now();
    function fps() { fr++; const n = performance.now(); if(n >= last+1000) { 
        document.getElementById('fps-val').innerText = fr; 
        const d = document.getElementById('fps-dot');
        if(fr < 20) d.classList.add('beep-anim'); else { d.style.background = "#0f0"; d.classList.remove('beep-anim'); }
        fr=0; last=n; 
    } requestAnimationFrame(fps); }

    function renderRems() { document.getElementById('rem-list').innerHTML = rems.map(r => `<div style="font-size:11px; margin-bottom:5px;"><input type="checkbox" onchange="killR(${r.id})"> ${r.t} <span style="color:#f00; float:right;">${r.tm}</span></div>`).join('') || "No reminders."; }
    window.killR = (id) => { rems = rems.filter(x => x.id !== id); localStorage.setItem('spyderReminders', JSON.stringify(rems)); renderRems(); };

    if (window.Notification && Notification.permission !== "granted") Notification.requestPermission();
    setInterval(tick, 1000); fps(); drawCal(); renderRems();
})();
