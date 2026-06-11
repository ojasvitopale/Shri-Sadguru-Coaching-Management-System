import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showStudentPage, setShowStudentPage] = useState(false);
  const [username, setUsername] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
const [students, setStudents] = useState([]);
const [showFacultyPage, setShowFacultyPage] = useState(false);
const [facultyName, setFacultyName] = useState("");
const [facultySubject, setFacultySubject] = useState("");
const [faculties, setFaculties] = useState([]);
const [showCoursePage, setShowCoursePage] = useState(false);
const [courseName, setCourseName] = useState("");
const [courses, setCourses] = useState([]);
const [password, setPassword] = useState("");
if (showCoursePage) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Course Management</h1>

      <input
        type="text"
        placeholder="Enter Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() => {
          setCourses([...courses, courseName]);
          setCourseName("");
        }}
      >
        Add Course
      </button>

      <h3>Course List</h3>

      {courses.map((course, index) => (
        <div key={index}>
          <span>{course}</span>

          <button
            onClick={() =>
              setCourses(courses.filter((_, i) => i !== index))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <br /><br />

      <button onClick={() => setShowCoursePage(false)}>
        Back to Dashboard
      </button>
    </div>
  );
}
if (showFacultyPage) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Faculty Management</h1>

      <input
        type="text"
        placeholder="Enter Faculty Name"
        value={facultyName}
        onChange={(e) => setFacultyName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Subject"
        value={facultySubject}
        onChange={(e) => setFacultySubject(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() => {
          setFaculties([
            ...faculties,
            {
              name: facultyName,
              subject: facultySubject
            }
          ]);

          setFacultyName("");
          setFacultySubject("");
        }}
      >
        Add Faculty
      </button>

      <br /><br />
<h3>Faculty List</h3>

{faculties.map((faculty, index) => (
  <div key={index}>
    <span>
      {faculty.name} - {faculty.subject}
    </span>

    <button
      onClick={() =>
        setFaculties(faculties.filter((_, i) => i !== index))
      }
    >
      Delete
    </button>
  </div>
))}

<br /><br />
      <button onClick={() => setShowFacultyPage(false)}>
        Back to Dashboard
      </button>
    </div>
  );
}
if (showStudentPage) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Management</h1>

      <input
  type="text"
  placeholder="Enter Student Name"
  value={studentName}
  onChange={(e) => setStudentName(e.target.value)}
/>
<input
  type="text"
  placeholder="Enter Standard (8th/9th/10th)"
  value={studentStandard}
  onChange={(e) => setStudentStandard(e.target.value)}
  />
  <input
  type="text"
  placeholder="Enter Phone Number"
  value={studentPhone}
  onChange={(e) => setStudentPhone(e.target.value)}
/>

      <br /><br />

     <button
  onClick={() => {
  setStudents([
    ...students,
   {
  name: studentName,
  standard: studentStandard,
  phone: studentPhone
}
  ]);

  setStudentName("");
  setStudentStandard("");
  setStudentPhone("");
}}
>
  Add Student
</button>
<h3>Students List</h3>

{students.map((student, index) => (
  <div key={index}>
    <span>
  {student.name} - {student.standard} - {student.phone}
</span>

    <button
      onClick={() =>
        setStudents(students.filter((_, i) => i !== index))
      }
    >
      Delete
    </button>
  </div>
))}
      <br /><br />

      <button onClick={() => setShowStudentPage(false)}>
        Back to Dashboard
      </button>
    </div>
  );
}
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
      <h3>Students</h3>
<p>{students.length}</p>
    </div>

    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Faculty</h3>
      <p>{faculties.length}</p>
      <button onClick={() => setShowFacultyPage(true)}>
  Manage Faculty
</button>
    </div>

    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Courses</h3>
      <p>{courses.length}</p>
      <button onClick={() => setShowCoursePage(true)}>
  Manage Courses
</button>
    </div>
    <button
     onClick={() => setShowStudentPage(true)}
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