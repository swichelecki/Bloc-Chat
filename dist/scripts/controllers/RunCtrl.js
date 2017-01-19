(function() {
    function RunCtrl($uibModalInstance, $cookies) {
        
        var $run = this;
        
        $run.setName = function(newUserName) {
           if (typeof newUserName === 'string') {
               $cookies.put('blocChatCurrentUser', newUserName);
               $uibModalInstance.close();
           }
        }
    }
   
    angular
        .module('bloc-chat')
        .controller('RunCtrl', ['$uibModalInstance', '$cookies', RunCtrl]);
    
})();