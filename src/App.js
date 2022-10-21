import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages";

function App() {
  return (
 <Routes>
   <Route path={'/'} element={<MainLayout/>}>
     <Route index element={<Navigate to={'/register'}/>}/>
     {/*<Route path={'/login'} element={''}/>*/}
     <Route path={'/register'} element={<RegisterPage/>}/>
   </Route>
 </Routes>
  );
}

export default App;
