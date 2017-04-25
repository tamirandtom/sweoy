var App = angular.module('HoloWatchOnline', ['ngAnimate']);
App.controller('index', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.data = allData;
  
  $scope.$on("$locationChangeSuccess", function () {
    updateState();
  });

  function updateState() {
    var path = $location.path().split("/")[1];
    $scope.activePart = path;
    try {
      $scope.activeChart = $scope.data[path];
    } catch (err) {}
    $scope.currYear = path.split("-")[0];
  }

  $(document).ready(function () {
    var arrNames = [];
    arrNames.push('y2017-Intro'); // pushing 1st page;
    angular.forEach($scope.data, function (value, key) {

      arrNames.push(key + "-intro");
      angular.forEach(value, function (valueTwo, keyTwo) {

        $scope.data[key][keyTwo].nameid = key + "-" + valueTwo.listid;
        $scope.data[key + "-" + valueTwo.listid] = $scope.data[key][keyTwo].city;
        arrNames.push(key + "-" + valueTwo.listid);

      });

    });
    arrNames.push("y2015-method");


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
        name: "בית דגן",
        value: 100
      }, {
        name: "קרית עקרון",
        value: 80
      }, {
        name: "גדרה",
        value: 74
      }, {
        name: "בית שאן",
        value: 74
      }, {
        name: "מבשרת ציון",
        value: 72
      }]
    },
    {
      csvlink: "",
      listid: 2,
      term: "רשימת שינדלר לצפייה ישירה",
      percent: 30,
      city: [{
        name: "ראשון לציון",
        value: 100
      }, {
        name: "אשדוד",
        value: 99
      }, {
        name: "גבעתיים",
        value: 97
      }, {
        name: "ראש העין",
        value: 94
      }, {
        name: "חולון",
        value: 92
      }]
    },
    {
      listid: 3,
      csvlink: "",
      term: "הפסנתרן לצפייה ישירה",
      percent: 30,
      city: [{
        name: "בת-ים",
        value: 100
      }, {
        name: "חולון",
        value: 92
      }, {
        name: "עפולה",
        value: 93
      }, {
        name: "פתח תקווה",
        value: 73
      }, {
        name: "באר שבע",
        value: 72
      }, {
        name: "רחובות",
        value: 68
      }, {
        name: "אשדוד",
        value: 68
      }]
    },
    {
      listid: 4,
      csvlink: "",
      term: "משחקי הכס לצפייה ישירה",
      percent: 30,
      city: [{
        name: "מבשרת ציון",
        value: 100
      }, {
        name: "מצפה רמון",
        value: 59
      }, {
        name: "רמות נפתלי",
        value: 57
      }, {
        name: "שוהם",
        value: 51
      }, {
        name: "צפת",
        value: 50
      }, {
        name: "מודיעין-מכבים רעות",
        value: 47
      }]
    },
    {
      listid: 5,
      csvlink: "",
      term: "ספורט 5 לצפייה ישירה",
      percent: 30,
      city: [{
        name: "כפר סירקין",
        value: 100
      }, {
        name: "ביר אל-מכסור",
        value: 79
      }, {
        name: "דלית אל-כרמל",
        value: 63
      }, {
        name: "כאבול",
        value: 45
      }, {
        name: "אלעד",
        value: 42
      }]
    }
  ],
  "y2015": [{
      listid: 1,
      csvlink: "",
      term: "פאודה לצפייה ישירה",
      percent: 30,
      city: [{
        name: "נורדיה",
        value: 100
      }, {
        name: "מגשימים",
        value: 63
      }, {
        name: "ג'וליס",
        value: 50
      }, {
        name: "צפת",
        value: 50
      }, {
        name: "קרית שמונה",
        value: 49
      }, {
        name: "קרית גת",
        value: 45
      }, {
        name: "דימונה",
        value: 43
      }]
    },
    {
      listid: 2,
      csvlink: "",
      term: "מהיר ועצבני 7 לצפייה ישירה",
      percent: 30,
      city: [{
        name: "נתיבות",
        value: 100
      }, {
        name: "דימונה",
        value: 67
      }, {
        name: "קרית גת",
        value: 65
      }, {
        name: "טבריה",
        value: 61
      }, {
        name: "צפת",
        value: 56
      }]
    },
    {
      listid: 3,
      csvlink: "",
      term: "משחקי הכס עונה 5 לצפייה ישירה",
      percent: 30,
      city: [{
        name: "מבשרת ציון",
        value: 100
      }, {
        name: "מצפה רמון",
        value: 59
      }, {
        name: "רמות נפתלי",
        value: 57
      }, {
        name: "שוהם",
        value: 51
      }, {
        name: "צפת",
        value: 50
      }]
    },
    {
      listid: 4,
      csvlink: "",
      term: "ליגת האלופות לצפייה ישירה",
      percent: 30,
      city: [{
        name: "באר יעקב",
        value: 100
      }, {
        name: "אילת",
        value: 85
      }, {
        name: "רמלה",
        value: 79
      }, {
        name: "טבריה",
        value: 73
      }, {
        name: "מצפה רמון",
        value: 69
      }, {
        name: "נס ציונה",
        value: 61
      }]
    },
    {
      listid: 5,
      csvlink: "",
      term: "הפסנתרן לצפייה ישירה",
      percent: 10,
      city: [{
        name: "בת-ים",
        value: 100
      }, {
        name: "חולון",
        value: 92
      }, {
        name: "עפולה",
        value: 92
      }, {
        name: "פתח תקווה",
        value: 73
      }, {
        name: "באר שבע",
        value: 72
      }]
    }
  ]
};