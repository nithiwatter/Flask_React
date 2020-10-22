def getPagination(page, size):
    total = size 
    #Generally setting size=50
    offset = page * total

    return total, offset
