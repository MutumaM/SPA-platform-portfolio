import React, { useState } from 'react';
import "./App.css";
import NewProject from "./components/NewProject";
import FilterProject from "./components/FilterProject";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [searchText, setSearchText] = useState('')

  const [projects, setProjects] = useState([
    {title: 'Calculator', description: 'Coded with javascript, css and html', id:'id1'},
    {title: 'Task-lister', description: 'Practice on the HTML forms', id: 'id2'},
    {title: 'Weather app', description:'Practice on fetching APIs', id:'id3'}
])

  return(
    <>
      <NewProject 
        projects = {projects}
        setProjects = {setProjects}
      />
      <FilterProject setSearchText={setSearchText}/>
      <ProjectList 
        projects = {projects}
        setProjects = {setProjects}
        searchText={searchText}
      />
    </>
  );
}

export default App;