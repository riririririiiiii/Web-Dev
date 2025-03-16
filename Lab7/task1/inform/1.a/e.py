s = 109
v = int(input())
t = int(input())

pos = (v*t) % s

print(pos%s)