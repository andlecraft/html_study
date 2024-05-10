/*
fetch('visitors.json')
  .then(response => response.json())
  .then(data => {
    const name = data.name;
    const visitors = data.visitors;

    displayVisitorInfo(name, visitors);
  });

function displayVisitorInfo(name, visitors) {
  const visitorDiv = document.getElementsByClassName('visitorInfo');
  let html = `<h2>${name}</h2>`;

  visitors.forEach(visitor => {
    html += `<h3>${visitor.day}</h3>`;
    html += '<ul>';
    for (const [time, count] of Object.entries(visitor.visitor)) {
     html += `<li>${time}: ${count}</li>`;
    }
    html += '</ul>';
  });

  visitorDiv.innerHTML = html;
}*/
//const obj = JSON.parse(jsonData);

$(document).ready(function() {
    $.getJSON('visitors.json', function(datas) {

      console.log(datas)
      
      let html = `<h2>${name}</h2>`;
      datas.data.forEach(data => {

        const visitor = data.visitors

        visitor.forEach((data) => {
          console.log(data.day);
          console.log(data.visitor)
        })
      });

      $('#visitorInfo').html(html);
    });
  });

