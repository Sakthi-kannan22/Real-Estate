// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Footer from "../common/footer/Footer";
// import "./signup.css";

// const Signup = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Login id created!");
//     history.push("/signin");
//   };

//   return (
//     <>
//       <header className="header">
//         <img src="/images/loggo1.png" alt="Logo" className="logo-img" />
//         <Link to="/" className="home-link">Back to Home</Link>
//       </header>

//       <main className="signin-container">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Username"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../common/footer/Footer";
import "./signup.css";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login id created!");
    history.push("/signin");
  };

  return (
    <>
      <header className="header">
        <img src="/images/loggo1.png" alt="Logo" className="logo-img" />
        <Link to="/" className="home-link">Back to Home</Link>
      </header>

      <main className="signin-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Signup;
