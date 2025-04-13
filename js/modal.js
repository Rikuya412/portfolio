document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("perthModal_overlay");
  const modalImg = document.getElementById("perthModal_img");
  const closeBtn = document.querySelector(".perthModal_closeBtn");

  // .thumb の中にある img だけを対象に
  const thumbImages = document.querySelectorAll(".thumb img");

  console.log("モーダル対象の画像数:", thumbImages.length);

  thumbImages.forEach(img => {
    img.addEventListener("click", function () {
      console.log("モーダル表示:", this.src);
      modalImg.src = this.src;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalImg.src = "";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});
