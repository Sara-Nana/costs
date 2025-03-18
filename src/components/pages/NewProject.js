import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        
        project.cost = 0
        project.servises = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                navigate('/projects', {state: { message: 'Project created successfully!' }});
                console.log(data)
            })
            .catch((error) => console.log('Error:', error));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project to add the services!</p>
            <ProjectForm handleSubmit={createPost} btnText='Create Project' />
        </div>
    )
}   

export default NewProject;