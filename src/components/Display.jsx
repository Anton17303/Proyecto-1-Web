import './Display.css'

const Display = ({ value }) => (
  <input 
    className="display" 
    type="text" 
    value={value} 
    readOnly 
  />
)

export default Display
