
n = 0


b = [1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0]

def frame(p, letter):
    global n
    print("\nframe", n)
    for line in range(4):
        for channel in range(4):
            tmp = 0
            if n - line >= 0 and (n - line) * 4 < 28:
                tmp = p * letter[channel + (n - line) * 4]
            print(tmp, end =" ")
        print("")
    n += 1


for i in range(20):
    frame(7, b)
