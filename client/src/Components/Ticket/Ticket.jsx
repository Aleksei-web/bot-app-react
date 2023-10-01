import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "../Header/Header";

export const Ticket = () => {
  const [item, setItem] = useState()
  let {id} = useParams();

  useEffect(() => {
    getTicket(id)
  }, [])

  const getTicket = async (id) => {
    try {
      const token = window.localStorage.getItem('token')
      const {data} = await axios.get(`http://45.12.228.11:5000/api/ticket/${id}`, {headers: {authorization: `Bearer ${token}`}})
      console.log(data)
      setItem(data)
    } catch (e) {
      console.log(e)
    }
  }

  return <div
    style={{width: '350px', display: "flex", justifyContent: 'center', flexDirection: 'column'}}>
    <Header/>
    <div>
      <h3>Описане</h3>
      {item &&
        <div style={{margin: '10px 10px'}}>
          <div style={{width: '350px'}} dangerouslySetInnerHTML={{__html: item.request?.description}}/>
          <hr />
          <div>тип заявки: {item.request.request_type?.name}</div>
          <div>специалист: {item.request.technician?.name}</div>
          <div>Срок выполнения: {item.request.due_by_time?.display_value}</div>
        </div>

      }
    </div>
  </div>
}