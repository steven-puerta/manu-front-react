function Button({eventoClick, children}) {
    return (
      <div>
          <button onClick={eventoClick}>{children}</button>
      </div>
    )
  }
  
  const vacio = () => {} 
  
  Button.defaultProps={
    eventoClick:vacio
  }
  
  export default Button