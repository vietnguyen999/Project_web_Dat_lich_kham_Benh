import React from "react";
import "./About.css";
import useFetch from "../../hooks/useFectch";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function Useinput() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/doctor-informations?populate=*"
  );
  const [query, setQuery] = useState(true);
  //   console.log(data.data);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Eror...</p>;

   console.log(data.data[0].attributes.Name.toLowerCase().includes("Ng"));
  // console.log(query)
  return (
    <div>
      <div className="doctor-seach">
        <h5 className="text-seach-doctor-h5">Tìm Kiến Bác Sĩ</h5>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
