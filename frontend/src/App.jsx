function App() {
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
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button>Login</button>
      </div>
    </div>
  );
}

export default App;