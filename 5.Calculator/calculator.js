function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }
  