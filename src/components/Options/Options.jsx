import clsx from "clsx";
import css from './Options.module.css';


const Options = ({ onUpdate, totalFeedback, onReset, names }) => {

  return (
    <ul className={css.list}>
      {Object.keys(names).map(name => 
        <li key={name + 1}>
          <button className={clsx(css.option, css[name])} type='button' onClick={() => onUpdate(name)}>{name}
          </button>
        </li>)}
      {totalFeedback > 0 && <li><button className={css.option} type='button' onClick={() => onReset()}>reset</button></li>}
    </ul>
      
  )
}

export default Options;
