#practicing recursion
def fake_bin(x):
    if len(x) == 1:
        return '0' if int(x) < 5 else '1'
    else:
        return fake_bin(x[0]) + fake_bin(x[1:])
