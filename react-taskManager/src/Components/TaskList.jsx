import { Link } from "react-router-dom";

export const taskDataset = [
    {
        id: 0,
        title: "Required Assingments",
        description: "Review and complete all required assingments for LC Unit 1"
    },
    {
        id: 1,
        title: "Wireframing",
        description: "Wireframe your web app in Figma, crosschecking with the required functionality list"
    },
    {
        id: 2,
        title: "Organize Kanban and Begin Coding",
        description: "Look over next two week's class schedule and add cards to Trello to keep gain sense of pacing you'll have to keep"
    },
    {
        id: 3,
        title: "Project Execution",
        description: "Get down code, review, ask questions and revise"
    }
]

function TaskList() {

    return (
        <div>
            <h1>Task List</h1>
            {taskDataset.map(task => (
                <div key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            </div>
            ))}
        </div>
    );
}

export default TaskList;




//inside app function, insert the /status/:id path in the Route element; this is the dynamic route where id is the placeholder for the parameter