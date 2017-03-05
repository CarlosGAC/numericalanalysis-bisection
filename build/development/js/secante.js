"use strict";

var pol5 = $("#pol5");
var pol4 = $("#pol4");
var pol3 = $("#pol3");
var pol2 = $("#pol2");
var pol1 = $("#pol1");
var polind = $("#polind");
var submit = $("#submit");

var arraypols = [$("#pol5"), $("#pol4"), $("#pol3"), $("#pol2"), $("#pol1"), $("#polind"), $("#initial1"), $("#initial2"), $("#ea")];
var values = [];

submit.click(function () {
  arraypols.forEach(function (item, index) {
    if (item.val() == "") {
      item.val(0);
      //console.log("Es cero men");
    } else if (isNaN(parseFloat(item.val()))) {
      item.val(0);
      //console.log("Es nan men");
    } else {
      //console.log("Es el mero mero culero");
      item.val(parseFloat(item.val()));
    }
    values[index] = parseFloat(item.val());
  });
  //console.log("Asd: " +values[0]);
  bisection(values[6], values[7], values[8]);
});

function calcf(x) {
  var res = 0;
  var power = 5;
  for (var i = 0; i < 5; i++) {
    //console.log(values[i]);
    //console.log("i: " + i);
    //console.log("x: " + x);
    //console.log("power: " + Math.pow(x,power));
    res = res + values[i] * Math.pow(x, power);
    //console.log(res);
    power--;
  }
  //res = res + Math.sin(x * Math.PI / 180) * values[5];
  res = res + values[5];
  //console.log("LACHIDA: " + res);
  //console.log(Math.sin(x * Math.PI / 180) * values[5]);
  //console.log("Res: " + res);
  return res;
}

function bisection(firstval, secondval, error) {
  var x1 = firstval;
  var x2 = secondval;
  var ea = 100;
  var xm = 0;
  var fx1 = 0;
  var fxm = 0;
  var fx1xm = 0;
  var counter = 0;
  var firstvalue = calcf((x1 + x2) / 2);

  while (ea > error) {
    console.log("X1 : " + x1);
    console.log("X2: " + x2);
    xm = (x1 + x2) / 2;
    console.log("Xm: " + xm);
    fx1 = calcf(x1);
    console.log("f(x1): " + fx1);
    fxm = calcf(xm);
    console.log("f(xm): " + fxm);
    fx1xm = fx1 * fxm;
    console.log("f(x1xm): " + fx1xm);
    if (fx1xm > 0) {
      console.log("positive");
      x1 = xm;
      console.log("Nuevo x2 : " + x2);
    } else if (fx1xm < 0) {
      console.log("negativazo");
      console.log("Nuevo x1 : " + x1);
      x2 = xm;
    }
    if (counter > 1) {
      console.log("ea = " + xm + "-" + firstvalue + "/ " + xm);
      ea = Math.abs((xm - firstvalue) / xm * 100);
    }
    counter++;
    console.log("First value: " + firstvalue);
    console.log("ea: " + ea);
    firstvalue = xm;
  }
}