import React, { useState } from "react";
import CardComponent from "./CardComponent";

const SearchBar = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = data.filter((item) => {
      // Customize your filtering logic here based on the specific values you want to search
      return (
        // item.name.toLowerCase().includes(query.toLowerCase()) ||
        // item.description.toLowerCase().includes(query.toLowerCase())
        item.issuer.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Securities by ID"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item) => (
          <CardComponent key={item.id} value={item} />
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
