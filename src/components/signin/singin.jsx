
// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Footer from "../common/footer/Footer";
// import "./signin.css";

// const Signin = () => {
//   const history = useHistory();
//   const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     history.push("/", { username });
//   };

//   return (
//     <>
//       <header className="header">
//         <img src="/images/loggo1.png" alt="Logo" className="logo-img" />
//         <Link to="/" className="home-link">Back to Home</Link>
//       </header>

//       <main className="signin-container">
//         <h2>Sign In</h2>
//         <form onSubmit={handleSubmit}>
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
//             required
//           />
//           <button type="submit">Sign In</button>
//         </form>

//         <div className="extra-links">
//           <p>
//             Forgot password? <a href="#">Click here.</a>
//           </p>
//           <p>
//             Don’t have an account?{" "}
//             <Link to="/signup">Sign up</Link>
//           </p>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Signin;
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../common/footer/Footer";
import "./signin.css";

const Signin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    history.push("/");
  };

  return (
    <>
      <header className="header">
        <img src="/images/loggo1.png" alt="Logo" className="logo-img" />
        <Link to="/" className="home-link">Back to Home</Link>
      </header>

      <main className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <div className="extra-links">
          <p>
            Forgot password? <a href="#">Click here.</a>
          </p>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Signin;
