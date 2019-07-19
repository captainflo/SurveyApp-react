// SurveyNew shows SurveyForm and SurveyFormReview
import React from "react";
import { reduxForm } from 'redux-form';
import SurveyForm from "./SurveyForm";
import SurveyFromReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return <SurveyFromReview 
        onCancel={() => this.setState({ showReview: false})}
      />;
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyNew);
