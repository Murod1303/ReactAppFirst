import "./search.css"

const Search = () => {
  return(
    <>
    <form className="form">
      <input className="form__search" type="search" placeholder="Search country" aria-label="Search Country"  />
      <select className="form__select">
        <option hidden value="#">Filter by Region</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
    </>
  )
}

export default Search