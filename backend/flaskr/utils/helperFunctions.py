# Function takes in page number and size of page and returns offset information
def getPagination(page, size):
    limit = size
    # Generally setting size=50
    offset = page * limit

    return limit, offset
