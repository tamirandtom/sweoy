var App = angular.module('SWEOY', ['ngAnimate','ngSanitize']);
App.controller('index', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {


$scope.allPages = [
  {
    "divid":"p1",
    "titlemeta":"communication",
    "title":"Title of this section and another subtitle here",
    "content":"The use of Sketch Symbols has grown by 25% in 2017 and designers started using shared libraries. Over 4 Git-like design version control tools have launched in 2017 to give designers one source of truth. Where did this smart-and-synced design approach come from?",
    "image":$sce.trustAsHtml(ill2)
  },
  {
    "divid":"p2",
    "titlemeta":"communication",
    "title":"Title of this section and another subtitle here",
    "content":"The use of Sketch Symbols has grown by 25% in 2017 and designers started using shared libraries. Over 4 Git-like design version control tools have launched in 2017 to give designers one source of truth. Where did this smart-and-synced design approach come from?",
    "image":$sce.trustAsHtml(ill1)
  },  {
    "divid":"p3",
    "titlemeta":"communication",
    "title":"Title of this section and another subtitle here",
    "content":"The use of Sketch Symbols has grown by 25% in 2017 and designers started using shared libraries. Over 4 Git-like design version control tools have launched in 2017 to give designers one source of truth. Where did this smart-and-synced design approach come from?",
    "image":"<h1>foo</h1>"
  }
];


  $(document).ready(function () {

    arrNames = ['p1','p2','p3'];


    $('#pagecontainer').fullpage({
      'verticalCentered': false,
      'css3': true,
      'sectionsColor': ['#F0F2F4', '#fff', '#fff'],
      'navigation': true,
      'navigationPosition': 'left',
      'navigationTooltips': ['Powerful', 'Amazing', 'Simple'],

      afterLoad: function(anchorLink, index){
        if(index == 2){
          $('#iphone3, #iphone2, #iphone4').addClass('active');
        }
        $('#infoMenu').toggleClass('whiteLinks', index ==4);

      },

      onLeave: function(index, newIndex, direction){
        if (index == 3 && direction == 'down'){
          $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
        }
        else if(index == 3 && direction == 'up'){
          $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
        }

        $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
        $('#staticImg').toggleClass('moveDown', newIndex == 4);
         $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
      }

    });



 

  });


}]);

