/* ==========================================================================
   Mira Temizlik — script.js
   Vanilla JS · bağımlılık yok · erişilebilir & performanslı
   ========================================================================== */
(function () {
  "use strict";

  var WHATSAPP = "905320630389"; // Uluslararası format (0'sız, +90 -> 90)

  /* ---------- 0) Reveal animasyonunu etkinlestir ----------
     Sinif yalnizca JS calisiyorsa eklenir; aksi halde icerik bastan gorunur. */
  document.documentElement.classList.add("js-reveal");

  /* ---------- 1) Sticky header gölgesi ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2) Mobil menü ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Bir bağlantıya tıklayınca menüyü kapat
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 3) SSS accordion ---------- */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : null;
    });
  });

  /* ---------- 4) Scroll reveal (IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Guvenlik agi: IntersectionObserver tetiklenmezse (crawler render, kisa
     viewport vb.) 2 sn sonra tum bloklari gorunur yap. */
  window.setTimeout(function () {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }, 2000);

  /* ---------- 5) Yorum carousel okları ---------- */
  var track = document.getElementById("reviews");
  document.querySelectorAll("[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!track) return;
      var dir = parseInt(btn.getAttribute("data-scroll"), 10);
      var card = track.querySelector(".review");
      var step = card ? card.offsetWidth + 20 : 320;
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    });
  });

  /* ---------- 6) Öncesi / Sonrası sürgüsü ---------- */
  document.querySelectorAll(".ba").forEach(function (ba) {
    var after = ba.querySelector(".after");
    var handle = ba.querySelector(".handle");
    var dragging = false;

    var setPos = function (clientX) {
      var rect = ba.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = "inset(0 0 0 " + pct + "%)";
      handle.style.left = pct + "%";
    };

    var start = function () { dragging = true; };
    var end = function () { dragging = false; };
    var move = function (e) {
      if (!dragging) return;
      var x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };

    ba.addEventListener("mousedown", function (e) { start(); setPos(e.clientX); });
    ba.addEventListener("touchstart", function (e) { start(); setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    // Tıklayınca da o noktaya git
    ba.addEventListener("click", function (e) { setPos(e.clientX || (e.changedTouches && e.changedTouches[0].clientX)); });
  });

  /* ---------- 7) Teklif formu -> WhatsApp mesajı ---------- */
  var form = document.getElementById("teklif-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var ad = (form.ad.value || "").trim();
      var tel = (form.tel.value || "").trim();
      var hizmet = form.hizmet.value || "";
      var adres = (form.adres.value || "").trim();
      var not = (form["not"].value || "").trim();

      // Basit doğrulama
      if (!ad || !tel || !hizmet) {
        if (!ad) form.ad.focus();
        else if (!tel) form.tel.focus();
        else form.hizmet.focus();
        form.reportValidity && form.reportValidity();
        return;
      }

      var lines = [
        "Merhaba Mira Temizlik, teklif almak istiyorum:",
        "",
        "👤 Ad Soyad: " + ad,
        "📞 Telefon: " + tel,
        "🧹 Hizmet: " + hizmet
      ];
      if (adres) lines.push("📍 Adres: " + adres);
      if (not) lines.push("📝 Not: " + not);

      var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- 8) Yıl güncelleme (footer) ---------- */
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
