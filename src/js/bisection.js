"use strict";

let pol5 = $("#pol5");
let pol4 = $("#pol4");
let pol3 = $("#pol3");
let pol2 = $("#pol2");
let pol1 = $("#pol1");
let polind = $("#polind");
let submit = $("#submit");

let arraypols = [$("#pol5"),$("#pol4"),$("#pol3"),$("#pol2"),$("#pol1"),$("#polind"),$("#initial1"),$("#initial2"),$("#ea")];
let values = [];

submit.click(() => {
  $('#table').empty();
  $("#res").text("Resultado: ");
  arraypols.forEach((item, index) => {
    if(item.val() == "") {
      item.val(0);
      //console.log("Es cero men");
    } else if(isNaN(parseFloat(item.val()))){
      item.val(0);
      //console.log("Es nan men");
    } else {
      //console.log("Es el mero mero culero");
      item.val(parseFloat(item.val()))
    }
    values[index] = (parseFloat(item.val()));
  });
  //console.log("Asd: " +values[0]);
  metodo(values[6],values[7], values[8]);
});

function calcf(x) {
  let res = 0;
  let power = 5;
  for(let i = 0; i < 5; i++) {
    //console.log(values[i]);
    //console.log("i: " + i);
    //console.log("x: " + x);
    //console.log("power: " + Math.pow(x,power));
    res = res + (values[i] * Math.pow(x,power));
    //console.log(res);
    power--;
  }
  res = res + Math.sin((x * Math.PI / 180)*values[5]) * values[5];
  //res = res + values[5];
  //console.log("LACHIDA: " + res);
  //console.log(Math.sin(x * Math.PI / 180) * values[5]);
  //console.log("Res: " + res);
  return res;
}

function metodo(firstval,secondval, error) {
  let x1 = firstval;
  let x2 = secondval;
  let ea = 100;
  let xm = 0;
  let fx1 = 0;
  let fxm = 0;
  let fx1xm = 0;
  let counter = 0;
  let firstvalue = calcf((x1+x2) / 2);
  let err = 5;

  $("#table").append("<tr><th class='table-title wow bounceInUp' data-wow-delay='0.5s'>X1</th><th class='table-title wow bounceInUp' data-wow-delay='0.6s'>X2</th><th class='table-title wow bounceInUp' data-wow-delay='0.7s'>Xm</th><th class='table-title wow bounceInUp' data-wow-delay='0.8s'>f(X1)</th><th class='table-title wow bounceInUp' data-wow-delay='0.9s'>f(Xm)</th><th class='table-title wow bounceInUp' data-wow-delay='1s'>f(X1)(Xm)</th><th class='table-title wow bounceInUp' data-wow-delay='1.1s'>ea</th>");

  while(ea > error){
    console.log("X1 : " + x1);
    console.log("X2: " + x2);
    xm = (x1+x2) / 2;
    console.log("Xm: " + xm);
    fx1 = calcf(x1);
    console.log("f(x1): " + fx1);
    fxm = calcf(xm);
    console.log("f(xm): " + fxm);
    fx1xm = fx1 * fxm;
    console.log("f(x1xm): " + fx1xm);
    if(counter > 1) {
      console.log("ea = " + xm + "-" + firstvalue + "/ " + xm);
      ea = Math.abs((xm - firstvalue) / xm * 100);
    }
    console.log("Se imprime");
    $("#table").append("<tr><th class='wow bounceInUp' data-wow-delay='0.5s'>"+x1.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='0.6s'>"+x2.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='0.7s'>"+xm.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='0.8s'>"+fx1.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='0.9s'>"+fxm.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='1s'>"+fx1xm.toFixed(err)+"</th><th class='wow bounceInUp' data-wow-delay='1.1s'>"+(ea).toFixed(3)+"%"+"</th>");
    if(fx1xm > 0) {
      console.log("positive");
      x1 = xm;
      console.log("Nuevo x2 : " + x2);
    } else if(fx1xm < 0) {
      console.log("negativazo");
      console.log("Nuevo x1 : " + x1);
      x2 = xm;
    }
    counter++;
    console.log("First value: " + firstvalue);
    console.log("ea: " + ea);

    firstvalue = xm;
    }
    $("#res").text($("#res").text() + xm);

}
