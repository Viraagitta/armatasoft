// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllData } from "./store/actions";

function App() {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  // useEffect(() => {
  //   dispatch(getAllData(data));
  // }, []);
  // console.log(data, "<<");

  let result = [];
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const test = data[i].findIndex((e) => e === data[i][j]);
      if (test === 0) {
        temp.push("Baris" + data[i][0]);
      } else {
        if (data[i][j + 1] !== undefined) {
          if (temp.indexOf(data[i][j]) !== -1) {
            temp.push("before");
          } else {
            temp.push(data[i][j]);
          }
          // console.log(temp);
        } else {
          temp.push(data[i][j]);
          result.push(temp);
          temp = [];
        }
      }
    }
  }
  // console.log(result);
  return <div className="App">{JSON.stringify(result)}</div>;
}

export default App;
