import css from './Notification.module.css'

const Notification = ({children}) => {
  return (
    <p className={css.text}>{children}</p>
  )
}

export default Notification
