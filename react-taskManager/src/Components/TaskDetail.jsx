import { useParams } from "react-router"
import { taskDataset } from './TaskList';
import './TaskDetails.css';


function TaskDetails() {
    const {id} = useParams(); //This piece extracts the id from the URL--review how this method works
    const task = taskDataset.find(task => task.id.toString() === id)

    return(
        <div className="task-details">
            {task ? (
                <div>
                <h1>{task.title}</h1>
                <h2>{task.description}</h2>               
                </div>
            ) : (
                <p>Error: No such task</p>
            )}
        </div>
    );
}


export default TaskDetails;

