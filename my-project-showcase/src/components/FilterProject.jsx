import React from 'react';
function FilterProject() {
    const [searchText, setSearchText]= React.useState('')
  
  const saveSearchedProject = (event) => {
    setSearchText(event.target.value)
  }

    return(
        <div className='filter-project'>
            <input placeholder="Search projects" onChange = {saveSearchedProject} />
            <button>Search</button>
        </div>
    )
}

export default FilterProject;