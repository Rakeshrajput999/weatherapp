import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../store/ApiSlice";
import { useState } from "react";

const Header = () => {
  const selector = useSelector((state) => state.Api.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const HandleSearch = () => {
    dispatch(fetchApi(search));
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            onChange={($event) => {
              setSearch($event.target.value);
            }}
          />
          {search}
        </div>
        <div>
          <button onClick={HandleSearch}>search</button>
        </div>
      </div>
    </>
  );
};
export default Header;
