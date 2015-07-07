    $(document).ready(function () {
        var unitSize = 250; // width (and height) of one square
        var unitsWide = 5; // number of squares along x-axis
        var unitsTall = 50; // number of squares along y-axis
        var myGrays = ['#3f3f3f', '#3a3a3a', '#363636', '#383838', '#393939', '#353535', 'red']; 
        var rand = ''
        
        for (var i = 0; i < unitsWide * unitsTall; i++) {
            rand = myGrays[Math.floor(Math.random() * myGrays.length)];
            

            $('<span class="square"></span>').css({
                display: 'inline',
                float: 'left',
                width: '60px',
                height: '60px',
                margin: '2px',
                'background-color': rand
            }).appendTo(.rando-bg);
        }
    });