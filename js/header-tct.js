document.getElementById("fordSuv").onclick = function() {
    openFunction("contentSuv", "contentTruck", "contentElec", "contentCar");
};
document.getElementById("fordTruck").onclick = function() {
    openFunction("contentTruck", "contentElec", "contentCar", "contentSuv");
};
document.getElementById("fordElec").onclick = function() {
    openFunction("contentElec", "contentCar", "contentSuv", "contentTruck");
};
document.getElementById("fordCar").onclick = function() {
    openFunction("contentCar", "contentSuv", "contentTruck", "contentElec");
};

function openFunction(IDcontent, IDcontent1, IDcontent2, IDcontent3) {
    document.getElementById(IDcontent).classList.toggle("open");
    document.getElementById(IDcontent1).classList.remove("open");
    document.getElementById(IDcontent2).classList.remove("open");
    document.getElementById(IDcontent3).classList.remove("open");


};