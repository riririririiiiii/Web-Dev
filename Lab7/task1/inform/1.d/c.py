n = int(input())  
arr = [int(x) for x in input().split()]

count = 0
for num in arr:
    if num > 0:
        count +=1
print(count)