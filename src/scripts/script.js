new Swiper('.hengehog-swiper',{
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  simulateTouch: false,
  navigation: {
    nextEl:'.hengehog-next',
    prevEl:'.hengehog-prev'
  },
  breakpoints: {
      767:{
          slidesPerView: 2
      }
  }
})


 
  $('#menu-toggle').on('change', function() {
  $('body').css('overflow', $(this).prop('checked') === true ? 'hidden' : '');
})
