function scuberGreetingForFeet(input) {
  if (input <= 400) {
    return "This one is on me!";
  } else if (input > 2500) {
    return "No can do.";
  } else if (input > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(input) {
  if (input === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(input) {
  if (input === "generous") {
    return "Thank you so much.";
  } else if (input === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
