
var pike = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 23,
  max: 65,
  avg: 6.3,
};

pike.listHours = function () {
  var pikeInfo = document.getElementById('pikeInfo');
  for (var i = 0; i < pike.hours.length; i++) {
    console.log(pike.hours[i]);
    var listItem = document.createElement('li');
    listItem.textContent = pike.hours[i];
    pikeInfo.appendChild(listItem);
  };
};

pike.listHours();
