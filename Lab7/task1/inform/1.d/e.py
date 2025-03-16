n = int(input())  
arr = [int(x) for x in input().split()]

for i in range(n - 1): 
    if arr[i] * arr[i + 1] > 0: 
        print("YES")
        break
else:
    print("NO")