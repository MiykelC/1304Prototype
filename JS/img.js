const img = document.getElementById('addImg');
const imgPrev = document.getElementById('Imgdisplay');

img.addEventListener('change', function () {
  const file = img.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', function () {
    imgPrev.src = reader.result;

  });
  reader.readAsDataURL(file);
});