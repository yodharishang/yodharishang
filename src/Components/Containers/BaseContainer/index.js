import  React  from "react";

const BaseContainer = ({ children }) => {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  )
}

export default BaseContainer;