import { useState } from "react";
import { Input} from "antd";

function Search({filterFoodList}) {
    
    const [firstletter, setFirstletter] = useState("");
    
    const handleSearch = (event) => {
      
        setFirstletter(event.target.value);
        filterFoodList(event.target.value);
        
    }
    
    
    return(
        <div>
          <label>Search:</label>
          <Input type="text" value={firstletter} onChange={handleSearch} />
        </div>
    
    );
     
    
}

export default Search;