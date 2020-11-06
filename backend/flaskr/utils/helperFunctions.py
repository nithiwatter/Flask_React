# Funcation takes in page number and size of page and returns offset information
def getPagination(page, size):
    total = size 
    #Generally setting size=50
    numoffset = page * total

    return total, numoffset
