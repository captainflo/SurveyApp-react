import React from "react";
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';


const Dashnoard = () => {
  return (
    <div>
      <SurveyList/>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large pink pink darken-3">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashnoard;
