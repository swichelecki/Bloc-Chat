(function() {
    function Message($firebaseArray) {
                
        /**
        * @desc a call to firebase database
        * @type {Object}
        */
        var ref = firebase.database().ref().child("messages"); //.orderByChild("roomId").equalTo(roomId);
        
        /**
        * @desc holds root messages object in database
        * @type {Object}
        */
        var messages = $firebaseArray(ref);
        
        /**
        * @function getByRoomId
        * @desc returns array of messages in a selected room
        * @param roomId
        */
        return {
            all: messages, //probably going to have to move 'messages'...maybe?
            getByRoomId: function(roomId) {
                console.log("get room by id is called", roomId);
                return ref.orderByChild("roomId").equalTo(roomId);
            },
            send: function(messageObject) {
                console.log("testing send() in Message factory: ", messageObject);
                messages.$add(messageObject);
            }
        }; 
        
    }
    
    angular
        .module('bloc-chat')
        .factory('Message', ['$firebaseArray', Message]);
})();