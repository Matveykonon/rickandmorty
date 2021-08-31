import { useCallback, useState } from "react";
import axios from 'axios';

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const [totaItems, setTotalItems] = useState(0)
  const [searchTag, setSearchTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetch = useCallback(async name => {
      try {
        setLoading(prev => !prev);
        setPage(1);
        setSearchTag(name);
        const response = await axios.get('https://rickandmortyapi.com/api/character/', { params: { name, page: 1 }});
        // API doesn't support limit per page queries and it makes requirement fetch only 10 items senseless
        setTotalItems(response.data.info.count);
        setLoading(prev => !prev);
        setImgList(response.data.results);
        setPage(prev => prev + 1);  
      } catch (e) {
        setLoading(prev => !prev);
        setImgList(null);
    }
  }, []);

  const fetchMore = useCallback(async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/', { params: {name: searchTag, page}});
      setImgList([...imgList, ...response.data.results]);
      setPage(prev => prev + 1);
    } catch (e) {
      console.log('Fetch more error, ', e);
      setImgList([...imgList]);
    } 
  }, [page, searchTag, imgList]);

  return {imgList, fetch, loading, fetchMore, totaItems};
};
