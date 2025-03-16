a, b = map(float, input().split())
b = int(b)

def double_power(a: float, b: int) -> float:
    result = 1.0
    for i in range(b):
        result *= a
    return result
print(double_power(a,b))