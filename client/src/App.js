import {useEffect} from "react";
import {Header} from "./Components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import {ProductList} from "./Components/ProductList/ProductList";
import {Form} from "./Components/Form/Form";
import {Ticket} from "./Components/Ticket/Ticket";


function App() {
  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div style={{ width: '100%'}}>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'form'} element={<Form/>}/>
        <Route path={'ticket/:id'} element={<Ticket />}/>
      </Routes>
    </div>
  );
}

export default App;
