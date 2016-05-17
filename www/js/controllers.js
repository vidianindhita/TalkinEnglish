angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tab.dash');
  };
  
})

.controller('DashCtrl', function($scope, $state, $rootScope) {
  $rootScope.hideTabs = '';
  $scope.swipechats = function(){
    $state.go('tab.chats');
  };
})

.controller('FamilyCtrl', function($scope, $state, $location, $ionicPopup, $rootScope, $sce) {
  $scope.sources = [
    {src: $sce.trustAsResourceUrl("/video/mother.mov"), type: "video/mov"}
  ]

  $scope.showAlert = function() {
    $scope.data = {}
    var ans = $scope.radioValue

    if (ans == "Mother") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-3");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-3");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamilyThreeCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('famFatherCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFatherAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Father") {
      $rootScope.value+=50;
      // alert($rootScope.value)
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-5");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-5");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamilyFiveCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('FamilySixCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('ChatsCtrl', function($scope, $state, $rootScope) {
  $scope.score = $rootScope.value;
  console.log('oochats')
  $scope.swipedash = function(){
    $state.go('tab.dash');
  };
  $scope.swipesearch = function(){
    $state.go('tab.search');
  };
})

.controller('SearchCtrl', function($scope, $state, Searches) {
  $scope.swipechats = function(){
    $state.go('tab.chats');
  };

  $scope.searches = Searches.all();
  
   $scope.listlength = 20;
   
   $scope.loadMore = function(){
    if (!$scope.searches){
      $scope.$broadcast('scroll.infiniteScrollComplete');
      return;
    }

    if ($scope.listlength < $scope.searches.length)
      $scope.listlength+=10;
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }
})

.controller('SettingCtrl', function($scope, $state) {
  $scope.settings = {
    enableReminder: true
  };

  $scope.timePickerObject = {
    inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
    step: 15,  //Optional
    format: 12,  //Optional
    titleLabel: '12-hour Format',  //Optional
    setLabel: 'Set',  //Optional
    closeLabel: 'Close',  //Optional
    setButtonType: 'button-positive',  //Optional
    closeButtonType: 'button-stable',  //Optional
    callback: function (val) {    //Mandatory
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
      var selectedTime = new Date(val * 1000);
      console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
      }
    }
  };
})

.controller('ModalCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('ModalScoreCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal-score.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModalScore = function() {
    $scope.modal.show();
  };
  $scope.closeModalScore = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('ModalLevelCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal-level.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModalLevel = function() {
    $scope.modal.show();
  };
  $scope.closeModalLevel = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('PopCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }

})

.controller('SearchDetailCtrl', function($scope, $stateParams, Searches) {
  $scope.search = Searches.get($stateParams.searchId);
})

.controller('SwitchCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showContent = function( index ) {
    $scope.content = ( "content-" + index );
  };

  $scope.showFamAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "is") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-7");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-7");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamMomCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFamMomAlert = function() {
    $scope.data = {}

    var ans = $scope.inputValue

    if (ans == "Mother") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-8");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-8");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamilyEightCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('FamFatherCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;   

  $scope.showContent = function( index ) {
    $scope.content = ( "content-" + index );
  };

  $scope.showFamAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "He") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-10");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-10");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamFatherInpCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFamFatherInpAlert = function() {
    $scope.data = {}

    var ans = $scope.inputValue

    if (ans == "Father") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-11");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-11");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamLipCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFamLipAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "She is a mother") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-12");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-12");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamLipHeCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFamLipHeAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "He is a father") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-13");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-13");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamilyThirteenCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('FamilyFourteenCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('BrotherCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showBrotherAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Brother") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-16");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-16");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('SisterCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showSisterAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Sister") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-17");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-17");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FamilySeventeenCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('FamilyEighteenCtrl', function($scope, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('WatchCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showContent = function( index ) {
    $scope.content = ( "content-" + index );
  };

  $scope.showWatchAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "is") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-20");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-20");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('WatchLipCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showWatchLipAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Watch") {
      $rootScope.value+=50;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-21");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-21");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('ReviewCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;
})

.controller('MotherReviewCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showMotherReviewAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Mother") {
      $rootScope.value+=70;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FatherReviewCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showFatherReviewAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Father") {
      $rootScope.value+=70;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('BrotherReviewCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showBrotherReviewAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Brother") {
      $rootScope.value+=70;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('SisterReviewCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;

  $scope.showSisterReviewAlert = function() {
    $scope.data = {}

    var ans = $scope.radioValue

    if (ans == "Sister") {
      $rootScope.value+=70;
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-correct.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    } else {
      $ionicPopup.alert({
        title: 'Result',
        templateUrl : 'popup-template-incorrect.html',
        scope: $scope,
        buttons: [{
          text: 'Next',
          type: 'button-balanced',
          onTap: function(e) {
            $location.path("/tab/family-22");
          }
        }]
      }).then(function(res) {
        console.log('This is the answer');
      });
    }
  };
})

.controller('FinishCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {
  $scope.score = $rootScope.value;
});