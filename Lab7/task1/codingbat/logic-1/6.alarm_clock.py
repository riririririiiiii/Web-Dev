def alarm_clock(day, vacation):
    if day in range(1, 6):
        return "10:00" if vacation else "7:00"
    return "off" if vacation else "10:00"