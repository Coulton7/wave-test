(function($) {
  function calculate() {
    var pumps = document.getElementById('pumps').value,
        cost = 294.06,
        costYear = pumps * cost,
        labtectaOneYear = 132.06,
        oneYear = pumps * labtectaOneYear,
        fiveYear = labtectaOneYear + (costYear * 4);

      document.getElementById('lipSealCost').innerHTML = costYear;
      document.getElementById('yearOne').innerHTML = oneYear;
      document.getElementById('annualYear').innerHTML = costYear;
      document.getElementById('fiveYear').innerHTML = fiveYear;
  }

  $(document).ready(function() {
    document.getElementById('calculate').addEventListener("click", function() {
      console.log('button was clicked');
      calculate();
    });
  });
})(jQuery);
