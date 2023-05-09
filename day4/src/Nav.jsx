import { useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const Nav = ({ handleGenre, genre, activateButton, isActivated }) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const clearInput = () => {
    setInputValue("");
    inputRef.current.focus();
  };
  const handleSearchMovie = () => {
    if (inputRef.current.value.length === 0) {
      alert("enter movie name to search");
    } else {
      navigate(`search/${inputValue}`);
    }
  };
  const goToSearchMovie = () => {
    <Link to="/search" state={{ inputValue: inputValue }} />;
  };
  return (
    <nav>
      <div className="logo">
        <h1 onClick={() => navigate("/")}>
          Movie <span>DB</span>
        </h1>
      </div>
      <div className="nav--links">
        <p
          className={isActivated === 1 ? "active" : ""}
          onClick={() => activateButton(1)}
        >
          Home
        </p>
        <p
          className={isActivated === 2 ? "active" : ""}
          onClick={() => activateButton(2)}
        >
          Best of all Time
        </p>
      </div>
      <div className="search">
        <div className="dropdown--menu">
          <select
            onChange={handleGenre}
            name="select"
            id="select"
            value={genre}
          >
            <option value="categories" disabled defaultValue={"categories"}>
              Categories
            </option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
          </select>
        </div>
        <div className="search--bar">
          {/*  controlled component is a component that derives its value from state and uses callbacks to modify its value. */}

          <input
            type="text"
            placeholder="I am looking for..."
            value={inputValue}
            onChange={handleInputValue}
            ref={inputRef}
            required
          />
          <AiFillCloseCircle className="close--btn" onClick={clearInput} />

          <AiOutlineSearch
            className="search--btn"
            onClick={handleSearchMovie}
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
