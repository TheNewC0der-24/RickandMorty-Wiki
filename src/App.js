import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}
const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let [search, setSearch] = useState("");

  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let { info, results } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(response => response.json());
      updateFetchData(data);
    })()
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search
        setPageNumber={setPageNumber}
        setSearch={setSearch}
      />

      <div className="container">
        <div className="row">
          <Filters
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
