$(document).ready(function () {
    function fluxx() {
    new flux.slider('#slider', {
        height : 290,
        width : 700,
        autoplay: true,
        controls: true,
        pagination: true,
        transitions: ["bars3d"],
    });
}
});