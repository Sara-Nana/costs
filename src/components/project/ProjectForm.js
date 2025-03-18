import { useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm ({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || []);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);

    function handleChange (e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }
    
    function handleCategory(e) {
        setProject({ ...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            }    
        });
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    return (
        
        <form onSubmit={submit} className={styles.form} autoComplete='off'>

            <Input 
            type="text" 
            text="Project Name" 
            name="name" 
            placeholder=" Enter the project name" 
            handleOnChange={handleChange}/>

            <Input 
            type="number" 
            text="Project Budget" 
            name="budget" 
            placeholder=" Enter the project budget" 
            handleOnChange={handleChange}/>

            <Select 
            name="category_id" 
            text="Select the Category" 
            options={categories} 
            handleOnChange={handleCategory} 
            value={project.category ? project.category.id : ''}/>

            <SubmitButton text={btnText} />

        </form>
    )

}
export default ProjectForm;