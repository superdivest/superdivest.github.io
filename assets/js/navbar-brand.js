
$(".collapse").on("hidden.bs.collapse", function() {
    $("a.navbar-brand").removeClass("usd-nav-menu-open");
});

$(".collapse").on("show.bs.collapse", function() {
    $("a.navbar-brand").addClass("usd-nav-menu-open");
});

