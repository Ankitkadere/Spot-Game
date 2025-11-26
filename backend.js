const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const openSidebarBtn = document.getElementById("openSidebar");

// 🔵 OPEN SIDEBAR
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("opacity-100");
  }, 10);
});

// 🔵 CLOSE SIDEBAR
overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.remove("opacity-100");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 250);
});

///////////////////////////////////////////
alert("ff");
const API_URL =
  "https://script.google.com/macros/s/AKfycbyW6iFWJpgLR-oogi_GysEp_RXph9d9vaQ2idlMgsQQVAg3ee_XeKuqyI_HDyaqnwlG/exec";

function loadData() {
  return fetch(API_URL + "?action=read")
    .then((res) => res.json())
    .then((data) => {
      if (data.result !== "success") {
        console.error("API Error:", data.error);
        return;
      }

      const container = document.getElementById("#resultsContainer");
      container.innerHTML = ""; // Clear old list

      // Latest first
      data.records.reverse().forEach((r) => {
        // r.Applicant → your name field
        // r.Result → your result field (change as needed)

        const card = `
          <div class="p-3 bg-white shadow rounded-lg border mb-3">
            <h2 class="font-bold text-lg text-gray-700">${r.Applicant}</h2>
            <p class="text-pink-600 font-extrabold text-2xl">${r.Jodi + ("-"+ r.Mark || " ") + ("-"+ r.Pennel || " ")}</p>
          </div>
        `;
        container.innerHTML += card;
      });
    })
    .catch((err) => console.error("Fetch Error:", err));
}

let isLoading = false;

function autoLoad() {
  if (isLoading) return;

  isLoading = true;
  loadData().finally(() => {
    isLoading = false;
  });
}

// First load
loadData();

// Auto refresh every 5 seconds
setInterval(autoLoad, 50);

////////////////////////Sliding//////////

const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

let index = 0;
const slideCount = dots.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.remove("bg-blue-500");
    dot.classList.add("bg-gray-400");
    if (i === index) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-blue-500");
    }
  });
}

function autoSlide() {
  index = (index + 1) % slideCount;
  updateSlider();
}

updateSlider();
setInterval(autoSlide, 3000);

/////////dynamic data load /////////
 