import './ProcuctList.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const ProductList = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      const token = window.localStorage.getItem('token')
      const {data} = await axios.get('http://45.12.228.11:5000/api/problems', {headers: {authorization: `Bearer ${token}`}})
      setItems(data.items)
    } catch (e) {
      console.log(e)
    }
  }
  return <div style={{overflow: 'hidden'}}>
    <div className={'container'}>
      {items.map((el, i) => <div className="card border-0" style={{marginTop: '10px'}}>
          <div className="position-relative">

          </div>
          <div className="card-body">
            <h5 className="card-title">{el.subject}</h5>
            <hr/>
            <p className="card-text">{el.short_description.replace(/&nbsp;/g, '')}</p>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
              <p>id: {el.id}</p>
              {el.site?.name && <p>площадка: {el.site?.name}</p>}
            </div>
            {el.priority?.name && <p>приоритет: {el.priority?.name}</p>}
            <p>Автор: {el.requester?.name}</p>
            <p>Статус: {el.status?.name}</p>
          </div>
          <div className="card-footer">
            <div className="media align-items-center">
              <div className="media-body">
                <Link to={`/ticket/${el.id}`} className="card-link text-uppercase">Открыть</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  </div>
}