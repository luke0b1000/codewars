def min_max(lst):
  max = lst[0]
  min = lst[0]
  for num in lst:
      if num > max:
          max = num
      if num < min:
          min = num
  return [min,max]
