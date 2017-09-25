function randomChance(NumOfQuarter){
   var quartersWon = 0;
    var count = 0;

    while(NumOfQuarter > 0){
        var randomNum =  Math.floor(Math.random()*100 + 1);
        var winningNumber = Math.floor(Math.random()*100+ 1);

        if(randomNum == winningNumber){
            quartersWon =  Math.floor(Math.random()*51 + 50);
            NumOfQuarter--;
            break;
        }

            NumOfQuarter--;
        }
            return + (quartersWon + NumOfQuarter));
    }

randomChance(10)
