var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();





//get gui language from url param (default to EN)



var App = angular.module('Trump', ['ngAnimate']);

App.controller('index', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.data = allData;

  $scope.$on("$locationChangeSuccess", function () {
    updateState();
  });

  function updateState() {
    var path = $location.path().split("/")[1];
    // console.log(path);

    $scope.activePart = path;      

    try {
    $scope.activeChart = $scope.data[path];
    } catch (err) {
    // $scope.activeChart = [{value:0},{value:0},{value:0},{value:0},{value:0}];

    }
    // if (path == undefined) {

    //   $location.path("/");
    // } else if (path == "") {
    //   $scope.currScreen = 0;

    // } else if (path == "overview") {
    //   $scope.currScreen = 2;
    // } else {
    //   var nPath = parseInt(path);
    //   try {
    //     if (nPath >= 0 && nPath <= $scope.tweets.length) {

    //       $scope.currtweet = nPath;
    //       if ($scope.currScreen != 1) {
    //         $scope.changeView(1);
    //       }
    //       // Update overview item color
    //       $scope.tweets[$scope.currtweet].color = true;

    //       // TODO: Scroll to tweet x
    //       var leftpos = $('#overviewTweet' + $scope.currtweet).offset().left;

    //       $('.t-tweets-overview').animate({
    //         scrollLeft: leftpos + $('.t-tweets-overview').scrollLeft() - ($('.t-tweets-overview').width() / 2)
    //       }, 200);

    //       $scope.updateUI();
    //     }
    //   } catch (err) {

    //   }

    // }

  }

  function updateFavicon() {
    var src = "";
    if ($scope.currScreen = 1) {
      src = "img/favicons/" + $scope.currWinnerID + ".png";
    } else {
      src = "img/favicons/def.png";
    }

    $("link[type='image/x-icon']").attr("href", src);
  }
  $(document).ready(function () {
    var arrNames = [];
    arrNames.push('Intro'); // pushing 1st page;
    angular.forEach($scope.data, function (value, key) {
      angular.forEach(value, function (valueTwo, keyTwo) {
      $scope.data[key][keyTwo].nameid = key + "-" + valueTwo.listid;
      $scope.data[key + "-" + valueTwo.listid] = $scope.data[key][keyTwo].city;
        arrNames.push(key + "-" + valueTwo.listid);
      });
    });

    console.log($scope.data);


    $('#pagecontainer').fullpage({
      anchors: arrNames,
      scrollOverflow: true
    });

    Typed.new("#typed", {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 30,
      backDelay: 500,
      loop: true,
      contentType: 'html', // or text
      // defaults to null for infinite loop
      loopCount: null
    });

  });


}]);


var allData = {
  "y2017": [{
      csvlink: "https://trends.google.com/trends/explore?date=2017-04-23T01%202017-04-24T12&geo=IL&q=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94",
      term: "ריאל מדריד נגד ברצלונה לצפייה ישירה",
      listid: 1,
      percent: 10,
      city: [{
        name: "בית דגן",
        value: 100
      }, {
        name: "חצור הגלילית",
        value: 75
      }, {
        name: "שלומי",
        value: 75
      }, {
        name: "כפר סירקין",
        value: 73
      }, {
        name: "להבים",
        value: 72
      }, {
        name: "שבי ציון",
        value: 68
      }]
    },
    {
      csvlink: "https://trends.google.com/trends/explore?date=2017-04-23T01%202017-04-24T12&geo=IL&q=13%20%D7%A1%D7%99%D7%91%D7%95%D7%AA",
      term: "13 סיבות",
      listid: 2,
      percent: 30,
      city: [{
        name: "גן יבנה",
        value: 100
      }, {
        name: "גדרה",
        value: 98
      }, {
        name: "אילת",
        value: 94
      }, {
        name: "אשקלון",
        value: 86
      }, {
        name: "קרית ים",
        value: 80
      }, {
        name: "כפר יונה",
        value: 78
      }, {
        name: "אשדוד",
        value: 75
      }, {
        name: "כרמיאל",
        value: 66
      }]
    },
    {
      csvlink: "https://trends.google.com/trends/explore?date=2017-04-23T01%202017-04-24T12&geo=IL&q=%D7%94%D7%9E%D7%A1%D7%A2%20%D7%A9%D7%9C%20%D7%A4%D7%90%D7%A0%D7%99",
      listid: 3,
      term: "המסע של פאני",
      percent: 90,
     city: [{
        name: "ירושלים",
        value: 100
      }, {
        name: "תל אביב",
        value: 82
      }, {
        name: "חיפה",
        value: 58
      }]
    },
    {
      csvlink: "https://trends.google.com/trends/explore?date=2017-04-23T01%202017-04-24T12&geo=IL&q=%D7%9B%D7%91%D7%95%D7%93%D7%95%20%D7%A4%D7%A8%D7%A7%203",
      listid: 4,
      term: "כבודו פרק 3 לצפייה ישירה",
      percent: 30,
     city: [{
        name: "רמלה",
        value: 100
      }, {
        name: "לוד",
        value: 81
      }, {
        name: "בית שמש",
        value: 67
      }, {
        name: "אשדוד",
        value: 66
      }, {
        name: "באר שבע",
        value: 64
      }, {
        name: "חדרה",
        value: 60
      }, {
        name: "נתניה",
        value: 51
      }, {
        name: "בני ברק",
        value: 50
      }]
    },
    {
      listid: 5,
      csvlink: "https://trends.google.com/trends/explore?date=2017-04-23T01%202017-04-24T12&geo=IL&q=%D7%A4%D7%95%D7%9C%20%D7%9E%D7%95%D7%9F%20%D7%A4%D7%A8%D7%A7%2045",
      term: "פול מון פרק 45 לצפייה ישירה",
      percent: 100,
     city: [{
        name: "אשקלון",
        value: 100
      }, {
        name: "ראש העין",
        value: 90
      }, {
        name: "אשדוד",
        value: 84
      }, {
        name: "טבריה",
        value: 83
      }]
    }
  ],
  "y2016": [{
      csvlink: "",
      term: "ריאל מדריד נגד מנצסטר סיטי לצפייה ישירה",
      listid: 1,
      percent: 30,
      city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      csvlink: "",
      listid: 2,
      term: "רשימת שינדלר לצפייה ישירה",
      percent: 30,
      city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 3,
      csvlink: "",
      term: "הפסנתרן לצפייה ישירה",
      percent: 30,
 city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 4,
      csvlink: "",
      term: "משחקי הכס לצפייה ישירה",
      percent: 30,
     city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 5,
      csvlink: "",
      term: "ספורט 5 לצפייה ישירה",
      percent: 30,
      city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    }
  ],
  "y2015": [{
      listid: 1,
      csvlink: "",
      term: "פאודה לצפייה ישירה",
      percent: 30,
       city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 2,
      csvlink: "",
      term: "מהיר ועצבני 7 לצפייה ישירה",
      percent: 30,
       city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 3,
      csvlink: "",
      term: "משחקי הכס עונה 5 לצפייה ישירה",
      percent: 30,
       city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 4,
      csvlink: "",
      term: "ליגת האלופות לצפייה ישירה",
      percent: 30,
      city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    },
    {
      listid: 5,
      csvlink: "",
      term: "הפסנתרן לצפייה ישירה",
      percent: 10,
      city: [{
        name: "beer sheva",
        value: 100
      }, {
        name: "beer sheva",
        value: 80
      }, {
        name: "beer sheva",
        value: 30
      }, {
        name: "beer sheva",
        value: 10
      }, {
        name: "beer sheva",
        value: 5
      }]
    }
  ]
};