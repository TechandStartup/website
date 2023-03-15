const partial = document.getElementById('npm-run-dev');
fetch('_npm_run_dev.html')
  .then((response) => response.text())
  .then((body) => partial.innerHTML = body);