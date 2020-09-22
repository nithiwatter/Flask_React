from jikanpy import Jikan
import pprint
import sys
import io
sys.stdout = io.TextIOWrapper(buffer=sys.stdout.buffer,encoding='utf8')
jikan = Jikan()

file = open('text.txt','w',encoding='UTF-8')
winter = jikan.season(year = 2015, season='winter')

pprint.pprint(winter,file)
file.close()
