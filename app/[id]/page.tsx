import React from "react";

function Detail({ params: { id } }: { params: { id: String } }) {
  return <div>{id}</div>;
}

export default Detail;
