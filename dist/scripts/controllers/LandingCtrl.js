(function() {
    function LandingCtrl($scope, Room) {
        
        $scope.chatRooms = Room;
        
    }
    
    angular
        .module('bloc-chat')
        .controller('LandingCtrl', ['$scope','Room', LandingCtrl]);
    
})();