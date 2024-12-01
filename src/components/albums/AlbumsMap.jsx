import React from "react";
import { useGetAlbumsQuery } from "../../slices/apiApp";
import { useState } from "react";
import SelectSort from "../SelectSort";
import InputForSorted from "../InputForSorted";
import { useDeleteAlbumsMutation } from "../../slices/apiApp";
import { useNavigate } from "react-router-dom";
const AlbumsMap = () => {
  const [count, setCount] = useState("");
  const [countValue, setCountValue] = useState("");
  const [sorted, setSorted] = useState("id");
  const [searchParams, setSearchParams] = useState('')
  const { data = [] } = useGetAlbumsQuery(count);
  const [ remove ] = useDeleteAlbumsMutation()
    // реализовать сортировку по title и по body, важно делать сортировку именно копируя массив через оператор spread...
  // [...data].sort((a,b)=> a.title.localeCompare(b.title))

  /*<ol style={{ marginTop: "50px" }}>
{[...data].sort((a,b)=> a.title.localeCompare(b.title)).map((alb) => (
  <li style={{ marginTop: "20px" }} key={alb.id}>
    {alb.title}
  </li>
))}
</ol>
*/
  const handleRemoveItem = async (id) => await remove(id);
  const route = useNavigate()
  const handleSelect = (e) => {
    setCount(e.target.value);
    setCountValue("");
  };
  const al = [...data].sort((a, b) => a[sorted].localeCompare(b[sorted])).filter((post)=> post.title.includes(searchParams)); //[sorted] обращаюсь к ключи через скобки так как у меня он меняется динамически
  
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
        </div>
        <InputForSorted searchParams={searchParams} setSearchParams={setSearchParams}/>
        <SelectSort sorted={sorted} setSorted={setSorted} defaultValueDisabled="сортировка по" 
          options={[{value: 'id', name: 'по id'},
                    {value: 'title', name: 'по title'},
                    {value: 'body', name: 'по body'},     
          ]}
        />
      <ol style={{ marginTop: "50px" }}>
        {al.map((alb) => (
          <li style={{ marginTop: "20px" }} key={alb.id}>
            {alb.title}/{alb.title}
            <button onClick={() => handleRemoveItem(alb.id)}>delete</button>
            <button onClick={()=> route(`/postsComment/${alb.id}`)}>открыть альбом</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AlbumsMap;
