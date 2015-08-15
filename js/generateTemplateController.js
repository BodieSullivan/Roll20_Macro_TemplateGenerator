
var myApp = angular.module('myApp', []);

myApp.controller('generateTemplateController', ['$scope',
    function ($scope) {
      'use strict';

      $scope.templateInput = new Template();
      $scope.templateInput.addCustomItem();

      $scope.generatedTemplate = '';

      $scope.buildTemplate = buildTemplate;

      function buildTemplate() {
        $scope.generatedTemplate =   $scope.templateInput.buildTemplate();
        /**
        * Ecample Macro:
        * &{template:5eDefault} {{title=Mayfield}} {{subheader=Small Town}} {{subheaderright=Forest}} {{subheader2=Population: 78}} {{showclassactions=1}} {{Government=Council}} {{Hospitality=Trusting}} {{Tavern=Spring Breeze}} {{Quest=A long harsh winter has worn down the town's supplies and morale.}}
        **/
        //
      }

  }]
);
