'use strict';

import { connect } from 'react-redux';
import AllStudents from './AllStudents';

const mapStateToProps = state => ({
  students: state.students
})

//export default connect(mapStateToProps)(AllStudents);
const componentCreator = connect(mapStateToProps);
const Dashboard = componentCreator(AllStudents);
export default Dashboard;
