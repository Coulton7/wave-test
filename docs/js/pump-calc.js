(function($) {
  function calculate() {
    var pumps = document.getElementById('pumps').value,
        cost = 294.06,
        costYear = pumps * cost.toFixed(2),
        labtectaOneYear = 132.06,
        oneYear = pumps * labtectaOneYear.toFixed(2),
        fiveYear = labtectaOneYear + (costYear * 4).toFixed(2);

      document.getElementById('lipSealCost').innerHTML = costYear;
      document.getElementById('yearOne').innerHTML = oneYear;
      document.getElementById('annualYear').innerHTML = costYear;
      document.getElementById('fiveYear').innerHTML = fiveYear;
  }

  $(document).ready(function() {
    document.getElementById('calculate').addEventListener("click", function() {
      calculate();
    });
  });
})(jQuery);
