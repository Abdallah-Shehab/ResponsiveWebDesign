$(function () {

    // First 4 normal image 
    // last will be the center
    var imgs = [
        "./images/image1.jpeg",
        "./images/image10.jpg",
        "./images/image11.jpg",
        "./images/image12.jpg",
        "./images/image7.jpg",
        "./images/image8.jpg",
        "./images/image2.jpg",
        "./images/image4.jpg",
        "./images/center.jpg"
    ];

    // need to pass array of images to function 
    // there must be 4 Divs with class [square]
    // and one Div with class [circle]


    // slider plugin
    $.fn.Slider(imgs);
})

