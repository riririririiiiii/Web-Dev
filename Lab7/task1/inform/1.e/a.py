a, b, c, d = map(int, input().split())

def min_value(a, b, c, d):
    minimum = a  
    if b < minimum:
        minimum = b
    if c < minimum:
        minimum = c
    if d < minimum:
        minimum = d
    return minimum


print(min_value(a, b, c, d))