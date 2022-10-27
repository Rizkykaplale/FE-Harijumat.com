import React, { useState } from "react";

function EditData(props) {
  const [data, setData] = useState("");
  const ubahData = (e) => {
    e.preventDefault();
    setData()
  };
  return (
    <div>
      <button type="button" class="btn btn-success" onClick={ubahData}>Edit</button>
    </div>
  );
}

export default EditData;
