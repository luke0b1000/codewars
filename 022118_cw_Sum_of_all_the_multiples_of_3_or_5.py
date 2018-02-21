def find(n):
    sum = 0
    for i in range(n+1):
        if i % 5 == 0 or i %3 ==0:
            sum += i
    return sum
