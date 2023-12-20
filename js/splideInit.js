// https://splidejs.com/v3/guides/getting-started/
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    pagination: false,
    drag: false,
  });
  splide.mount();
})
