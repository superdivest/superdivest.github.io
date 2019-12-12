
var galleryContainer = $(".cad-make-gallery");

galleryContainer.append('<div class="cad-gallery"></div>');
var gallery = $(".cad-make-gallery .cad-gallery");

var galleryImages = $(".cad-make-gallery img");
galleryImages.detach().appendTo(gallery);
