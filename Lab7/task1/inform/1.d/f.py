n = int(input())  
arr = [int(x) for x in input().split()]

count = 0
for i in range(1, n-1): 
    if arr[i-1] < arr[i] and arr[i] > arr[i + 1]: 
        count += 1
print(count)