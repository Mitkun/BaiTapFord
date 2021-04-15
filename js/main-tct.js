var buttonShow = document.getElementById("btn-disclosures").onclick = function() {
    myFunction();
};


function myFunction() {
    document.getElementById("txt-disclosures").classList.toggle("show");
    document.getElementById("btn-icon").classList.toggle("show");

};