(function() {
    function LandingCtrl($scope, Room, $uibModal) {
        
        $scope.chatRooms = Room;   
        
        var $ctrl = this;
        
        $ctrl.open = function(size) {
            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function() {
    
                    }
                }  
            });            
                        
        };
        
    }
    
    angular
        .module('bloc-chat')
        .controller('LandingCtrl', ['$scope','Room', '$uibModal', LandingCtrl]);
    
})();