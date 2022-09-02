interface IButtonProps {
  text: string,
  [key: string]: any
}
const Button = ({ text, ...other }: IButtonProps) => {
  return (
    <button {...other} className={`bg-slate-100 rounded w-24 h-9 ${other.className || ''}`}>{text}</button>
  )
}
export default Button
