import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
  if (isLoggedIn) {
  return (
   <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1>Dashboard</h1>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Students</h3>
      <p>120</p>
    </div>

    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Faculty</h3>
      <p>15</p>
    </div>

    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Courses</h3>
      <p>10</p>
    </div>
    <button
  style={{
    marginTop: "20px",
    padding: "10px 20px",
    marginRight: "10px"
  }}
>
  Student Management
</button>
    <button
  onClick={() => setIsLoggedIn(false)}
  style={{
    marginTop: "30px",
    padding: "10px 20px",
    borderRadius: "5px",
  }}
>
  Logout
</button>
  </div>
</div>
  );
}
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Shri Sadguru Coaching Management System</h1>

      <div
        style={{
          width: "300px",
          margin: "auto",
          padding: "20px",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

       <button
  onClick={() => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Username or Password");
    }
  }}
>
  Login
</button>
      </div>
    </div>
  );
}

export default App;