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
  $('#table').empty();
  $("#res").text("Resultado: ");
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
  metodo(values[6], values[7], values[8]);
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
  res = res + Math.sin(x * Math.PI / 180) * values[5];
  //res = res + values[5];
  //console.log("LACHIDA: " + res);
  //console.log(Math.sin(x * Math.PI / 180) * values[5]);
  //console.log("Res: " + res);
  return res;
}

function metodo(firstval, secondval, error) {
  var x1 = firstval;
  var x2 = secondval;
  var ea = 100;
  var fx1 = calcf(x1);
  var fx2 = calcf(x2);
  var xr = 0;
  var fxr = 0;
  var err = 5;
  xr = (fx2 * x1 - fx1 * x2) / (fx2 - fx1);
  fxr = calcf(xr);
  var firstvalue = fxr;

  if (fx1 * fx2 < 0) {
    $("#table").append("<tr><th class='table-title wow bounceInUp' data-wow-delay='0.5s'>X1</th><th class='table-title wow bounceInUp' data-wow-delay='0.6s'>X2</th><th class='table-title wow bounceInUp' data-wow-delay='0.7s'>Xr</th><th class='table-title wow bounceInUp' data-wow-delay='0.8s'>f(X1)</th><th class='table-title wow bounceInUp' data-wow-delay='0.9s'>f(X2)</th><th class='table-title wow bounceInUp' data-wow-delay='1s'>f(Xr)</th><th class='table-title wow bounceInUp' data-wow-delay='1.1s'>ea</th>");

    while (ea > error) {

      xr = (fx2 * x1 - fx1 * x2) / (fx2 - fx1);
      fxr = calcf(xr);
      console.log("x1: " + x1);

      console.log("x2: " + x2);

      console.log("xr: " + xr);

      console.log("fx1: " + fx1);

      console.log("fx2: " + fx2);

      console.log("fxr: " + fxr);
      if (fx1 * fxr > 0) {
        x1 = xr;
        fx1 = fxr;
      } else if (fx1 * fxr < 0) {
        x2 = xr;
        fx2 = fxr;
      }
      console.log("ea: " + ea);
      console.log("ea = " + xr + "-" + firstvalue + "/" + xr);
      ea = Math.abs((xr - firstvalue) / xr * 100);
      console.log("ea: " + ea);
      firstvalue = xr;
      $("#table").append("<tr><th class='wow bounceInUp' data-wow-delay='0.5s'>" + x1.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='0.6s'>" + x2.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='0.7s'>" + xr.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='0.8s'>" + fx1.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='0.9s'>" + fx2.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='1s'>" + fxr.toFixed(err) + "</th><th class='wow bounceInUp' data-wow-delay='1.1s'>" + ea.toFixed(3) + "%" + "</th>");
    }
    $("#res").text($("#res").text() + xr);
  } else {
    $("#res").text("ERROR: f(X1) y f(x2) no son menores a 0");
  }
}