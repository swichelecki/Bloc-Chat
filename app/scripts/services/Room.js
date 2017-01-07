(function() {
    function Room($firebaseArray) {
        
        var Room = {};
        
        /**
        * @desc a call to firebase database
        * @type {Object}
        */
        var ref = firebase.database().ref().child("rooms");
        
        /**
        * @desc holds root rooms object in database
        * @type {Object}
        */
        var rooms = $firebaseArray(ref);
        
        console.log(rooms);
     
        return {
            all: rooms
        };
        
        return Room;
    }
    
    angular
        .module('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
    
})();