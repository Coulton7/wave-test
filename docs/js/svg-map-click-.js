document.addEventListener("DOMContentLoaded", function () {
  var allRegions = document.querySelectorAll("#Lands > *");
  var x = document.querySelector('.location-overlay');
  allRegions.forEach(function (el) {
    el.addEventListener("click", function () {
      var link = this.getAttribute('id');
      var state;
      switch (true) {
        case link == "Land-Maine":
          state = "Maine";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".ME").classList.add("show");
          break;
        case link == "Land-NH":
          state = "New Hampshire";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".NH").classList.add("show");
          break;
        case link == "Land-Vt":
          state = "Vermont";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".VT").classList.add("show");
          break;
        case link == "Land-NewYork":
          state = "New York";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".NY").classList.add("show");
          break;
        case link == "Land-NewYork_2":
          state = "New York";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".NY").classList.add("show");
          break;
        case link == "Land-Mass":
          state = "Massachusetts";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MA").classList.add("show");
          break;
        case link == "Land-Conn":
          state = "Connecticut";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".CT").classList.add("show");
          break;
        case link == "Land-Pennsylvania":
          state = "Pennsylvania";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".PA").classList.add("show");
          break;
        case link == "Land-RI":
          state = "Rhode Island";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".RI").classList.add("show");
          break;
        case link == "Land-NewJersey":
          state = "New Jersey";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".NJ").classList.add("show");
          break;
        case link == "Land-Del":
          state = "Delaware";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".DE").classList.add("show");
          break;
        case link == "Land-Md":
          state = "Maryland";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MD").classList.add("show");
          break;
        case link == "Land-WestVirginia":
          state = "West Virginia";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".WV").classList.add("show");
          break;
        case link == "Land-Virginia_1_":
          state = "Virginia";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".VA").classList.add("show");
          break;
        case link == "Land-Virginia_2_":
          state = "Virginia";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".VA").classList.add("show");
          break;
        case link == "Land-NorthCarolina_1_":
          state = "North Carolina";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".NC").classList.add("show");
          break;
        case link == "Land-SouthCarolina":
          state = "South Carolina";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".SC").classList.add("show");
          break;
        case link == "Land-Georgia":
          state = "Georgia";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".GA").classList.add("show");
          break;
        case link == "Land-Florida":
          state = "Florida";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".FL").classList.add("show");
          break;
        case link == "Land-Alabama":
          state = "Alabama";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".AL").classList.add("show");
          break;
        case link == "Land-Mississippi":
          state = "Mississippi";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".MS").classList.add("show");
          break;
        case link == "Land-Tennessee":
          state = "Tennessee";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".Kingsport").classList.add("show");
          document.querySelectorAll(".TN").classList.add("show");
          break;
        case link == "Land-Kentucky":
          state = "Kentucky";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".KY").classList.add("show");
          break;
        case link == "Land-Ohio":
          state = "Ohio";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".OH").classList.add("show");
          break;
        case link == "Land-Michigan_1_":
          state = "Michigan";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Michigan_2_":
          state = "Michigan";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Michigan_3_":
          state = "Michigan";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Indiana":
          state = "Indiana";
          document.querySelectorAll(".Lombard").classList.add("show");
          document.querySelectorAll(".IN").classList.add("show");
          break;
        case link == "Land-Illinois":
          state = "Illinois";
          document.querySelectorAll(".Lombard").classList.add("show");
          document.querySelectorAll(".IL").classList.add("show");
          break;
        case link == "Land-Wisconsin":
          state = "Wisconsin";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".Lombard").classList.add("show");
          document.querySelectorAll(".WI").classList.add("show");
          break;
        case link == "Land-Minnesota":
          state = "Minnesota";
          document.querySelectorAll(".Fairfield").classList.add("show");
          document.querySelectorAll(".MN").classList.add("show");
          break;
        case link == "Land-Iowa":
          state = "Iowa";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".IA").classList.add("show");
          break;
        case link == "Land-Missouri":
          state = "Missouri";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".MO").classList.add("show");
          break;
        case link == "Land-Arkansas":
          state = "Arkansas";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".AR").classList.add("show");
          break;
        case link == "Land-Louisiana":
          state = "Louisiana";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".LA").classList.add("show");
          break;
        case link == "Land-Texas":
          state = "Texas";
          document.querySelectorAll(".Corpus").classList.add("show");
          document.querySelectorAll(".Odessa").classList.add("show");
          document.querySelectorAll(".TX").classList.add("show");
          break;
        case link == "Land-Oklahoma":
          state = "Oklahoma";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".OK").classList.add("show");
          break;
        case link == "Land-Kansas":
          state = "Kansas";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".KS").classList.add("show");
          break;
        case link == "Land-Nebraska":
          state = "Nebraska";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".NE").classList.add("show");
          break;
        case link == "Land-SouthDakota":
          state = "South Dakota";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".SD").classList.add("show");
          break;
        case link == "Land-NorthDakota":
          state = "North Dakota";
          document.querySelectorAll(".Cedar").classList.add("show");
          document.querySelectorAll(".ND").classList.add("show");
          break;
        case link == "Land-Montana":
          state = "Montana";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".MT").classList.add("show");
          break;
        case link == "Land-Wyoming":
          state = "Wyoming";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".WY").classList.add("show");
          break;
        case link == "Land-Colorado":
          state = "Colorado";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".CO").classList.add("show");
          break;
        case link == "Land-NewMexico":
          state = "New Mexico";
          document.querySelectorAll(".Odessa").classList.add("show");
          document.querySelectorAll(".NM").classList.add("show");
          break;
        case link == "Land-Arizona":
          state = "Arizona";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".AZ").classList.add("show");
          break;
        case link == "Land-Utah":
          state = "Utah";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".UT").classList.add("show");
          break;
        case link == "Land-Idaho":
          state = "Idaho";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".ID").classList.add("show");
          break;
        case link == "Land-Washington":
          state = "Washington";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".WA").classList.add("show");
          break;
        case link == "Land-Oregona":
          state = "Oregon";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".OR").classList.add("show");
          break;
        case link == "Land-Nevada":
          state = "Nevada";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".NV").classList.add("show");
          break;
        case link == "Land-California":
          state = "California";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".CA").classList.add("show");
          break;
        case link == "Land-Alaska":
          state = "Alaska";
          document.querySelectorAll(".Longview").classList.add("show");
          document.querySelectorAll(".AK").classList.add("show");
          break;
        case link == "Land-Hawaii":
          state = "Hawaii";
          document.querySelectorAll(".Rockford").classList.add("show");
          document.querySelectorAll(".HI").classList.add("show");
          break;
        default:
          state = "US State";
          document.querySelectorAll(".Rockford").classList.add("show");
          break;
      }

      x.style.height = "100%";
      document.querySelector("body").classList.add("noscroll");
      document.querySelector(".location-pop-up").addEventListener("hidden.bs.modal", (event) => {
          document.querySelector("body").classList.remove("noscroll");

          switch (true) {
            case link == "Land-Maine":
              state = "Maine";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".ME").classList.remove("show");
              break;
            case link == "Land-NH":
              state = "New Hampshire";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".NH").classList.remove("show");
              break;
            case link == "Land-Vt":
              state = "Vermont";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".VT").classList.remove("show");
              break;
            case link == "Land-NewYork":
              state = "New York";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".NY").classList.remove("show");
              break;
            case link == "Land-NewYork_2":
              state = "New York";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".NY").classList.remove("show");
              break;
            case link == "Land-Mass":
              state = "Massachusetts";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MA").classList.remove("show");
              break;
            case link == "Land-Conn":
              state = "Connecticut";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".CT").classList.remove("show");
              break;
            case link == "Land-Pennsylvania":
              state = "Pennsylvania";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".PA").classList.remove("show");
              break;
            case link == "Land-RI":
              state = "Rhode Island";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".RI").classList.remove("show");
              break;
            case link == "Land-NewJersey":
              state = "New Jersey";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".NJ").classList.remove("show");
              break;
            case link == "Land-Del":
              state = "Delaware";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".DE").classList.remove("show");
              break;
            case link == "Land-Md":
              state = "Maryland";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MD").classList.remove("show");
              break;
            case link == "Land-WestVirginia":
              state = "West Virginia";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".WV").classList.remove("show");
              break;
            case link == "Land-Virginia_1_":
              state = "Virginia";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".VA").classList.remove("show");
              break;
            case link == "Land-Virginia_2_":
              state = "Virginia";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".VA").classList.remove("show");
              break;
            case link == "Land-NorthCarolina_1_":
              state = "North Carolina";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".NC").classList.remove("show");
              break;
            case link == "Land-SouthCarolina":
              state = "South Carolina";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".SC").classList.remove("show");
              break;
            case link == "Land-Georgia":
              state = "Georgia";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".GA").classList.remove("show");
              break;
            case link == "Land-Florida":
              state = "Florida";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".FL").classList.remove("show");
              break;
            case link == "Land-Alabama":
              state = "Alabama";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".AL").classList.remove("show");
              break;
            case link == "Land-Mississippi":
              state = "Mississippi";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".MS").classList.remove("show");
              break;
            case link == "Land-Tennessee":
              state = "Tennessee";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".Kingsport").classList.remove("show");
              document.querySelectorAll(".TN").classList.remove("show");
              break;
            case link == "Land-Kentucky":
              state = "Kentucky";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".KY").classList.remove("show");
              break;
            case link == "Land-Ohio":
              state = "Ohio";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".OH").classList.remove("show");
              break;
            case link == "Land-Michigan_1_":
              state = "Michigan";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Michigan_2_":
              state = "Michigan";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Michigan_3_":
              state = "Michigan";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Indiana":
              state = "Indiana";
              document.querySelectorAll(".Lombard").classList.remove("show");
              document.querySelectorAll(".IN").classList.remove("show");
              break;
            case link == "Land-Illinois":
              state = "Illinois";
              document.querySelectorAll(".Lombard").classList.remove("show");
              document.querySelectorAll(".IL").classList.remove("show");
              break;
            case link == "Land-Wisconsin":
              state = "Wisconsin";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".Lombard").classList.remove("show");
              document.querySelectorAll(".WI").classList.remove("show");
              break;
            case link == "Land-Minnesota":
              state = "Minnesota";
              document.querySelectorAll(".Fairfield").classList.remove("show");
              document.querySelectorAll(".MN").classList.remove("show");
              break;
            case link == "Land-Iowa":
              state = "Iowa";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".IA").classList.remove("show");
              break;
            case link == "Land-Missouri":
              state = "Missouri";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".MO").classList.remove("show");
              break;
            case link == "Land-Arkansas":
              state = "Arkansas";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".AR").classList.remove("show");
              break;
            case link == "Land-Louisiana":
              state = "Louisiana";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".LA").classList.remove("show");
              break;
            case link == "Land-Texas":
              state = "Texas";
              document.querySelectorAll(".Corpus").classList.remove("show");
              document.querySelectorAll(".Odessa").classList.remove("show");
              document.querySelectorAll(".TX").classList.remove("show");
              break;
            case link == "Land-Oklahoma":
              state = "Oklahoma";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".OK").classList.remove("show");
              break;
            case link == "Land-Kansas":
              state = "Kansas";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".KS").classList.remove("show");
              break;
            case link == "Land-Nebraska":
              state = "Nebraska";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".NE").classList.remove("show");
              break;
            case link == "Land-SouthDakota":
              state = "South Dakota";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".SD").classList.remove("show");
              break;
            case link == "Land-NorthDakota":
              state = "North Dakota";
              document.querySelectorAll(".Cedar").classList.remove("show");
              document.querySelectorAll(".ND").classList.remove("show");
              break;
            case link == "Land-Montana":
              state = "Montana";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".MT").classList.remove("show");
              break;
            case link == "Land-Wyoming":
              state = "Wyoming";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".WY").classList.remove("show");
              break;
            case link == "Land-Colorado":
              state = "Colorado";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".CO").classList.remove("show");
              break;
            case link == "Land-NewMexico":
              state = "New Mexico";
              document.querySelectorAll(".Odessa").classList.remove("show");
              document.querySelectorAll(".NM").classList.remove("show");
              break;
            case link == "Land-Arizona":
              state = "Arizona";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".AZ").classList.remove("show");
              break;
            case link == "Land-Utah":
              state = "Utah";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".UT").classList.remove("show");
              break;
            case link == "Land-Idaho":
              state = "Idaho";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".ID").classList.remove("show");
              break;
            case link == "Land-Washington":
              state = "Washington";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".WA").classList.remove("show");
              break;
            case link == "Land-Oregona":
              state = "Oregon";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".OR").classList.remove("show");
              break;
            case link == "Land-Nevada":
              state = "Nevada";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".NV").classList.remove("show");
              break;
            case link == "Land-California":
              state = "California";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".CA").classList.remove("show");
              break;
            case link == "Land-Alaska":
              state = "Alaska";
              document.querySelectorAll(".Longview").classList.remove("show");
              document.querySelectorAll(".AK").classList.remove("show");
              break;
            case link == "Land-Hawaii":
              state = "Hawaii";
              document.querySelectorAll(".Rockford").classList.remove("show");
              document.querySelectorAll(".HI").classList.remove("show");
              break;
            default:
              state = "US State";
              document.querySelectorAll(".Rockford").classList.remove("show");
              break;
          }
        });
    });
  });
});
