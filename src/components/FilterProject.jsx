import React from 'react';

function FilterProject({ setSearchText }) {

  const saveSearchedProject = (event) => {
    setSearchText(event.target.value)
  }

  return(
    <div className='filter-project'>
      <input 
        placeholder="Search projects..." 
        onChange={saveSearchedProject} 
      />
    </div>
  )
}

export default FilterProject;