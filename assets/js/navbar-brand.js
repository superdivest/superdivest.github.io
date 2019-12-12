
$(".collapse").on("hidden.bs.collapse", function() {
    $("a.navbar-brand").removeClass("cad-nav-menu-open");
});

$(".collapse").on("show.bs.collapse", function() {
    $("a.navbar-brand").addClass("cad-nav-menu-open");
});

