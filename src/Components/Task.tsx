import React from 'react'
import {allTask } from '../stories/Task.stories'

const Task =({task: {id, title, state}}: allTask) => {
    return (
        <div>
            <h1>Task</h1>
        </div>
    )
}

export default Task
