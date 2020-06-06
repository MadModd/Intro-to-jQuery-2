let color = "purple";
let number = "11000";
let word = "coool";

if (color === ("purple")) {
    $('.north').css('background', 'purple');
};
if (number > 100) {
    $('.east').text("whoah, that's a big number");
} else {
    $('.east').text("just a regular number, please.");
};
if (word === ("cool")) {
    $('.south').text("Power of DOM");
} else {
    $('.west').text("Power of DOM");
};
