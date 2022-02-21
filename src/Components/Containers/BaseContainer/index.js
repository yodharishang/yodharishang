import { React } from "./../../libraries";

const BaseContainer = ({ children }) => {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  )
}

export default BaseContainer;