interface IPriceProps {
  amount: number
}
const Price = ({ amount }: IPriceProps) => {
  const currency = '€'
  return (
    <span>{`${currency}${Number(amount)}`}</span>
  )
}
export default Price
