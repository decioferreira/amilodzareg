(function () {
  var ready = function(fn) {
    if(document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  ready(function() {
    var contentTags = document.querySelectorAll(".content");
    var galleryTag = document.querySelector(".gallery");
    var mainTag = document.querySelector(".main");
    var slideTags = document.querySelectorAll(".slide");
    var slideTagsExcludeIntro = document.querySelectorAll(".slide:not(.slide-intro)");

    if(galleryTag) {
      var initialSlide = parseInt(galleryTag.getAttribute("data-initial"), 10);
    }

    var containerTag = document.querySelector(".container");
    var previousContainerWidth;

    var mainGestures = new Hammer(mainTag);
    var mainGesturesValue;

    mainGestures.on("panleft panright", function(e) {
      mainGesturesValue = e.type;
    });

    mainGestures.on("panend", function() {
      if(mainGesturesValue) {
        focusSlide(initialSlide + (mainGesturesValue === "panleft" ? 1 : -1));
      }

      mainGesturesValue = null;
    });

    var centerSlide = function() {
      var galleryTagWidth = galleryTag.clientWidth;
      var contentTag = contentTags[initialSlide];
      var offset = contentTag.offsetParent.offsetLeft + (contentTag.clientWidth / 2);

      containerTag.style.left = ((galleryTagWidth / 2) - offset) + "px";
    };

    var checkContainerWidth = function() {
      var newContainerWidth = containerTag.clientWidth;

      if(previousContainerWidth !== newContainerWidth) {
        previousContainerWidth = newContainerWidth;
        centerSlide();
      }
    };

    var updateActiveSlide = function() {
      [].forEach.call(slideTags, function(slideTag) {
        slideTag.classList.remove("active-slide");
      });

      slideTags[initialSlide].classList.add("active-slide");
    };

    if(galleryTag) {
      updateActiveSlide();

      setInterval(checkContainerWidth, 100);
      checkContainerWidth();

      document.querySelector(".previous a").addEventListener("click", function(e) {
        e.preventDefault();
        focusSlide(initialSlide - 1);
      });

      document.querySelector(".next a").addEventListener("click", function(e) {
        e.preventDefault();
        focusSlide(initialSlide + 1);
      });
    }

    document.querySelector(".mobile-nav").addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(".main-nav").classList.toggle("active");
    });

    var focusSlide = function(index) {
      var previousClassList = document.querySelector(".previous").classList;
      var nextClassList = document.querySelector(".next").classList;

      initialSlide = Math.min(Math.max(index, 0), slideTags.length - 1);
      centerSlide();
      updateActiveSlide();

      if(initialSlide === 0) {
        previousClassList.add("disabled");
      } else {
        previousClassList.remove("disabled");
      }

      if(initialSlide === slideTags.length - 1) {
        nextClassList.add("disabled");
      } else {
        nextClassList.remove("disabled");
      }
    };

    [].forEach.call(slideTagsExcludeIntro, function(slideTag) {
      slideTag.addEventListener("click", function(e) {
        e.preventDefault();
        var index = [].indexOf.call(slideTagsExcludeIntro, slideTag);
        focusSlide(index + 1);
      });
    });

    var maxWidthImages = function() {
      var gallery = document.querySelector(".gallery");
      var galleryWidth = window.getComputedStyle(gallery).width;

      [].forEach.call(document.querySelectorAll(".slide:not(.slide-intro) .content img"), function(img) {
        img.style["max-width"] = galleryWidth;
      });
    };

    window.addEventListener("resize", function() {
      centerSlide();
      maxWidthImages();
    });

    maxWidthImages();
  });
}());
