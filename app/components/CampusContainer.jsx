'use strict';

import { connect } from 'react-redux';
import { loadCampus } from '../action_creators/action-creators';
import Campus from './Campus';

const mapStateToProps = function(state) {
  return {
    campus: state.selectedCampus
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleCampus: function() {
      const campusId = ownProps.params.campusId;
      const thunk = loadCampus(campusId);
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const CampusContainer = componentCreator(Campus);
export default CampusContainer;