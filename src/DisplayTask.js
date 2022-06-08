import React from 'react'
import { Card , CardContent , Typography } from '@material-ui/core'
import './DisplayTask.css'
import TaskDate from './TaskDate'
import ReactTimeAgo from 'react-time-ago'
const DisplayTask = ({task}) => {
  return (
    <>
      <div className='task'>
      <Card className='root'>
        <CardContent>
            <div className='cardContent'>
                  <Typography variant='h4' gutterBottom>Task: {task.task}</Typography>
                  <Typography variant='h6' gutterBottom color='textSecondary'> <b>Added:</b>  <ReactTimeAgo date={task.date} locale="en-US" timeStyle="twitter"/> </Typography>
            </div>
            <Typography variant='body2' color="textSecondary" > <b>Description:</b> {task.desc}  </Typography>
          </CardContent>
      </Card>

      </div>
    </>
  )
}

export default DisplayTask
