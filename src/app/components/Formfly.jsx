function Formfly({title}) {
  return (
    <div>
        <form action="/buscar" method="get" className="form-get-tickets">
            <h3>{title}</h3>
            <input type="text" className="search-fly-bar"/>
            <input type="date"/>
        </form>
    </div>
  )
}

export default Formfly