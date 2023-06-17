import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApi } from "../store/ApiSlice";

const MainContainer = () => {
  const data = useSelector((state) => state.Api.data);
  const status = useSelector((state) => state.Api.status);
  const dispatch = useDispatch();
  let val = 0;
  useEffect(() => {
    if (val === 0) {
      dispatch(fetchApi());
      val++;
    }
  }, []);
  return (
    <>
      {status}
      <pre>{data?.location?.country}</pre>
    </>
  );
};
export default MainContainer;
