
var openFile = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    init(reader.result.replace(/(\r\n\t|\n|\r|\t)/gm, ""));
  };
  reader.readAsText(input.files[0]);
};

var slider = document.getElementById("radius");
var numbers = document.getElementById("radius2");
slider.oninput = function() {
  document.getElementById("radius2").value = this.value;
  drawModel();
}
numbers.oninput = function() {
  document.getElementById("radius").value = this.value;
  drawModel();
}

var drawTheBox = document.getElementById("drawBox");
drawTheBox.oninput = function() {
  vDrawBox = !vDrawBox;
  drawModel();
}

var zeroC = document.getElementById("zeroColour");
var oneC = document.getElementById("oneColour");
var twoC = document.getElementById("twoColour");
var threeC = document.getElementById("threeColour");
var fourC = document.getElementById("fourColour");
var fiveC = document.getElementById("fiveColour");
var sixC = document.getElementById("sixColour");
var sevenC = document.getElementById("sevenColour");
var eigthC = document.getElementById("eightColour");
var nineC = document.getElementById("nineColour");
zeroC.oninput = function() {
  drawModel();
}
oneC.oninput = function() {
  drawModel();
}
oneC.oninput = function() {
  drawModel();
}
twoC.oninput = function() {
  drawModel();
}
threeC.oninput = function() {
  drawModel();
}
fourC.oninput = function() {
  drawModel();
}
fiveC.oninput = function() {
  drawModel();
}
sixC.oninput = function() {
  drawModel();
}
sevenC.oninput = function() {
  drawModel();
}
eigthC.oninput = function() {
  drawModel();
}
nineC.oninput = function() {
  drawModel();
}

var slider2 = document.getElementById("cameraDistance");
var numbers2 = document.getElementById("cameraDistance2");
slider2.oninput = function() {
  document.getElementById("cameraDistance2").value = this.value;
  drawModel();
}
numbers2.oninput = function() {
  document.getElementById("cameraDistance").value = this.value;
  drawModel();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("form-open-btn").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-open-btn").style.display = "block";
}
