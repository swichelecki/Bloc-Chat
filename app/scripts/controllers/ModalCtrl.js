(function() {
    function ModalCtrl($uibModalInstance, Room, $scope) {   
    
    $scope.chatRooms = Room;   
          
    var $ctrl = this;
        
     $ctrl.ok = function(newRoom) {   
        $uibModalInstance.close();
        $scope.chatRooms.createRoom(newRoom);
     };
        
    $ctrl.cancel = function() {
        $uibModalInstance.dismiss();  
    };    
        
    }
    
    angular
        .module('bloc-chat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$scope', ModalCtrl]);
    
})();