// ==================================================
// qalinligi

var elOptoinWrapper = document.querySelector(".js-form-size");
var thickness = [
  "Yupqa",
  "O'rta",
  "Qalin",

];

var elNon = document.querySelector(".js-size-value");

for (var i = 0; i < thickness.length; i++) {
  var newtHickOption = document.createElement("option");
  newtHickOption.id = i;
  newtHickOption.setAttribute("name", "qalinligi");
  newtHickOption.value = thickness[i];
  newtHickOption.textContent = thickness[i];
  
  elNon.textContent = 'Yupqa';
  elOptoinWrapper.addEventListener("change", function() {

    elNon.textContent = elOptoinWrapper.value;
  });


  elOptoinWrapper.appendChild(newtHickOption);
}




// =================================================
// kattaligi
var elKataligiTranslete = document.querySelector(".js-kattaligi");
  console.log(elKataligiTranslete);
var elRadio = document.querySelector(".js-radio-wrapper")
var sm = ["25 cm", "30 cm", "35 cm"];
for ( var j = 0; j < sm.length; j++){
  var newElSmWrapper= document.createElement("div");
  var newSmRadio = document.createElement("input");
  var newSmLabel = document.createElement("label");
  var elKattaligi = document.querySelector(".js-radio-wrapper");
  
  newElSmWrapper.setAttribute("class", "form_radio_btn");
  newSmRadio.type = "radio";
  newSmRadio.id = j + 15;
  newSmRadio.value = sm[j];
  newSmRadio.setAttribute("name", "kattaligi")
  newSmLabel.setAttribute("for", j + 15)
  newSmLabel.textContent = sm[j];
  newSmLabel.setAttribute("class", "btn_cm");
  
  var elP = document.createElement("p");
  newSmRadio.addEventListener("change", function (){

    elKataligiTranslete.innerHTML = this.value;

  });
  
  newElSmWrapper.appendChild(newSmRadio);
  newElSmWrapper.appendChild(newSmLabel);
  
  elRadio.appendChild(newElSmWrapper);
  
  elKataligiTranslete.appendChild(elP);
}


// ==================================================
// ustidagilar


var elInputWrapper = document.querySelector(".js-input-wrapper");

var fruits = [
  "Pamidor",
  "Kurka",
  "Zaytun",
  "Tuzlangan bodring",
  "Qoziqorin",
  "Qazi",
];

var ustida = [];
for (var i = 0; i < fruits.length; i++) {
  var newelFruitsLabel = document.createElement("label");
  var newElFruitsCheckbox = document.createElement("input");
  var newElFruitsSpan = document.createElement("span");

  newElFruitsCheckbox.type = "checkbox";
  newElFruitsCheckbox.id = i;
  newElFruitsCheckbox.setAttribute("name" , "ustida");
  newElFruitsCheckbox.value = fruits[i];

  newElFruitsSpan.textContent = fruits[i];

  newElFruitsCheckbox.addEventListener("change", function (evt) {
    evt.preventDefault();

    var curruntFruit = this.value;
    var index = ustida.indexOf(curruntFruit);
    if (index > -1) {
      ustida.splice(index, 1);
    }else{
      ustida.push(curruntFruit);
    }
    ochirishQoshish1()
  });
  var elUstidaPush = document.querySelector(".ustida");

  // elqoshimcha
  newelFruitsLabel.appendChild(newElFruitsCheckbox);
  newelFruitsLabel.appendChild(newElFruitsSpan);

  elInputWrapper.appendChild(newelFruitsLabel);
}



var ochirishQoshish1 = function () {
  elUstidaPush.innerHTML = '';
  for (var i = 0; i < ustida.length; i++) {
    var ustiItemLi = document.createElement('li');
    ustiItemLi.textContent = `- ${ustida[i]}`;
    elUstidaPush.append(ustiItemLi);
  }
}


// ==============================================
// qoshimchalar 
var qoshimchaWrap = document.querySelector(".qoshimchalist");

var qoshimchaArray = ["Achchiq", "Sasiskali"];

var qoshimchaPush = [];

for (var k = 0; k < qoshimchaArray.length; k++){
  var newQoshLabel = document.createElement("label");
  var newQoshInput = document.createElement("input");
  var newQoshSpan = document.createElement("span");
  
  newQoshInput.type = "checkbox";
  newQoshInput.id = k;
  newQoshInput.setAttribute("name", "qoshimch");
  newQoshInput.value= qoshimchaArray[k];
  
  newQoshSpan.textContent = qoshimchaArray[k];
  
  

  newQoshInput.addEventListener("change", function(){
    var qoshValue = this.value;
    var index2 = qoshimchaPush.indexOf(qoshValue);
    if(index2 > -1){
      qoshimchaPush.splice(index2, 1)
    }else{
      qoshimchaPush.push(qoshValue);
    }

    ochirishQoshish2()
  });

  var elQoshimchaPush = document.querySelector(".qoshimchapush");
  
  newQoshLabel.appendChild(newQoshInput);
  newQoshLabel.appendChild(newQoshSpan);
  
  qoshimchaWrap.appendChild(newQoshLabel);
  
}

var ochirishQoshish2 = function () {
  elQoshimchaPush.innerHTML = '';
  for (var i = 0; i < qoshimchaPush.length; i++) {
    var qoshItemLi = document.createElement('li');
    qoshItemLi.textContent = `- ${qoshimchaPush[i]}`;
    elQoshimchaPush.append(qoshItemLi);
  }
}