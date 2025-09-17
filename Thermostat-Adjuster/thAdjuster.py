"""
    givin a current room and a target temperature return a string specifies how to adjust the 
    temperature of the room according to :
    heat if the current room temp < target
    cold if the current room temp > target
    hold if they are equal
"""
def adjust_thermostat(temp, target):
    adjust = "hold"
    if temp < target:
        adjust = adjust.replace("hold", "heat")
    elif temp > target:
        adjust = adjust.replace("hold", "cool")
    return adjust

print(adjust_thermostat(68, 72)) # heat
print(adjust_thermostat(75, 72)) # cool
print(adjust_thermostat(72, 72)) # hold
print(adjust_thermostat(-20.5, -10.1) ) # hold