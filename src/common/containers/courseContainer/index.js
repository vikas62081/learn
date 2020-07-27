import React from 'react'
import {courses} from '../../components/course/constant'
import Course from '../../components/course'
import { Grid } from '@material-ui/core'

const CourseContainer=()=>{
    return (
        <Grid container style={{padding:"0 10%"}}>
        {courses.map(course=><Course course={course}/>)}
        </Grid>)
}
export default CourseContainer;