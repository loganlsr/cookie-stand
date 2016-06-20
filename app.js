'use strict';

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

pike.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    pike.hourlyCust.push(oneHour);
  };
};
pike.generateRandomNum(pike.min,pike.max);

pike.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    pike.hourlySales.push(saleHour);
    pike.total += saleHour;
  };
};
pike.calculateHourlySales(pike.hourlyCust, pike.avg);

pike.listHours = function () {
  var pikeInfo = document.getElementById('pikeInfo');
  for (var i = 0; i < pike.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + pike.hourlySales[i];
    pikeInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + pike.total;
  pikeInfo.appendChild(total);
};
pike.listHours();

var seatac = {
  min: 3,
  max: 24,
  avg: 1.2,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

seatac.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    seatac.hourlyCust.push(oneHour);
  };
};
seatac.generateRandomNum(seatac.min,seatac.max);

seatac.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    seatac.hourlySales.push(saleHour);
    seatac.total += saleHour;
  };
};
seatac.calculateHourlySales(seatac.hourlyCust, seatac.avg);

seatac.listHours = function () {
  var seatacInfo = document.getElementById('seatacInfo');
  for (var i = 0; i < seatac.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + seatac.hourlySales[i];
    seatacInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + seatac.total;
  seatacInfo.appendChild(total);
};
seatac.listHours();

var center = {
  min:11,
  max: 38,
  avg: 3.7,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

center.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    center.hourlyCust.push(oneHour);
  };
};
center.generateRandomNum(center.min,center.max);

center.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    center.hourlySales.push(saleHour);
    center.total += saleHour;
  };
};
center.calculateHourlySales(center.hourlyCust, center.avg);

center.listHours = function () {
  var centerInfo = document.getElementById('centerInfo');
  for (var i = 0; i < center.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + center.hourlySales[i];
    centerInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + center.total;
  centerInfo.appendChild(total);
};
center.listHours();

var capHill = {
  min: 20,
  max: 38,
  avg: 2.3,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

capHill.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    capHill.hourlyCust.push(oneHour);
  };
};
capHill.generateRandomNum(capHill.min,capHill.max);

capHill.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    capHill.hourlySales.push(saleHour);
    capHill.total += saleHour;
  };
};
capHill.calculateHourlySales(capHill.hourlyCust, capHill.avg);

capHill.listHours = function () {
  var capHillInfo = document.getElementById('capHillInfo');
  for (var i = 0; i < capHill.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + capHill.hourlySales[i];
    capHillInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + capHill.total;
  capHillInfo.appendChild(total);
};
capHill.listHours();

var alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

alki.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    alki.hourlyCust.push(oneHour);
  };
};
alki.generateRandomNum(alki.min,alki.max);

alki.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    alki.hourlySales.push(saleHour);
    alki.total += saleHour;
  };
};
alki.calculateHourlySales(alki.hourlyCust, alki.avg);

alki.listHours = function () {
  var alkiInfo = document.getElementById('alkiInfo');
  for (var i = 0; i < alki.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + alki.hourlySales[i];
    alkiInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + alki.total;
  alkiInfo.appendChild(total);
};
alki.listHours();
