function scuberGreetingForFeet(feet){
  if (feet < 400) {
    return "This one is on me!";
  }
  else if (feet >= 2500) {
    return "No can do.";
  }
  else if (feet > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  const checkCity =  city == "NYC" ?  "Ok, sounds good." : "No go."
  return checkCity;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case tip = 'generous':
        return 'Thank you so much.';
    case tip = 'not as generous':
        return 'Thank you.';
    break;
    default: 
      return "Bye."
      break;
  }
}