//--------------------NEXT BUTTON---------------------------------


document.querySelector('.next').addEventListener('click',function(){

    document.getElementById('address-content').classList.add('show-me');
    document.getElementById('about-yourself-content').classList.remove('show-me');
    document.getElementById('education').classList.remove('show-me');
    document.querySelector('.table').classList.remove('show-me');
    document.getElementById('nav-item-2').classList.add('nav-border');
    document.getElementById('nav-item-3').classList.remove('nav-border');
    document.getElementById('nav-item-4').classList.remove('nav-border');
    document.getElementById('nav-item-1').classList.remove('nav-border');

});


document.getElementById('e-next').addEventListener('click',function(){

    document.getElementById('education').classList.add('show-me');
    document.getElementById('about-yourself-content').classList.remove('show-me');
    document.getElementById('address-content').classList.remove('show-me');
    document.querySelector('.table').classList.remove('show-me');
    document.getElementById('nav-item-3').classList.add('nav-border');
    document.getElementById('nav-item-2').classList.remove('nav-border');
    document.getElementById('nav-item-4').classList.remove('nav-border');
    document.getElementById('nav-item-1').classList.remove('nav-border'); 

});

document.getElementById('he-next').addEventListener('click',function(){

    document.getElementById('show').classList.add('show-me');
    document.getElementById('about-yourself-content').classList.remove('show-me');
    document.getElementById('address-content').classList.remove('show-me');
    document.querySelector('.table').classList.add('show-me');
    document.getElementById('nav-item-4').classList.add('nav-border');
    document.getElementById('nav-item-3').classList.remove('nav-border');
    document.getElementById('nav-item-2').classList.remove('nav-border');
    document.getElementById('nav-item-1').classList.remove('nav-border');

});

//-------------------------BACK BUTTON------------------------------

document.getElementById('back-1').addEventListener('click',function(){
document.getElementById('about-yourself-content').classList.add('show-me');
document.getElementById('education').classList.remove('show-me');
document.querySelector('.table').classList.remove('show-me');
document.getElementById('address-content').classList.remove('show-me');
    document.getElementById('nav-item-1').classList.add('nav-border');
document.getElementById('nav-item-3').classList.remove('nav-border');
document.getElementById('nav-item-2').classList.remove('nav-border');
document.getElementById('nav-item-4').classList.remove('nav-border');
});


document.getElementById('back-2').addEventListener('click',function(){
document.getElementById('about-yourself-content').classList.remove('show-me');
document.getElementById('education').classList.remove('show-me');
document.querySelector('.table').classList.remove('show-me');
document.getElementById('address-content').classList.add('show-me');
    document.getElementById('nav-item-2').classList.add('nav-border');
document.getElementById('nav-item-3').classList.remove('nav-border');
document.getElementById('nav-item-4').classList.remove('nav-border');
document.getElementById('nav-item-1').classList.remove('nav-border');
});



//------------------------- photo upload  ------------------------------

const inpFile = document.getElementById('inpFile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";
    reader.addEventListener('load', function() {
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  } else {
    previewDefaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute('src', "");
  }
});
