$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active')
    });
});

var menuElem = document.getElementById('dropdown-menu');
    var titleElem = menuElem.querySelector('.title-lang');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown menu if the user clicks outside of it

    let btn = document.querySelector('.knopka')
    //
    function magic() {
      if (window.pageYOffset > 20) {
        btn.style.opacity = '1'
      } else { btn.style.opacity = '0' }
    }
    //
    btn.onclick = function () {
        window.scrollTo(0,0)
    }
    
    // When scrolling, we run the function
    window.onscroll = magic

    $('.dropbtn').click(function() {
      $(this).toggleClass('opened');
      $(this).next('.drop__link').slideToggle();
    });

    $(document).ready(function(){
      $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        autoplay:false,
        speed:1000,
        
      });
    });
    
    