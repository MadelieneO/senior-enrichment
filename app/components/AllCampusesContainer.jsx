'use strict';

import { connect } from 'react-redux';
import AllCampuses from './AllCampuses';

const mapStateToProps = state => ({
  campuses: state.campuses
})

//export default connect(mapStateToProps)(AllCampuses);
const componentCreator = connect(mapStateToProps);
const AllCampusesContainer = componentCreator(AllCampuses);
export default AllCampusesContainer;
