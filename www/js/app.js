// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'app.directives', 'ui.router', 'ionic-timepicker'])

.run(function($ionicPlatform, $rootScope) {
  $rootScope.value = 0;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.maxCache(30);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.beginner', {
      url: '/beginner',
      views: {
        'tab-dash': {
          templateUrl: 'templates/beginner.html'
        }
      }
    })

      .state('tab.content-intro', {
        url: '/content-intro',
        views: {
          'tab-dash': {
            templateUrl: 'templates/content-intro.html'
          }
        }
      })

      .state('tab.family-1', {
        url: '/family-1',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-1.html'
          }
        }
      })

      .state('tab.family-2', {
        url: '/family-2',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-2.html',
            controller: 'FamilyCtrl'
          }
        }
      })

      .state('tab.family-3', {
        url: '/family-3',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-3.html',
            controller: 'FamilyThreeCtrl'
          }
        }
      })

      .state('tab.family-4', {
        url: '/family-4',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-4.html',
            controller: 'famFatherCtrl'
          }
        }
      })

      .state('tab.family-5', {
        url: '/family-5',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-5.html',
            controller: 'FamilyFiveCtrl'
          }
        }
      })

      .state('tab.family-6', {
        url: '/family-6',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-6.html'
          }
        }
      })

      .state('tab.family-7', {
        url: '/family-7',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-7.html'
          }
        }
      })

      .state('tab.family-8', {
        url: '/family-8',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-8.html',
            controller: 'FamilyEightCtrl'
          }
        }
      })

      .state('tab.family-9', {
        url: '/family-9',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-9.html'
          }
        }
      })

      .state('tab.family-10', {
        url: '/family-10',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-10.html'
          }
        }
      })

      .state('tab.family-11', {
        url: '/family-11',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-11.html',
            controller: 'FamLipCtrl'
          }
        }
      })

      .state('tab.family-12', {
        url: '/family-12',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-12.html',
            controller: 'FamLipCtrl'
          }
        }
      })

      .state('tab.family-13', {
        url: '/family-13',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-13.html',
            controller: 'FamilyThirteenCtrl'
          }
        }
      })

      .state('tab.family-14', {
        url: '/family-14',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-14.html',
            controller: 'FamilyFourteenCtrl'
          }
        }
      })

      .state('tab.family-15', {
        url: '/family-15',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-15.html',
            controller: 'BrotherCtrl'
          }
        }
      })

      .state('tab.family-16', {
        url: '/family-16',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-16.html',
            controller: 'SisterCtrl'
          }
        }
      })

      .state('tab.family-17', {
        url: '/family-17',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-17.html',
            controller: 'FamilySeventeenCtrl'
          }
        }
      })

      .state('tab.family-18', {
        url: '/family-18',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-18.html',
            controller: 'FamilyEighteenCtrl'
          }
        }
      })

      .state('tab.family-19', {
        url: '/family-19',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-19.html'
          }
        }
      })

      .state('tab.family-20', {
        url: '/family-20',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-20.html'
          }
        }
      })

      .state('tab.family-21', {
        url: '/family-21',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-21.html'
          }
        }
      })

      .state('tab.family-22', {
        url: '/family-22',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-22.html'
          }
        }
      })

      .state('tab.family-23', {
        url: '/family-23',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-23.html'
          }
        }
      })

      .state('tab.family-24', {
        url: '/family-24',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-24.html'
          }
        }
      })

      .state('tab.family-25', {
        url: '/family-25',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-25.html'
          }
        }
      })

      .state('tab.family-26', {
        url: '/family-26',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-26.html'
          }
        }
      })

      .state('tab.family-27', {
        url: '/family-27',
        views: {
          'tab-dash': {
            templateUrl: 'templates/family-27.html',
            controller: 'FinishCtrl'
          }
        }
      })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

    .state('tab.search-detail', {
      url: '/search/:searchId',
      views: {
        'tab-search': {
          templateUrl: 'templates/search-detail.html',
          controller: 'SearchDetailCtrl'
        }
      }
    })

    .state('tab.mother', {
      url: '/search/mother',
      views: {
        'tab-search': {
          templateUrl: 'templates/mother.html'
        }
      }
    })

  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'SettingCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
