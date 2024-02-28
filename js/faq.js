document.addEventListener("DOMContentLoaded", function() {
  var acContents = document.querySelectorAll(".ac_content");
  acContents.forEach(function(acContent) {
      acContent.style.display = "none";
  });

  var acHeaders = document.querySelectorAll(".ac_header");
  acHeaders.forEach(function(acHeader) {
      acHeader.addEventListener("click", function() {
          var nextContent = this.nextElementSibling;
          acContents.forEach(function(acContent) {
              if (acContent !== nextContent && acContent.style.display === "block") {
                  acContent.style.display = "none";
              }
          });
          nextContent.style.display = nextContent.style.display === "block" ? "none" : "block";
      });
  });
});
