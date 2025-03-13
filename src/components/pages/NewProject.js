import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate();

    function createPost(Project) {
        
        Project.cost = 0
        Project.servises = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Project),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                navigate('/projects', { message: 'Project created successfully!' });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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