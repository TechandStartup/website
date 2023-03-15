const partial = document.getElementById('mongo');
fetch('_mongo.html')
  .then((response) => response.text())
  .then((body) => partial.innerHTML = body);