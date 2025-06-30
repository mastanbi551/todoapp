import Header from "../useContextConcepts/components/Header";
import { createContext, useState } from "react";
import { Login } from "../useContextConcepts/components/Login";
import Form from "../useContextConcepts/components/Form";
import { AuthContext, AuthenticatedUserContext } from "./contexts";

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
