const header = document.getElementById('header');
const footer = document.getElementById('footer');

fetch('header.html')
.then(function(response) {
  return response.text();
})
.then(function(body) {
  header.innerHTML = body;
});
fetch('footer.html')
.then(function(response) {
  return response.text();
})
.then(function(body) {
  footer.innerHTML = body;
});