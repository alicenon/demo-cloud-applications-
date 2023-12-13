import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


function App() {
  const [selectFile, setSelectFile] = useState(null);

  const handleFileInput = (e) => {
    // Extract the first file from the FileList
    const file = e.target.files[0];
    setSelectFile(file);
  };
  
  const handleUpload = async () => {
    const client = new S3Client({
      region: "us-east-1",
      credentials: {
        accessKeyId: "ASIARQ7ACXFOASIKYXEK",
        secretAccessKey: "BQemXafNPL5SAg9rDWO73dQTAExtdcLGkqZQVTnp",
        sessionToken: "IQoJb3JpZ2luX2VjEOb//////////wEaCXVzLWVhc3QtMSJHMEUCICpxxhmI0Y5FAdmWlwRgMzgM+HRnJDs6UXAziK6PDTLGAiEA5LLrxWOnIm1jPm4i7/+nCGbjhk4QXyJ0A+NMLelmm0Iq0gQITxAAGgwxMDUxNTk3Njg0MTIiDEneDs+iyRPgZK3X4CqvBME3Uv8qYi3TXq4dL9p/+4BcPmYROKLymEP3tcxMW0Cgs8awSlPtVNNYvlJfzYzHORzSv+gcPBvhVT0kle4q7AFvBMD4Tf8HFjyzQ0J47aSkI4OgQ3zk/I7LpqUSS9jAFWI/tLMMcKeQgCHs41FyI8ZrO7rz++UWvabXrFW4MARxZnsazkVbRMkc0N34gh1jV+o/9O82F/oGdZWvEjpXjja5WYt14d4Px6DSQ738yYCSN85UL+R5W8mAvphc6zJ4Al5rbkGcKQFlC8LnTNDThKkEt9YgdL8np7nRJFB7PUjrWsvzX6KFU87Kim0nucPuJQhGso6TOkKYvUyKnIIYyLPwqxpHD4L2NzcmuKiRnDNWjvFhr8H9A0DgKhagafxG2JF57D3FsRaBRj1ZsVPWAcsWcpa7OHGpYPtk8AYTVXOyjjCnI5UrNmdJFZ2/++u6wMOSZquWqrjjOqlitnCMCRsxjuJX5Xf6FzFL+RyhrBhhKUDNPqq/yYhIBFIaIlb3HD2IXAtp2Mrldv+QStQ6obgCaTliXybBqqcOQ8j14PJXE37N8dieVLi61Nf0HUBu5Qbd7qt1Vl1CgGF/6GbR4sy7l5wEvGVvs6UJ8sFLpbU3BXgJr/sisQ+B0qW+C/honQks1FzSBxbu1athLBeMwI1qfFU3dd1kkb5tQJoO3JlB7tNjv8ojY4hg4XXpOw7aUBnf36KVrOQr8rICNfuZrLmcJloGSorbrZy5L/Ky1bAwipezqwY6pgJNq4A8WwL2r6M5xb7ESGrHOVnsexLNIJGKoaHjOgycsybxC5Tyq6B5GuHLo/RymISjMV5GuDQcSRuJFTknL4Or8jw5d6RozSlPVLAxlJAeVsN3vSWR1qeEOK5YBGqYheY/7m6btOhvfMR5H3ysiC8FPqRQ02cxHRnbH+DLKX9up8kQgxmdquSug6NzZ9FSp02SkdKjp5Bo2RISW5ui/Ti3Z4C7D2BzfBSB4RxVPHi76J4NozyxghIDdWVHOEpN4ou0txYo8dybn1OV+Gbk6N/GzsYEcYUxS+aVuybCzz5/iaFOIOOboFbatooIbXUKS16qpx0CdOkG5e8WEB3Jb+/3wNEWVvZeIsUm+4JZUQwLnq/8wfPKjSNNnE2OabZClVJtyYWLHQY="
      },
    });

    const params = {
      Bucket: "test-taja-s3",
      Key: "test",
      Body: selectFile /** object body */,
    };

    const command = new PutObjectCommand(params);
    const data = await client.send(command);
    console.log(data);
  };  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      <input type="file" onChange={handleFileInput} multiple></input>
      <button onClick={handleUpload}>Upload To S3</button>
    </div>
      </header>
          
    </div>
  );
}

export default App;

