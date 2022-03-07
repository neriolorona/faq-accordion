const accordionItem = document.querySelectorAll('.accordion-item');

console.log(accordionItem);

accordionItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    const accordionHeader = item.querySelector(".accordion-header");
    const accordionBody = item.querySelector(".accordion-body");
    const accordionHeaderIcon = item.querySelector(".accordion-header-icon");

    accordionHeader.classList.toggle("active");
    accordionBody.classList.toggle('show');
    accordionHeaderIcon.classList.toggle('rotate')
  })
})

