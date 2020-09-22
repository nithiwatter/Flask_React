from jikanpy import Jikan

#from mal import Anime, config
import time
jikan = Jikan()
#config.TIMEOUT = 1

id_anime = []
name_anime = []
synopsis_anime = []
rating_anime = []
aired_anime = []

for i in range(2015,2017):
    season = jikan.season(year=i,season='spring')
    # pprint.pprint(spring, raw_animes)
    for j in range(len(season['anime'])):
        id_anime.append(season['anime'][j]['mal_id'])
        name_anime.append(season['anime'][j]['title'])
        synopsis_anime.append(season['anime'][j]['synopsis'])
        rating_anime.append(season['anime'][j]['score'])
    time.sleep(8)

    season = jikan.season(year=i,season='summer')
    # pprint.pprint(spring, raw_animes)
    for j in range(len(season['anime'])):
        id_anime.append(season['anime'][j]['mal_id'])
        name_anime.append(season['anime'][j]['title'])
        synopsis_anime.append(season['anime'][j]['synopsis'])
        rating_anime.append(season['anime'][j]['score'])
    time.sleep(8)

    season = jikan.season(year=i,season='fall')
    # pprint.pprint(spring, raw_animes)
    for j in range(len(season['anime'])):
        id_anime.append(season['anime'][j]['mal_id'])
        name_anime.append(season['anime'][j]['title'])
        synopsis_anime.append(season['anime'][j]['synopsis'])
        rating_anime.append(season['anime'][j]['score'])
    time.sleep(8)

    season = jikan.season(year=i,season='winter')
    # pprint.pprint(spring, raw_animes)
    for j in range(len(season['anime'])):
        id_anime.append(season['anime'][j]['mal_id'])
        name_anime.append(season['anime'][j]['title'])
        synopsis_anime.append(season['anime'][j]['synopsis'])
        rating_anime.append(season['anime'][j]['score'])
    time.sleep(8)

#winter = jikan.season(year = 2015, season='winter')


    #aired_anime.append(winter['anime'][j]['mal_id'])

# for i in id_anime:
#     name_anime.append(Anime(i).title)
#     synopsis_anime.append(Anime(i).synopsis)
#     rating_anime.append(Anime(i).rating)
#     aired_anime.append(Anime(i).aired)




# for i in id_anime:
#     anime = jikan.anime(i)
#     name_anime.append(anime['title'])
#     synopsis_anime.append(anime['synopsis'])
#     rating_anime.append(anime['score'])
#     aired_anime.append(anime['aired']['string'])
#     time.sleep(8)

# i = 123
# anime=jikan.anime(i)
# id_anime = anime['mal_id']
# name_anime = anime['title']
# synopsis_anime = anime['synopsis']
# rating_anime = anime['score']
# aired_anime = anime['aired']['string']







