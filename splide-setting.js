

/*===================================================================================================

.first-view内のsplide設定

====================================================================================================*/
document.addEventListener('DOMContentLoaded', function () {
  const firstViewSplide = new Splide(".first-view .splide", {
    autoplay: true,
    type: "fade",
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 5000,
    speed: 2000,
  }).mount();
/*===================================================================================================

.works内のsplide設定

====================================================================================================*/
const splideMain = new Splide('.splide-main', {
  type: 'loop',
  speed: 2000,
  rewind: true,
  rewindByDrag: true,
  perPage: 2,
  perMove: 2,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus:true,
  resetProgress:false,
  gap: '1rem',
  classes: {
    arrows: 'splide__arrows your-class-arrows',
    arrow : 'splide__arrow your-class-arrow',
    prev  : 'splide__arrow--prev your-class-prev',
    next  : 'splide__arrow--next your-class-next',
    pagination: 'splide__pagination your-class-pagination',
    page      : 'splide__pagination__page your-class-page',
  },
  breakpoints: {
    768: { perPage: 1 },
  },
});
  
const splideSecondary = new Splide('.splide-secondary', {
  type: 'loop',
  speed: 2000,
  rewindByDrag: true,
  perPage: 2,
  perMove: 2,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus:true,
  resetProgress:false,
  gap: '1rem',
  classes: {
    arrows: 'splide__arrows your-class-arrows',
    arrow : 'splide__arrow your-class-arrow',
    prev  : 'splide__arrow--prev your-class-prev',
    next  : 'splide__arrow--next your-class-next',
    pagination: 'splide__pagination your-class-pagination',
    page      : 'splide__pagination__page your-class-page',
  },
  breakpoints: {
    768: { perPage: 1 },
  },
});

splideMain.mount();
splideSecondary.mount();
});
