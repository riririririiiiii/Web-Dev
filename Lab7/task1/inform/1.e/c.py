def xor(x: int, y: int) -> int:
    return x ^ y  

x, y = map(int, input().split())
print(xor(x, y))
