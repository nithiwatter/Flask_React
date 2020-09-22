import React from 'react';
import axios from 'axios';
import RankTable from '../common/table/RankTable';

const TopAnime = () => {
  const [animeData, setAnimeData] = React.useState([]);

  const fetchAnime = async () => {
    const { data } = await axios.get('/api/anime/topAnime');
    setAnimeData(data.data);
  };

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div>
      <RankTable data={animeData}></RankTable>
    </div>
  );
};

export default TopAnime;
