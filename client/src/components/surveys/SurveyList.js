import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }  

    renderSurveys(){
        if(this.props.surveys.length === 0){
         return (<div style={{padding:'10px'}} className="card">
                <h2>You don't have any survey!</h2>
                <p>Please click on the bottom right button to create a new one</p>
            </div>)
        }
        return this.props.surveys.reverse().map(survey =>{
                return (
                    <div className="card blue lighten-1" key={survey._id}>
                        <div className="card-content white-text">
                            <span className="card-title">{survey.title}</span>
                            <hr></hr>
                            <p><i className="far fa-comment-dots"></i> {survey.body}</p>
                            <p className="right">
                            <i className="fas fa-calendar-week"></i> Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                            <div className="card-action">
                                <p><i className="fas fa-check-circle"></i> Yes: {survey.yes}</p>
                                <p><i className="fas fa-times-circle"></i> no: {survey.no}</p>
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