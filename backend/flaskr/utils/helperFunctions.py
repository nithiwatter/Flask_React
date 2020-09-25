def getPagination(page, size):
    limit = size
    offset = page * limit

    return limit, offset
