def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    return 0 if n in [13, 14, 17, 18, 19] else n