function color_change() {
    var border_R = document.getElementById("border_R").value; //Stores all the elements of the border and paragraph from r,g,b.
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value; // Border Width
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph"); // Gets the paragraph element to make changes to it.
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`; // Makes the tag style become the user's input of border, width, and paragraph color.
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
