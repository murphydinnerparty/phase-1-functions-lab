// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
 if (blockNumber > 42){
    return blockNumber - 42;
 }

 else if (blockNumber < 42){
    return 42 - blockNumber;
 }
}

function distanceFromHqInFeet(blocksToFeet){
    return (distanceFromHqInBlocks(blocksToFeet)*264);
}

function distanceTravelledInFeet(destA, destB){
    if (destB > destA){
        return (destB - destA) * 264;
    }

    else{
        return (destA - destB) * 264;
    }
}
function calculatesFarePrice (startPoint, dest){
    let totalFeet = distanceTravelledInFeet(startPoint, dest);

    if (totalFeet < 400){
        return 0;
    }

    else if (totalFeet > 400 && totalFeet < 2000){
        return (totalFeet - 400) * 0.02;
    }
        
  else if (totalFeet > 2000 && totalFeet < 2500){
        return 25;
  }

  else if (totalFeet > 2500){
    return `cannot travel that far`
  }
}
