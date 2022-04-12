(function($){
  $(document).ready(function() {

    function getUrlVars()
    {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    var salesString = getUrlVars()["sc"];
    if(salesString=='ml'){
      $('#sales-ml').show();
    }
    else if (submitString='li') {
      $('#sales-li').show();
    }
  });
})(jQuery);
