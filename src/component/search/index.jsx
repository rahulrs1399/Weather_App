import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../appstyle.css";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <div className="form">
        <input
          type="text"
          placeholder="Enter City Name"
          name="search"
          autoComplete="off"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearch} style={{cursor:"pointer"}}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}
