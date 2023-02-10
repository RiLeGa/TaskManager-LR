
export const Alert = ({msg}) => {
  return (
    <div style={{background:"red", width:"40%",fontSize:"13px", padding:"5px", borderRadius:"15px", margin:"10px", textAlign:"center", color:"white", fontFamily:"sans-serif", textTransform:"uppercase"}}>
      {msg}
    </div>
  )
}