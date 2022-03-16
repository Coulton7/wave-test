(function($) {
  function calculate() {
    var pumps = document.getElementById('pumps').value,
        cost = 294.06,
        costYear = pumps * cost,
        labtectaOneYear = 132.06,
        oneYear = pumps * labtectaOneYear,
        fiveYear = (pumps * labtectaOneYear) + (pumps * cost * 4);

      document.getElementById('lipSealCost').innerHTML = '£' + costYear.toLocaleString({minimumFractionDigits: 2});
      document.getElementById('yearOne').innerHTML = '£' + oneYear.toLocaleString({minimumFractionDigits: 2});
      document.getElementById('annualYear').innerHTML = '£' + costYear.toLocaleString({minimumFractionDigits: 2});
      document.getElementById('fiveYear').innerHTML = '£' + fiveYear.toLocaleString({minimumFractionDigits: 2});
  }

  $(document).ready(function() {
    document.getElementById('calculate').addEventListener("click", function() {
      calculate();
    });
  });
})(jQuery);
