import './Header.css'
import {Button} from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import {Link} from "react-router-dom";

export const Header = () => {
  const {onClose, user} = useTelegram()

  return <div className={'header'}>
    <Link to={'/'}>Список заявок</Link>
    {/*<Button onClick={onClose}>Закрыть</Button>*/}
    {/*<span className={'username'}>{user?.username}</span>*/}
  </div>
}