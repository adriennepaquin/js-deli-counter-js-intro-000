function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    //console.log("Currently serving " + katzDeliLine[0] + ".");
    return "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    console.log(katzDeliLine);
    //if (katzDeliLine.length === 0) {
    //  return "There is nobody waiting to be served!";
    //}
    //else {
    //  return katzDeliLine;
    //}
    //console.log(katzDeliLine);
    return katzDeliLine;
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      //console.log((i + 1) + ". " + katzDeliLine[i]);
      return (i + 1) + ". " + katzDeliLine[i];
    }
  }
}
