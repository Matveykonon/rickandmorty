import React from 'react';
import Header from "./Header";
import ContentList from "./ContentList";
import Loader from "./Loader/index";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";
import Button from './Button';


const App = () => {
  const {imgList, fetch, loading, fetchMore, totaItems} = useFetchContent();

  return (
    <div className="App">
      <Header onSearch={fetch} />
      {loading ? <Loader/> : <ContentList content={imgList} />}
      {(!!imgList && totaItems > 20 && imgList.length < totaItems && !loading) ? <Button onClick={fetchMore}>Fetch More</Button> : null}
    </div>
  );
};

export default App;
