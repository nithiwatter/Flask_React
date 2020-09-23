import os
import requests
import time
# from datetime import datetime
from jikanpy import Jikan

jikan = Jikan()

earth_seasons = ['spring', 'summer', 'fall', 'winter']

id_anime = []
name_anime = []
synopsis_anime = []
rating_anime = []
type_anime = []
airing_start_anime = []
# airing_start_anime_str = []
mal_image_path_anime = []
image_path_anime = []
num_images = 0

for k in earth_seasons:
    for i in range(2015, 2017):
        season = jikan.season(year=i, season=k)

        for j in range(len(season['anime'])):
            # filter out hentais from being put in database
            if season['anime'][j]['r18'] is True:
                continue
            else:
                id_anime.append(season['anime'][j]['mal_id'])
                name_anime.append(season['anime'][j]['title'])
                synopsis_anime.append(season['anime'][j]['synopsis'])
                rating_anime.append(season['anime'][j]['score'])
                type_anime.append(season['anime'][j]['type'])

                # potential code for storing date as str objects in MySQL db
                # filter out null airing dates
                # if season['anime'][j]['airing_start'] is not None:
                #     dt = datetime.now().strptime(
                #         season['anime'][j]['airing_start'], '%Y-%m-%dT%H:%M:%S%z')
                #     airing_start_anime_str.append(dt.strftime('%b. %Y'))
                # else:
                #     airing_start_anime_str.append(datetime(9999, 9, 9))

                airing_start_anime.append(season['anime'][j]['airing_start'])

            # downloading images from MAL cdn
            # download 100 at a time
            anime_id = season['anime'][j]['mal_id']
            image_url = season['anime'][j]['image_url']
            image_file_path = 'flaskr/static/anime_cover_images/{}.jpg'.format(
                anime_id)

            mal_image_path_anime.append(image_url)
            image_path_anime.append(image_file_path)

            # if num_images < 100 and (not os.path.exists(image_file_path)):
            #     print(num_images)
            #     print(season['anime'][j]['title'])
            #     print('start downloading image...')
            #     response = requests.get(image_url)
            #     file = open(image_file_path, "wb")
            #     file.write(response.content)
            #     file.close()
            #     print('finish downloading image...')
            #     num_images += 1

        time.sleep(8)

    # season = jikan.season(year=i,season='summer')
    # # pprint.pprint(spring, raw_animes)
    # for j in range(len(season['anime'])):
    #     id_anime.append(season['anime'][j]['mal_id'])
    #     name_anime.append(season['anime'][j]['title'])
    #     synopsis_anime.append(season['anime'][j]['synopsis'])
    #     rating_anime.append(season['anime'][j]['score'])
    # time.sleep(8)

    # season = jikan.season(year=i,season='fall')
    # # pprint.pprint(spring, raw_animes)
    # for j in range(len(season['anime'])):
    #     id_anime.append(season['anime'][j]['mal_id'])
    #     name_anime.append(season['anime'][j]['title'])
    #     synopsis_anime.append(season['anime'][j]['synopsis'])
    #     rating_anime.append(season['anime'][j]['score'])
    # time.sleep(8)

    # season = jikan.season(year=i,season='winter')
    # # pprint.pprint(spring, raw_animes)
    # for j in range(len(season['anime'])):
    #     id_anime.append(season['anime'][j]['mal_id'])
    #     name_anime.append(season['anime'][j]['title'])
    #     synopsis_anime.append(season['anime'][j]['synopsis'])
    #     rating_anime.append(season['anime'][j]['score'])
    # time.sleep(8)

#winter = jikan.season(year = 2015, season='winter')

    # aired_anime.append(winter['anime'][j]['mal_id'])

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
