const Filter = ({filter, onChange}) => {
    return <input type="text" name="filter" value={filter} onChange={({target})=>onChange(target.value)} placeholder="Entert name for search"></input>
}

export default Filter;