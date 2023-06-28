import { useState } from "react";
import SignUp from "./Components/SignUp";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setClick = () => {
    if (email.trim() === "") {
      alert("Please enter email");
      return;
    }
    if (password.trim() === "") {
      alert("Please enter Password");
      return;
    }
    if (password.length < 8) {
      alert("password must have at least 8 letter!");
      return;
    }
    setEmail("");
    setPassword("");
    console.log(email);
    console.log(password);
  };

  const form = {
    email,
    setEmail,
    password,
    setPassword,
    setClick,
  };

  return (
    <>
      <SignUp {...form} />
    </>
  );
}

export default App;
