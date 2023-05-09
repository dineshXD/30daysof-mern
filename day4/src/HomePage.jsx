import { useState } from "react";
import Nav from "./Nav";
import RecentMovies from "./RecentMovies";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [genre, setGenre] = useState("");

  const [isActivated, setIstActivated] = useState(
    JSON.parse(localStorage.getItem("activatedButton")) ?? 1
  );
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const activateButton = (buttonNum) => {
    setIstActivated(buttonNum);
    localStorage.setItem("activatedButton", buttonNum);
  };
  return (
    <div>
      <Nav
        handleGenre={handleGenre}
        genre={genre}
        activateButton={activateButton}
        isActivated={isActivated}
      />
      <Outlet context={[genre, isActivated]} />
      {/* <RecentMovies genre={genre} isActivated={isActivated} /> */}
    </div>
  );
};
export default HomePage;
