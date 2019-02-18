import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    constructor(props,context)
    {
        super(props,context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    
    render(){
        const {courses}=this.props;
        return(
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>  
                <CourseList courses={courses}/>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps)
{
    return{courses:state.courses};
}

function mapDispatchToProps(dispatch)
{
    return {
        //all the below are perfectly valid
        //createCourse: course=> dispatch(courseActions.createCourse(course))
        //createCourse: bindActionCreators(courseActions.createCourse,dispatch)
        actions:bindActionCreators(courseActions,dispatch)
    };
}

CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);