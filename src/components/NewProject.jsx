import React from 'react';
function NewProject ({projects, setProjects}){
        const [titleText, setTitleText] = React.useState('')
        const [descriptionText, setDescriptionText] = React.useState('')

        const saveTitleText = (event) => {
            setTitleText(event.target.value)
        }

        const saveDescriptionText = (event) => {
            setDescriptionText(event.target.value)
        }

        const addProject = () => {
            setProjects([
                ...projects,
                {
                    title: titleText,
                    description: descriptionText,
                    id: crypto.randomUUID()
                }
            ])
            setTitleText('')
            setDescriptionText('')
        }
    
    return(
        <div className='new-project'>
            <h2>Add project</h2>
            <h3>Title</h3>
            <input 
                onChange={saveTitleText}
                value={titleText}
            />
            <h3>Description</h3>
            <input 
                onChange={saveDescriptionText}
                value={descriptionText}
            />
            <button onClick = {addProject}>Add</button>
        </div>
    )
}

export default NewProject;