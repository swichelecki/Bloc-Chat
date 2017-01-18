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
            all: messages,
            getByRoomId: function(roomId) {
                console.log("get room by id is called", roomId);
                return ref.orderByChild("roomId").equalTo(roomId);
            }
        }; 
        
    }
    
    angular
        .module('bloc-chat')
        .factory('Message', ['$firebaseArray', Message]);
})();