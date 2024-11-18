import React from "react";
import { useGetAlbumsQuery } from "../../slices/apiApp";
import { useState } from "react";

const AlbumsMap = () => {
  const [count, setCount] = useState("");
  const [countValue, setCountValue] = useState("");
  const [sorted, setSorted] = useState("id");
  const { data = [] } = useGetAlbumsQuery(count);
  // реализовать сортировку по title и по body, важно делать сортировку именно копируя массив через оператор spred ...
  // [...data].sort((a,b)=> a.title.localeCompare(b.title))

  /*<ol style={{ marginTop: "50px" }}>
{[...data].sort((a,b)=> a.title.localeCompare(b.title)).map((alb) => (
  <li style={{ marginTop: "20px" }} key={alb.id}>
    {alb.title}
  </li>
))}
</ol>
*/

  const handleSelect = (e) => {
    setCount(e.target.value);
    setCountValue("");
  };
  const al = [...data].sort((a, b) => a[sorted].localeCompare(b[sorted])); //[sorted] обращаюсь к ключи через скобки так как у меня он меняется динамически
  
  return (
    <div>
      <span style={{ margin: "10px" }}>add and select</span>
      <input
        value={countValue}
        onChange={(e) => setCountValue(e.target.value)}
        placeholder="50max"
      />
      <div>
        <select value={count} onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={countValue}>{countValue}</option>
        </select>
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option disabled value="">сортировка по</option>
          <option value="title">по title</option>
          <option value="body">по body</option>
          <option value="id">по id</option>
        </select>
      </div>

      <ol style={{ marginTop: "50px" }}>
        {al.map((alb) => (
          <li style={{ marginTop: "20px" }} key={alb.id}>
            title:{alb.title}/ body:{alb.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AlbumsMap;
