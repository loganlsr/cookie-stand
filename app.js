'use strict';

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var pike = {
  locationName: '1st and Pike',
  identifier: 'firstandpike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

pike.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var custEachHour = Math.floor(Math.random() * (pike.maxCustPerHour - pike.minCustPerHour + 1)) + pike.minCustPerHour;
    pike.custEachHourArray.push(custEachHour);
  };
};

pike.calculatecookiesEachHourArray = function () {
  pike.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(pike.custEachHourArray[i] * pike.avgCookiesPerCust);
    pike.cookiesEachHourArray.push(cookiesPerHour);
    pike.totalDailyCookieSales += cookiesPerHour;
  };
};
pike.calculatecookiesEachHourArray(pike.custEachHourArray, pike.avgCookiesPerCust);

pike.listHours = function () {
  var pikeInfo = document.getElementById('pikeInfo');
  for (var i = 0; i < pike.custEachHourArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + pike.cookiesEachHourArray[i];
    pikeInfo.appendChild(listItem);
  };
  var totalDailyCookieSales = document.createElement('li');
  totalDailyCookieSales.textContent = 'Total - ' + pike.totalDailyCookieSales;
  pikeInfo.appendChild(totalDailyCookieSales);
};
pike.listHours();

var seatac = {
  locationName: 'Seatac Airport',
  identifier: 'seatacairport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

seatac.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var custEachHour = Math.floor(Math.random() * (seatac.maxCustPerHour - seatac.minCustPerHour + 1)) + seatac.minCustPerHour;
    seatac.custEachHourArray.push(custEachHour);
  };
};
seatac.calcCustEachHour(seatac.minCustPerHour,seatac.maxCustPerHour);

seatac.calculatecookiesEachHourArray = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(seatac.custEachHourArray[i] * seatac.avgCookiesPerCust);
    seatac.cookiesEachHourArray.push(cookiesPerHour);
    seatac.totalDailyCookieSales += cookiesPerHour;
  };
};
seatac.calculatecookiesEachHourArray(seatac.custEachHourArray, seatac.avgCookiesPerCust);

seatac.listHours = function () {
  var seatacInfo = document.getElementById('seatacInfo');
  for (var i = 0; i < seatac.custEachHourArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + seatac.cookiesEachHourArray[i];
    seatacInfo.appendChild(listItem);
  };
  var totalDailyCookieSales = document.createElement('li');
  totalDailyCookieSales.textContent = 'Total - ' + seatac.totalDailyCookieSales;
  seatacInfo.appendChild(totalDailyCookieSales);
};
seatac.listHours();

var center = {
  locationName: 'Seattle Center',
  identifier: 'seattlecenter',
  minCustPerHour:11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

center.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (center.maxCustPerHour - center.minCustPerHour + 1)) + center.minCustPerHour;
    center.custEachHourArray.push(oneHour);
  };
};
center.calcCustEachHour(center.minCustPerHour,center.maxCustPerHour);

center.calculatecookiesEachHourArray = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(center.custEachHourArray[i] * center.avgCookiesPerCust);
    center.cookiesEachHourArray.push(cookiesPerHour);
    center.totalDailyCookieSales += cookiesPerHour;
  };
};
center.calculatecookiesEachHourArray(center.custEachHourArray, center.avgCookiesPerCust);

center.listHours = function () {
  var centerInfo = document.getElementById('centerInfo');
  for (var i = 0; i < center.custEachHourArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + center.cookiesEachHourArray[i];
    centerInfo.appendChild(listItem);
  };
  var totalDailyCookieSales = document.createElement('li');
  totalDailyCookieSales.textContent = 'Total - ' + center.totalDailyCookieSales;
  centerInfo.appendChild(totalDailyCookieSales);
};
center.listHours();

var capHill = {
  locationName: 'Capitol Hill',
  identifier: 'capitolhill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

capHill.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (capHill.maxCustPerHour - capHill.minCustPerHour + 1)) + capHill.minCustPerHour;
    capHill.custEachHourArray.push(oneHour);
  };
};
capHill.calcCustEachHour(capHill.minCustPerHour,capHill.maxCustPerHour);

capHill.calculatecookiesEachHourArray = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(capHill.custEachHourArray[i] * capHill.avgCookiesPerCust);
    capHill.cookiesEachHourArray.push(cookiesPerHour);
    capHill.totalDailyCookieSales += cookiesPerHour;
  };
};
capHill.calculatecookiesEachHourArray(capHill.custEachHourArray, capHill.avgCookiesPerCust);

capHill.listHours = function () {
  var capHillInfo = document.getElementById('capHillInfo');
  for (var i = 0; i < capHill.custEachHourArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + capHill.cookiesEachHourArray[i];
    capHillInfo.appendChild(listItem);
  };
  var totalDailyCookieSales = document.createElement('li');
  totalDailyCookieSales.textContent = 'Total - ' + capHill.totalDailyCookieSales;
  capHillInfo.appendChild(totalDailyCookieSales);
};
capHill.listHours();

var alki = {
  locationName: 'Alki',
  identifier: 'alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};

alki.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (alki.maxCustPerHour - alki.minCustPerHour + 1)) + alki.minCustPerHour;
    alki.custEachHourArray.push(oneHour);
  };
};
alki.calcCustEachHour(alki.minCustPerHour,alki.maxCustPerHour);

alki.calculatecookiesEachHourArray = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(alki.custEachHourArray[i] * alki.avgCookiesPerCust);
    alki.cookiesEachHourArray.push(cookiesPerHour);
    alki.totalDailyCookieSales += cookiesPerHour;
  };
};
alki.calculatecookiesEachHourArray(alki.custEachHourArray, alki.avgCookiesPerCust);

alki.listHours = function () {
  var alkiInfo = document.getElementById('alkiInfo');
  for (var i = 0; i < alki.custEachHourArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + alki.cookiesEachHourArray[i];
    alkiInfo.appendChild(listItem);
  };
  var totalDailyCookieSales = document.createElement('li');
  totalDailyCookieSales.textContent = 'Total - ' + alki.totalDailyCookieSales;
  alkiInfo.appendChild(totalDailyCookieSales);
};
alki.listHours();
