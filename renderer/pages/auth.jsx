import { useState } from "react";
import Login from "../components/forms/login/Login";
import Register from "../components/forms/register/Register";

export default function Auth(params) {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          
          {isLogin ?
            <Login setIsLogin={setIsLogin} />  
            : <Register setIsLogin={setIsLogin} />
          }

        </div>
      </div>
    </>
  )

}