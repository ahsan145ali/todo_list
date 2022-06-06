import React from 'react'
import { Card , CardContent , Typography } from '@material-ui/core'
import './DisplayTask.css'
import TaskDate from './TaskDate'
const DisplayTask = ({task}) => {
  return (
    <>
      <div className='task'>
      <Card className='root'>
        <CardContent>
            <div className='cardContent'>
                  <Typography variant='h4' gutterBottom>Task: {task.task}</Typography>
                  <Typography variant='h5'> <TaskDate date = {task.date}/> </Typography>
            </div>
          </CardContent>
      </Card>

      </div>
    </>
  )
}

export default DisplayTask
