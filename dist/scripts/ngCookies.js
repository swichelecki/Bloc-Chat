(function() {
    function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser'); 
      if (!currentUser || currentUser === '') {
        //if (currentUser) {
            //$cookies.remove(currentUser);
        $uibModal.open({
            templateUrl: '/templates/run.html',
            controller: 'RunCtrl',
            controllerAs: '$run',
            keyboard: false,
            backdrop: 'static',
            size: 'sm',
                resolve: {
                    items: function() {
                        
                    }
                }
              
        });
      }
    }
    
    angular
        .module('bloc-chat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();