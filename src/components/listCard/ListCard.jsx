import "./listCard.css";
import Card from "../card/Card";

const ListCard = () => {
  // const arr = Array(8).fill(1)
  return(
    <>
    <ul className="list">
      {/* {arr.map(item => <Card/>)} */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ul>
    </>
  )
  
}
export default ListCard
