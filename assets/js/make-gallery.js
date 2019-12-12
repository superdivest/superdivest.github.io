var galleryContainer = $(".cad-make-gallery");

galleryContainer.append('<div class="cad-gallery"></div>');
var gallery = $(".cad-make-gallery .cad-gallery");

var galleryImages = $(".cad-make-gallery img");
galleryImages.detach().each(function (i, img) {
    var imgSrc = $(img).attr("src");
    var imgAlt = $(img).attr("alt");
    var imgLink = $("<a></a>").attr("href", imgSrc)
        .attr("data-lightbox", "gallery")
        .attr("data-alt", imgAlt);
    imgLink.append(img);
    imgLink.appendTo(gallery);
});

$(document).ready(function() {
    lightbox.init({ alwaysShowNavOnTouchDevices: true });
});