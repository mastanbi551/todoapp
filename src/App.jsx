import BlogForm from "./components/blogs/blogForm";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Test from "./components/Test";
import { createContext, useState } from "react";
import { Login } from "./components/login";
import Form from "./components/Form";
import { AuthContext, AuthenticatedUserContext } from "./components/contexts";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {isAuth ? (
        <>
          <AuthContext.Provider value={isAuth}>
            {
              <AuthenticatedUserContext.Provider value={"Mastanbi"}>
                <Header setIsAuth={setIsAuth} isAuth={isAuth} />
                <Form />
                <BlogForm />
              </AuthenticatedUserContext.Provider>
            }
          </AuthContext.Provider>
        </>
      ) : (
        <Login isAuth={isAuth} setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
