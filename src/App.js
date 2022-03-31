import React , {useState}  from "react"
import Table from "./components/Table.js";
import {Users} from "./User"



function App() {

  const [query , setQuery] = useState("")
 


 

  // const search = (data) =>{
  // return  data.filter((item) =>
  
  //   item.first_name.toLowerCase().includes(query.toLowerCase()) || 
  //   item.last_name.toLowerCase().includes(query.toLowerCase()) ||
  //   item.email.toLowerCase().includes(query.toLowerCase()) 
  // ) 
  // }

  const keys = ["first_name" , "last_name" , "email"];

  const search = (data) =>{
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase())))
  }

  return (
    <div className="app">

     <div>
        <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="name , email , username" className="search"/>
     </div>

      <div>
        {/* دیگه همه ی دیتارو بهش پاس ندادم که همه رو نشون بده  */}
        {/* اومدم و دیتای فیلتر شده رو بهش پاس دادم  */}

        <Table data={search(Users)}/>
      </div>
    </div>
  );
}

export default App;
