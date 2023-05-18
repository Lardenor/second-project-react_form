import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchContact } from "../../redux/actions";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchContact(searchTerm.toLowerCase()));
  },[dispatch,searchTerm])
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(searchContact(searchTerm));
  };
  return (
    <div className="bg-light p-3 rounded mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="my-link text-reset fs-3">
          Contact List
        </Link>

        <Link to="/new-contact" className="my-link text-reset">
          <button type="button" className="btn btn-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
              ></path>
            </svg>{" "}
            Add Contact
          </button>
        </Link>
      </div>

      <div className="input-group mt-4">
        <input
          value={searchTerm}
          onChange={handleChange}
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-info">
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
