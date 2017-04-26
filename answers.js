// Challenge #1
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}


// Challenge #2
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
            floors.forEach(function (floor) {
                floor.on('up_button_pressed down_button_pressed', function () {
                    elevator.goToFloor(floor.floorNum());
                    elevator.on("floor_button_pressed", function(floorNum) { elevator.goToFloor(floorNum) } );
                });
            });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

//Challenge #3
