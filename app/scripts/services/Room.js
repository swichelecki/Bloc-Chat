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
        
        /**
        * @function addRoom
        * @desc creates new chat room object from user input
        * @param {Object} newRoom
        */
        var addRoom = function(newRoom) {
        
        rooms.$add({ $value: newRoom }).then(function(ref) {
            var id = ref.key;
            console.log("added record with id " + id);
            console.log("added recored with index " + rooms.$indexFor(id));
        }); 
            
        };
        
        /** non-essential code **/
        /*rooms.$loaded().then(function() {
            rooms[4].$value = "room 4";
            rooms.$save(4);
        }); */
        
        /*rooms.$loaded().then(function(){
            rooms.$remove();
        }); */
        
        /*rooms.$loaded().then(function() {
            for (var i = 0; i < rooms.length; i++) {
                    rooms.$remove(rooms[i]);
            }
        })
        /** end non-essential code **/
        
        /**
        * @desc passes firebase array to controllers
        * @type {Object}
        */
        Room.all = rooms;
        
        /**
        * @function createRoom
        * @desc sends user input to addRoom
        * @param newRoom
        */
        Room.createRoom = function(newRoom) {
            addRoom(newRoom);
        };
  
        return Room;
    }
    
    angular
        .module('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
    
})();