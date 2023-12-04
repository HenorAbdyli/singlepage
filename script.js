function showComponent(componentId) {
    var components = document.getElementsByClassName('component');
    for (var i = 0; i < components.length; i++) {
        components[i].style.display = 'none';
    }

    var selectedComponent = document.getElementById(componentId);
    if (selectedComponent) {
        selectedComponent.style.display = 'block';
    }
}

$(document).ready(function () {
  
    $('.slider-for').slick({
      
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a class="dot">'+i+'</a>';
                },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
      
    });
  
   
  
  });