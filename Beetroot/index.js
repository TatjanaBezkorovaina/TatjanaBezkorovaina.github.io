// Animations scroll

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// Validation form Get in touch
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Initialize and add the google map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.4585177970969, lng: 3.9412497432515825 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    mapId: "8c7e9d2ccc1dda5f",
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "assets/img/marker.png",
    title: "Find us here!",
  });
}

// Navbar close
// function close_offcanvas() {
//   document.querySelector(".offcanvas.show").classList.remove("show");
// }

// document.querySelector(".nav-link").addEventListener("click", function (event) {
//   close_offcanvas();
// });

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("offcanvasNavbar");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
// $('a[data-target^="anchor"]').on("click", function () {
//   $(".offcanvas").collapse("hide");
//   $a = $($(this).attr("href"));
//   return false;
// });
// $(".nav-link").on("click", function () {
//   $(".offcanvas-end").removeClass("show");
// });

// $(".nav-link").on("click", function () {
//   $(".offcanvas-end").collapse("hide");
// });
