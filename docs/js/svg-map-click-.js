document.addEventListener("DOMContentLoaded", function () {
  var allRegions = document.querySelectorAll("#Lands > *");
  var x = document.querySelector('.location-overlay');
  var fairfield = document.querySelectorAll(".Fairfield");
  var rockford = document.querySelectorAll(".Rockford");
  var kingsport = document.querySelectorAll(".Kingsport");
  var lombard = document.querySelectorAll(".Lombard");
  var cedar = document.querySelectorAll(".Cedar");
  var corpus = document.querySelectorAll(".Corpus");
  var odessa = document.querySelectorAll(".Odessa");
  var longview = document.querySelectorAll(".Longview");
  allRegions.forEach(function (el) {
    el.addEventListener("click", function () {
      var link = this.getAttribute('id');
      var state;
      switch (true) {
        case link == "Land-Maine":
          state = "Maine";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".ME").classList.add("show");
          break;
        case link == "Land-NH":
          state = "New Hampshire";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".NH").classList.add("show");
          break;
        case link == "Land-Vt":
          state = "Vermont";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".VT").classList.add("show");
          break;
        case link == "Land-NewYork":
          state = "New York";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".NY").classList.add("show");
          break;
        case link == "Land-NewYork_2":
          state = "New York";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".NY").classList.add("show");
          break;
        case link == "Land-Mass":
          state = "Massachusetts";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MA").classList.add("show");
          break;
        case link == "Land-Conn":
          state = "Connecticut";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".CT").classList.add("show");
          break;
        case link == "Land-Pennsylvania":
          state = "Pennsylvania";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".PA").classList.add("show");
          break;
        case link == "Land-RI":
          state = "Rhode Island";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".RI").classList.add("show");
          break;
        case link == "Land-NewJersey":
          state = "New Jersey";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".NJ").classList.add("show");
          break;
        case link == "Land-Del":
          state = "Delaware";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".DE").classList.add("show");
          break;
        case link == "Land-Md":
          state = "Maryland";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MD").classList.add("show");
          break;
        case link == "Land-WestVirginia":
          state = "West Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".WV").classList.add("show");
          break;
        case link == "Land-Virginia_1_":
          state = "Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".VA").classList.add("show");
          break;
        case link == "Land-Virginia_2_":
          state = "Virginia";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".VA").classList.add("show");
          break;
        case link == "Land-NorthCarolina_1_":
          state = "North Carolina";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".NC").classList.add("show");
          break;
        case link == "Land-SouthCarolina":
          state = "South Carolina";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".SC").classList.add("show");
          break;
        case link == "Land-Georgia":
          state = "Georgia";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".GA").classList.add("show");
          break;
        case link == "Land-Florida":
          state = "Florida";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".FL").classList.add("show");
          break;
        case link == "Land-Alabama":
          state = "Alabama";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".AL").classList.add("show");
          break;
        case link == "Land-Mississippi":
          state = "Mississippi";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".MS").classList.add("show");
          break;
        case link == "Land-Tennessee":
          state = "Tennessee";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          kingsport.forEach((kingsport) => {
            kingsport.classList.add('show');
          });
          document.querySelectorAll(".TN").classList.add("show");
          break;
        case link == "Land-Kentucky":
          state = "Kentucky";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".KY").classList.add("show");
          break;
        case link == "Land-Ohio":
          state = "Ohio";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".OH").classList.add("show");
          break;
        case link == "Land-Michigan_1_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Michigan_2_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Michigan_3_":
          state = "Michigan";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MI").classList.add("show");
          break;
        case link == "Land-Indiana":
          state = "Indiana";
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          document.querySelectorAll(".IN").classList.add("show");
          break;
        case link == "Land-Illinois":
          state = "Illinois";
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          document.querySelectorAll(".IL").classList.add("show");
          break;
        case link == "Land-Wisconsin":
          state = "Wisconsin";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          lombard.forEach((lombard) => {
            lombard.classList.add('show');
          });
          document.querySelectorAll(".WI").classList.add("show");
          break;
        case link == "Land-Minnesota":
          state = "Minnesota";
          fairfield.forEach((fairfield) => {
            fairfield.classList.add('show');
          });
          document.querySelectorAll(".MN").classList.add("show");
          break;
        case link == "Land-Iowa":
          state = "Iowa";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".IA").classList.add("show");
          break;
        case link == "Land-Missouri":
          state = "Missouri";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".MO").classList.add("show");
          break;
        case link == "Land-Arkansas":
          state = "Arkansas";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".AR").classList.add("show");
          break;
        case link == "Land-Louisiana":
          state = "Louisiana";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".LA").classList.add("show");
          break;
        case link == "Land-Texas":
          state = "Texas";
          corpus.forEach((corpus) => {
            corpus.classList.add('show');
          });
          odessa.forEach((odessa) => {
            odessa.classList.add('show');
          });
          document.querySelectorAll(".TX").classList.add("show");
          break;
        case link == "Land-Oklahoma":
          state = "Oklahoma";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".OK").classList.add("show");
          break;
        case link == "Land-Kansas":
          state = "Kansas";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".KS").classList.add("show");
          break;
        case link == "Land-Nebraska":
          state = "Nebraska";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".NE").classList.add("show");
          break;
        case link == "Land-SouthDakota":
          state = "South Dakota";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".SD").classList.add("show");
          break;
        case link == "Land-NorthDakota":
          state = "North Dakota";
          cedar.forEach((cedar) => {
            cedar.classList.add('show');
          });
          document.querySelectorAll(".ND").classList.add("show");
          break;
        case link == "Land-Montana":
          state = "Montana";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".MT").classList.add("show");
          break;
        case link == "Land-Wyoming":
          state = "Wyoming";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".WY").classList.add("show");
          break;
        case link == "Land-Colorado":
          state = "Colorado";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".CO").classList.add("show");
          break;
        case link == "Land-NewMexico":
          state = "New Mexico";
          odessa.forEach((odessa) => {
            odessa.classList.add('show');
          });
          document.querySelectorAll(".NM").classList.add("show");
          break;
        case link == "Land-Arizona":
          state = "Arizona";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".AZ").classList.add("show");
          break;
        case link == "Land-Utah":
          state = "Utah";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".UT").classList.add("show");
          break;
        case link == "Land-Idaho":
          state = "Idaho";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".ID").classList.add("show");
          break;
        case link == "Land-Washington":
          state = "Washington";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".WA").classList.add("show");
          break;
        case link == "Land-Oregona":
          state = "Oregon";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".OR").classList.add("show");
          break;
        case link == "Land-Nevada":
          state = "Nevada";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".NV").classList.add("show");
          break;
        case link == "Land-California":
          state = "California";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".CA").classList.add("show");
          break;
        case link == "Land-Alaska":
          state = "Alaska";
          longview.forEach((longview) => {
            longview.classList.add('show');
          });
          document.querySelectorAll(".AK").classList.add("show");
          break;
        case link == "Land-Hawaii":
          state = "Hawaii";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          document.querySelectorAll(".HI").classList.add("show");
          break;
        default:
          state = "US State";
          rockford.forEach((rockford) => {
            rockford.classList.add('show');
          });
          break;
      }

      x.style.height = "100%";
      document.querySelector("body").classList.add("noscroll");
      document.querySelector(".location-pop-up").addEventListener("hidden.bs.modal", (event) => {
          document.querySelector("body").classList.remove("noscroll");

          switch (true) {
            case link == "Land-Maine":
              state = "Maine";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".ME").classList.remove("show");
              break;
            case link == "Land-NH":
              state = "New Hampshire";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".NH").classList.remove("show");
              break;
            case link == "Land-Vt":
              state = "Vermont";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".VT").classList.remove("show");
              break;
            case link == "Land-NewYork":
              state = "New York";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".NY").classList.remove("show");
              break;
            case link == "Land-NewYork_2":
              state = "New York";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".NY").classList.remove("show");
              break;
            case link == "Land-Mass":
              state = "Massachusetts";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MA").classList.remove("show");
              break;
            case link == "Land-Conn":
              state = "Connecticut";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".CT").classList.remove("show");
              break;
            case link == "Land-Pennsylvania":
              state = "Pennsylvania";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".PA").classList.remove("show");
              break;
            case link == "Land-RI":
              state = "Rhode Island";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".RI").classList.remove("show");
              break;
            case link == "Land-NewJersey":
              state = "New Jersey";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".NJ").classList.remove("show");
              break;
            case link == "Land-Del":
              state = "Delaware";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".DE").classList.remove("show");
              break;
            case link == "Land-Md":
              state = "Maryland";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MD").classList.remove("show");
              break;
            case link == "Land-WestVirginia":
              state = "West Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".WV").classList.remove("show");
              break;
            case link == "Land-Virginia_1_":
              state = "Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".VA").classList.remove("show");
              break;
            case link == "Land-Virginia_2_":
              state = "Virginia";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".VA").classList.remove("show");
              break;
            case link == "Land-NorthCarolina_1_":
              state = "North Carolina";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".NC").classList.remove("show");
              break;
            case link == "Land-SouthCarolina":
              state = "South Carolina";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".SC").classList.remove("show");
              break;
            case link == "Land-Georgia":
              state = "Georgia";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".GA").classList.remove("show");
              break;
            case link == "Land-Florida":
              state = "Florida";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".FL").classList.remove("show");
              break;
            case link == "Land-Alabama":
              state = "Alabama";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".AL").classList.remove("show");
              break;
            case link == "Land-Mississippi":
              state = "Mississippi";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".MS").classList.remove("show");
              break;
            case link == "Land-Tennessee":
              state = "Tennessee";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              kingsport.forEach((kingsport) => {
                kingsport.classList.remove('show');
              });
              document.querySelectorAll(".TN").classList.remove("show");
              break;
            case link == "Land-Kentucky":
              state = "Kentucky";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".KY").classList.remove("show");
              break;
            case link == "Land-Ohio":
              state = "Ohio";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".OH").classList.remove("show");
              break;
            case link == "Land-Michigan_1_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Michigan_2_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Michigan_3_":
              state = "Michigan";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MI").classList.remove("show");
              break;
            case link == "Land-Indiana":
              state = "Indiana";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".IN").classList.remove("show");
              break;
            case link == "Land-Illinois":
              state = "Illinois";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".IL").classList.remove("show");
              break;
            case link == "Land-Wisconsin":
              state = "Wisconsin";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".WI").classList.remove("show");
              break;
            case link == "Land-Minnesota":
              state = "Minnesota";
              fairfield.forEach((fairfield) => {
                fairfield.classList.remove('show');
              });
              document.querySelectorAll(".MN").classList.remove("show");
              break;
            case link == "Land-Iowa":
              state = "Iowa";
              cedar.forEach((cedar) => {
                cedar.classList.remove('show');
              });
              document.querySelectorAll(".IA").classList.remove("show");
              break;
            case link == "Land-Missouri":
              state = "Missouri";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".MO").classList.remove("show");
              break;
            case link == "Land-Arkansas":
              state = "Arkansas";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".AR").classList.remove("show");
              break;
            case link == "Land-Louisiana":
              state = "Louisiana";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".LA").classList.remove("show");
              break;
            case link == "Land-Texas":
              state = "Texas";
              corpus.forEach((corpus) => {
                corpus.classList.remove('show');
              });
              odessa.forEach((odessa) => {
                odessa.classList.remove('show');
              });
              document.querySelectorAll(".TX").classList.remove("show");
              break;
            case link == "Land-Oklahoma":
              state = "Oklahoma";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".OK").classList.remove("show");
              break;
            case link == "Land-Kansas":
              state = "Kansas";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".KS").classList.remove("show");
              break;
            case link == "Land-Nebraska":
              state = "Nebraska";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".NE").classList.remove("show");
              break;
            case link == "Land-SouthDakota":
              state = "South Dakota";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".SD").classList.remove("show");
              break;
            case link == "Land-NorthDakota":
              state = "North Dakota";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".ND").classList.remove("show");
              break;
            case link == "Land-Montana":
              state = "Montana";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".MT").classList.remove("show");
              break;
            case link == "Land-Wyoming":
              state = "Wyoming";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".WY").classList.remove("show");
              break;
            case link == "Land-Colorado":
              state = "Colorado";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".CO").classList.remove("show");
              break;
            case link == "Land-NewMexico":
              state = "New Mexico";
              lombard.forEach((lombard) => {
                lombard.classList.remove('show');
              });
              document.querySelectorAll(".NM").classList.remove("show");
              break;
            case link == "Land-Arizona":
              state = "Arizona";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".AZ").classList.remove("show");
              break;
            case link == "Land-Utah":
              state = "Utah";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".UT").classList.remove("show");
              break;
            case link == "Land-Idaho":
              state = "Idaho";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".ID").classList.remove("show");
              break;
            case link == "Land-Washington":
              state = "Washington";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".WA").classList.remove("show");
              break;
            case link == "Land-Oregona":
              state = "Oregon";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".OR").classList.remove("show");
              break;
            case link == "Land-Nevada":
              state = "Nevada";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".NV").classList.remove("show");
              break;
            case link == "Land-California":
              state = "California";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".CA").classList.remove("show");
              break;
            case link == "Land-Alaska":
              state = "Alaska";
              longview.forEach((longview) => {
                longview.classList.remove('show');
              });
              document.querySelectorAll(".AK").classList.remove("show");
              break;
            case link == "Land-Hawaii":
              state = "Hawaii";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              document.querySelectorAll(".HI").classList.remove("show");
              break;
            default:
              state = "US State";
              rockford.forEach((rockford) => {
                rockford.classList.remove('show');
              });
              break;
          }
        });
    });
  });
});
