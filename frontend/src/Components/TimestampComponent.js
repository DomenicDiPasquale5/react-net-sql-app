import { useEffect, useState } from 'react';

function TimestampComponent() {
  const [data, setData] = useState([]);

  function createData() {
    fetch("http://localhost:5000/api/timestamps",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          timestampDatetime: new Date().toISOString(),
        }),
      })
      .then(response => response.json())
      .then(data => setData(data))
  };

  function deleteData(timestampID) {
    console.log("deleteData")
    console.log(timestampID)

    const id = (timestampID === undefined) ? '' : timestampID.toString();

    fetch(`http://localhost:5000/api/timestamps/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => setData(data))
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/timestamps",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
    .then(response => response.json())
    .then(data => setData(data))
  },[])

  return (
    <div>
      <button onClick={() => deleteData()}>Delete All Data</button>
      <button onClick={() => createData()}>Create Data</button>
      {data && data.map(timestamp => (
        <>
          <div id={"data-" + timestamp.timestampId} key={"data-" + timestamp.timestampId}>
          <button id={"control-" + timestamp.timestampId} key={"control-" + timestamp.timestampId} onClick={() => deleteData(timestamp.timestampId)}>Delete Data</button>
            {timestamp.timestampId}: {timestamp.timestampDatetime}
          </div>
        </>
      ))}
    </div>
  );
}

export default TimestampComponent;
