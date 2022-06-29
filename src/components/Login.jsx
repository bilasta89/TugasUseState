import { useState } from "react";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInputLogin({
      //... = spread data
      ...inputLogin,
      [e.target.name]: e.target.value,
    });
  };

  //prevent default, menghilangkan hal2 bawaan dari html

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputLogin);
  };

  return (
    <div>
      <form>
        <input type="email" placeholder="email" name="email" value={inputLogin.email} onChange={handleInput} />
        <input type="password" placeholder="password" name="password" value={inputLogin.password} onChange={handleInput} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleDelete}>sfnjasfjafahs</button>
      </form>
    </div>
  );
};

export default Login;
