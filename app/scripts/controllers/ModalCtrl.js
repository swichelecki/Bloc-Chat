(function() {
    function ModalCtrl($uibModalInstance, Room) {   
    
    this.chatRooms = Room;   
          
    var $ctrl = this;
        
     $ctrl.ok = function(newRoom) {   
        $uibModalInstance.close();
        this.chatRooms.createRoom(newRoom);
     };
        
    $ctrl.cancel = function() {
        $uibModalInstance.dismiss();  
    };    
        
    }
    
    angular
        .module('bloc-chat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
    
})();