// Code your solution in this file!
function distanceFromHqInBlocks(currentHq) {
  const HqBlock = 42;
  return Math.abs(currentHq - HqBlock);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(32));

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264;
  const distancePerFeet = blocks * feetPerBlock;
  return distancePerFeet;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const distanceBlockTravel = Math.abs(destinationBlock - startBlock);
  const feetPerBlock = 264;
  const distanceInFeet = distanceBlockTravel * feetPerBlock;
  return distanceInFeet;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
