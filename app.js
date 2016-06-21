'use strict';

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  // this.identifier = identifier;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

Store.prototype.calcCustEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var custEachHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    console.log(custEachHour);
    console.log(this.minCustPerHour);
    this.custEachHourArray.push(custEachHour);
  };
};

Store.prototype.calcCookiesEachHourArray = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(cookiesPerHour);
    this.totalDailyCookieSales += cookiesPerHour;
  };
};
pike.calcCookiesEachHourArray();
seatac.calcCookiesEachHourArray();
center.calcCookiesEachHourArray();
capHill.calcCookiesEachHourArray();
alki.calcCookiesEachHourArray();

var renderTableHeader = function() {
  var headerTitles = [' ', 'Daily Location Total'];
  var locationInfo = document.getElementById('locationInfo');
  var trEl = document.createElement('tr');
  for(var i = 0; i < headerTitles.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = headerTitles[i];
    trEl.appendChild(thEl);
  }
  for( var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  locationInfo.appendChild(trEl);
};
renderTableHeader();

var renderTableRow = function(stands) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = stands.locationName;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = stands.totalDailyCookieSales;
  trEl.appendChild(tdEl);

  for( var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = stands.cookiesEachHourArray[i];
    trEl.appendChild(tdEl);
  };
  locationInfo.appendChild(trEl);
};
renderTableRow(pike);
renderTableRow(seatac);
renderTableRow(center);
renderTableRow(capHill);
renderTableRow(alki);
