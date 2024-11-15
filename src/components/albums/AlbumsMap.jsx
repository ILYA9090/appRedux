import React from "react";
import { useGetAlbumsQuery } from "../../slices/apiApp";
import { useState } from "react";
const AlbumsMap = () => {
  
  const [count, setCount] = useState("");
  const { data = [] } = useGetAlbumsQuery(count);

  return (
    <div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </div>
      <ol style={{ marginTop: "50px" }}>
        {data.map((alb) => (
          <li style={{ marginTop: "20px" }} key={alb.id}>
            {alb.title}
          </li>
        ))}
      </ol>
      
    </div>
  );
};

export default AlbumsMap;
