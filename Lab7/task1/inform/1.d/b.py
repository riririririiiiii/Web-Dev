n = int(input())  
arr = [int(x) for x in input().split()]

for num in arr: 
    if num % 2 == 0:  
        print(num, end=" ")  