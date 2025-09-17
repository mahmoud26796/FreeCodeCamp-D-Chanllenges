function adjustThermostat(temp, target) {
  let adjust = "hold";
  if (temp < target) adjust = adjust.replace("hold", "heat");
  else if (temp > target) adjust = adjust.replace("hold", "cool");
  return adjust;
}
