document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("product-image");
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        const fullImage = thumbnail.getAttribute("data-full-image");
        mainImage.src = fullImage;
      });
    });
  });
  