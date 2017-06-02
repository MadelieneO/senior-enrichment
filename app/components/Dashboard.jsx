'use strict';

import { connect } from 'react-redux';
import AllStudentsContainer from './AllStudentsContainer';
import AllCampusesContainer from './AllCampusesContainer';

const mapStateToProps = state => ({
  students: state.students,
  campuses: state.campuses
})

//export default connect(mapStateToProps)(AllStudents);
//export default connect(mapStateToProps)(AllCampuses);
const componentCreator = connect(mapStateToProps);
const Dashboard = componentCreator(AllCampuses);
export default Dashboard;
