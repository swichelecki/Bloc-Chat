(function() {
    function LandingCtrl(Room, Message, $uibModal, $cookies) {
        var $ctrl = this;
        
        var roomKey = null;
        
        var currentUser = $cookies.get('blocChatCurrentUser'); 
        
        this.chatRooms = Room;   
        
        this.messages = [];
        
        this.getMessages = function(roomId) {
            roomKey = roomId;
            Message.getByRoomId(roomId).on("value", function (data) {
             $ctrl.messages = data.val(); 
          });
        };
        
        this.sendMessages = function(newMessage) {
            var d = new Date();
            var time = d.getTime();
            
            var messageObject = {
                sentAt: time,
                username: currentUser,
                content: newMessage,
                roomId: roomKey
            };
            
            Message.send(messageObject);
            console.log("testing sendMessages() in $ctrl: ", newMessage);
        };
        
        this.open = function(size) {
            
                $uibModal.open({
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
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', '$cookies', LandingCtrl]);
    
})();