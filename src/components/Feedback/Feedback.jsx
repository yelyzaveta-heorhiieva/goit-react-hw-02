import css from './Feedback.module.css'

const Feedback = ({names, positive, total}) => {
  return (
    <ul className={css.list}>
      {Object.keys(names).map(name => <li className={css.item} key={name + 2}><p>{name}: {names[name]}</p></li>)}
      <li className={css.statistic}>Total: {total}</li>
      <li className={css.statistic}>Positive: {positive}%</li>
      
    </ul>
  )
}

export default Feedback;
