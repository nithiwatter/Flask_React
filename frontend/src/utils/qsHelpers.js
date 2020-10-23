import { format } from "date-fns";

export const createSearchFilterQS = (valuesObj) => {
  let title = "All";
  if (valuesObj.animeTitle !== "") title = valuesObj.animeTitle;
  const type = valuesObj.animeType;
  const status = valuesObj.animeStatus;
  let score = "All";
  if (valuesObj.animeScore !== "") score = valuesObj.animeScore;
  // by default, the entry for producer is set to null (to represent all)
  let producer = "All";
  if (valuesObj.animeProducer) producer = valuesObj.animeProducer.studio_id;
  let startDate = "All";
  let endDate = "All";
  if (valuesObj.animeStartDate)
    startDate = format(new Date(valuesObj.animeStartDate), "MM/dd/yyyy");
  if (valuesObj.animeEndDate)
    endDate = format(new Date(valuesObj.animeEndDate), "MM/dd/yyyy");
  let genre = "All";
  let genreQS = "genre";
  let moreThanOneGenre = false;
  // if All is false
  if (!valuesObj.animeGenre.All) {
    moreThanOneGenre = true;
    genre = "";
    for (const genreKey in valuesObj.animeGenre) {
      if (valuesObj.animeGenre[genreKey]) {
        genre += genreKey + ",";
      }
    }
  }
  // need to take care of the trailing ,
  if (moreThanOneGenre && genre.length !== 0) {
    genre = genre.substring(0, genre.length - 1);
  } else if (moreThanOneGenre) {
    throw new Error("At least one genre needs to be selected!");
  }

  const qs = `?title=${title}&type=${type}&status=${status}&score=${score}&producer=${producer}&startDate=${startDate}&endDate=${endDate}&${genreQS}=${genre}`;

  return qs;
};
