let links = document.querySelectorAll("header nav ul li a");

// 點擊 -> 導覽列變更狀態
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((tmp) => tmp.classList.remove("active"));
    link.classList.add("active");
  });
});

// 頁面滑動 -> 導覽列變更狀態
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.75 }
);

let sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});
