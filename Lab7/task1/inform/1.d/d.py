n = int(input())  
arr = [int(x) for x in input().split()]

count = 0
for i in range(1, n):  
    if arr[i] > arr[i - 1]:  
        count += 1

print(count)