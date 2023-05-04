
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".form-select").chosen({
    disable_search_threshold: 10,
    no_results_text: "Sorry, no results found."
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#productEnquiry').on('shown.bs.modal', function() {
    document.querySelector('.chosen-select', this).chosen();
  });
});

