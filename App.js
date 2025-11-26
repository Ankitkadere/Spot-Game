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
const alpha = document.getElementById("alpha");
const beeta = document.getElementById("beeta");

const a = document.getElementById("a").textContent;
const b = document.getElementById("b").textContent;
document.getElementById("alphachild").style.backgroundColor = "white";
let Category = a; // ✔ can change value

alpha.addEventListener("click", () => {
  Category = a;
  loadData();
  document.getElementById("alphachild").style.backgroundColor = "white";
  document.getElementById("beetachild").style.backgroundColor = "";
  document.querySelector("#dataTable").innerHTML = `
     <div id="preLoader" class="mt-2 space-y-3">
        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-40 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-36 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-48 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-32"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-40 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-36 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-48 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-32"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
  
  `;
});

beeta.addEventListener("click", () => {
  Category = b;
  loadData();
  document.getElementById("alphachild").style.backgroundColor = "";
  document.getElementById("beetachild").style.backgroundColor = "white";
    document.querySelector("#dataTable").innerHTML = `
     <div id="preLoader" class="mt-4 space-y-4">
        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-40 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-36 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-48 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-32"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-40 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-36 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow animate-pulse">
          <div class="flex justify-between items-center">
            <div>
              <div class="h-4 bg-gray-200 rounded w-48 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-32"></div>
            </div>
            <div class="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
  
  `;
});

const API_URLS =
  "https://script.google.com/macros/s/AKfycbyW6iFWJpgLR-oogi_GysEp_RXph9d9vaQ2idlMgsQQVAg3ee_XeKuqyI_HDyaqnwlG/exec";

function loadData() {
  fetch(API_URLS + "?action=read")
    .then((res) => res.json())
    .then((data) => {
      if (data.result !== "success") {
        console.error("API Error:", data.error);
        return;
      }

      function formatDate(d) {
        const date = new Date(d);
        return date.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }

      function formatTime(t) {
        // For values like "10:30 AM"
        return new Date("1970-01-01 " + t).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      const tbody = document.querySelector("#dataTable");
      tbody.innerHTML = ""; // Clear table

      data.records
        .filter((r) => r.Category == Category) // filter by category
        .reverse() // reverse the filtered results
        .forEach((r) => {
          const row = `
            
          <div class="mt-4 space-y-4">
    <div class="bg-white px-5 py-4 rounded-2xl shadow">
      <div class="flex justify-between items-center">
        <div>
        <b class="text-3x1 text-black text-extrabold">${r.Applicant}</b>
          <p class="text-gray-500">   ${formatDate(r.Date)} → ${formatTime(
            r.Time
          )} </p>
        </div>
        <span class="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-lg font-bold">${
          r.Marks
        }</span>
      </div>
    </div>
  </div>
        `;
          tbody.innerHTML += row;
        });
    })
    .catch((err) => console.error("Fetch Error:", err));
}

let isLoading = false;

function autoLoad() {
  if (isLoading) return; // Prevent repeat call

  isLoading = true;
  loadData().finally(() => {
    isLoading = false;
  });
}

loadData(); // first load
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

// // ⭐ PRICE PAGE
// function loadPrice() {
//   document.getElementById("contentArea").innerHTML = `
//           <p class="text-base ml-2 font-bold text-gray-800">Pricing Details</p>
//           <div class="mt-4 space-y-4">
//     <div class="bg-white p-5 rounded-2xl shadow">
//       <div class="flex justify-between items-center">
//         <div>
//           <p class="font-semibold">Florence → Stockholm</p>
//           <p class="text-sm text-gray-500">Order ID #18498-98018</p>
//         </div>
//         <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">PACKED</span>
//       </div>
//     </div>

//     <div class="bg-white p-5 rounded-2xl shadow">
//       <div class="flex justify-between items-center">
//         <div>
//           <p class="font-semibold">Dresden → Stockholm</p>
//           <p class="text-sm text-gray-500">Order ID #09498-98367</p>
//         </div>
//         <span class="bg-lime-200 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">IN TRANSIT</span>
//       </div>
//     </div>
//   </div>
//       `;
// }
// loadPrice();
// // ⭐ POINT PAGE
// function loadPoint() {
//   document.getElementById("contentArea").innerHTML = `
//         <p class="text-base ml-2 font-bold text-gray-800">Location Points</p>

//         <div class="mt-5 space-y-4">

//           <div class="bg-white p-5 rounded-3xl shadow-md">
//             <p class="text-lg font-semibold text-gray-900">Pickup Point</p>
//             <p class="text-gray-600">Sector 21, Near Metro Station</p>
//           </div>

//           <div class="bg-white p-5 rounded-3xl shadow-md">
//             <p class="text-lg font-semibold text-gray-900">Drop Point</p>
//             <p class="text-gray-600">Airport Terminal 3</p>
//           </div>

//           <div class="bg-white p-5 rounded-3xl shadow-md">
//             <p class="text-lg font-semibold text-gray-900">Warehouse</p>
//             <p class="text-gray-600">Plot 112, Industrial Area</p>
//           </div>

//         </div>
//       `;
// }

// // ⭐ ACTIVITY PAGE
// function loadActivity() {
//   document.getElementById("contentArea").innerHTML = `
//           <p class="text-base ml-2 font-bold text-gray-800">Pricing Details</p>
//           <div class="mt-4 space-y-4">
//     <div class="bg-white p-5 rounded-2xl shadow">
//       <div class="flex justify-between items-center">
//         <div>
//           <p class="font-semibold">Florence → Stockholm</p>
//           <p class="text-sm text-gray-500">Order ID #18498-98018</p>
//         </div>
//         <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">PACKED</span>
//       </div>
//     </div>

//     <div class="bg-white p-5 rounded-2xl shadow">
//       <div class="flex justify-between items-center">
//         <div>
//           <p class="font-semibold">Dresden → Stockholm</p>
//           <p class="text-sm text-gray-500">Order ID #09498-98367</p>
//         </div>
//         <span class="bg-lime-200 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">IN TRANSIT</span>
//       </div>
//     </div>
//   </div>
//       `;
// }

// // ⭐ SUPPORT PAGE
// function loadSupport() {
//   document.getElementById("contentArea").innerHTML = `
//         <p class="text-base ml-2 font-bold text-gray-800">Support Center</p>

//         <div class="mt-5 space-y-4">

//           <div class="bg-white p-5 rounded-2xl shadow-md">
//             <p class="font-semibold text-gray-900">24/7 Customer Support</p>
//             <p class="text-gray-600 text-sm">Call: +91 9823 889 112</p>
//           </div>

//           <div class="bg-white p-5 rounded-2xl shadow-md">
//             <p class="font-semibold text-gray-900">Chat With Us</p>
//             <p class="text-gray-600 text-sm">We reply within 2 minutes.</p>
//           </div>

//           <div class="bg-white p-5 rounded-2xl shadow-md">
//             <p class="font-semibold text-gray-900">Email</p>
//             <p class="text-gray-600 text-sm">support@trackme.com</p>
//           </div>

//         </div>
//       `;
// }
