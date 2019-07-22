import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey =>{
            return (
                <div className="card pink lighten-2" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                        <div className="card-action">
                            <p>Yes: {survey.yes}</p>
                            <p>no: {survey.no}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="container">
                {this.renderSurveys()}
            </div>
        )
    }
}


function mapStateToProps(state){
    return { surveys: state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);