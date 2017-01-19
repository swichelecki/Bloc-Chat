(function() {
    function LandingCtrl(Room, Message, $uibModal) {
        var $ctrl = this;
        
        this.chatRooms = Room;   
        
        this.messages = [];
        
        this.getMessages = function(roomId) {
          Message.getByRoomId(roomId).on("value", function (data) {
           //  console.log(data.val(), ">>>>");
             $ctrl.messages = data.val(); 
          });
        };
        
        this.open = function(size) {
            
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
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', LandingCtrl]);
    
})();