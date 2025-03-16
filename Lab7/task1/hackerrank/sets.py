def average(array):
   unique_heights = set(array) 
   return round(sum(unique_heights) / len(unique_heights), 3)

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)