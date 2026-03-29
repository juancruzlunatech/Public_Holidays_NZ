// Main site JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      hamburger.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });
  }

  // Scroll to top button
  const scrollBtn = document.querySelector(".scroll-top");
  if (scrollBtn) {
    window.addEventListener("scroll", function () {
      scrollBtn.classList.toggle("visible", window.scrollY > 400);
    });
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Countdown timer on hero
  updateCountdown();

  // Regional filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      const region = btn.dataset.region;
      filterRegionalHolidays(region);
    });
  });
});

function updateCountdown() {
  const el = document.getElementById("next-holiday-countdown");
  if (!el) return;

  const year = parseInt(el.dataset.year) || new Date().getFullYear();
  const next = getNextHoliday(year) || getNextHoliday(year + 1);
  if (next) {
    const days = daysUntil(next.effectiveDate);
    document.getElementById("next-holiday-name").textContent =
      getHolidayIcon(next.name) + " " + next.name;
    document.getElementById("next-holiday-date").textContent = formatDateFull(
      next.effectiveDate
    );
    const daysEl = document.getElementById("next-holiday-days");
    if (days === 0) {
      daysEl.textContent = "🎉 Today!";
    } else if (days === 1) {
      daysEl.textContent = "Tomorrow!";
    } else {
      daysEl.textContent = days + " days to go";
    }
  }
}

function filterRegionalHolidays(region) {
  const rows = document.querySelectorAll(".regional-table tr[data-region]");
  rows.forEach(function (row) {
    if (region === "all" || row.dataset.region === region) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function renderHolidayTable(holidays, tableBodyId) {
  const tbody = document.getElementById(tableBodyId);
  if (!tbody || !holidays) return;

  holidays.forEach(function (h) {
    const tr = document.createElement("tr");
    const days = daysUntil(h.mondayised || h.date);
    if (days < 0) tr.className = "past-holiday";
    if (days === 0) tr.className = "today-holiday";

    let mondayNote = "";
    if (h.mondayised) {
      mondayNote =
        '<span class="mondayised-note">Mondayised → ' +
        formatDate(h.mondayised) +
        "</span>";
    }

    tr.innerHTML =
      '<td class="holiday-icon">' + getHolidayIcon(h.name) + "</td>" +
      '<td class="holiday-name">' + h.name + mondayNote + "</td>" +
      '<td class="holiday-date">' + formatDate(h.date) + "</td>" +
      '<td class="holiday-day">' + h.day + "</td>" +
      "<td>" + getStatusBadge(h.mondayised || h.date) + "</td>";

    tbody.appendChild(tr);
  });
}

function renderRegionalTable(holidays, tableBodyId) {
  const tbody = document.getElementById(tableBodyId);
  if (!tbody || !holidays) return;

  holidays.forEach(function (h) {
    const tr = document.createElement("tr");
    tr.dataset.region = h.region;
    const days = daysUntil(h.date);
    if (days < 0) tr.className = "past-holiday";
    if (days === 0) tr.className = "today-holiday";

    tr.innerHTML =
      '<td class="holiday-icon">' + getHolidayIcon(h.name) + "</td>" +
      '<td class="holiday-name">' + h.name + "</td>" +
      '<td>' + h.region + "</td>" +
      '<td class="holiday-date">' + formatDate(h.date) + "</td>" +
      '<td class="holiday-day">' + h.day + "</td>" +
      "<td>" + getStatusBadge(h.date) + "</td>";

    tbody.appendChild(tr);
  });
}
