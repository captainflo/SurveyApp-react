import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import {Modal} from 'react-materialize';
import Logo from  './images/logo.png';

class Header extends React.Component{
    renderSocial(){
        return(
            <div>
                <h3>Login </h3><hr></hr>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/google" className="waves-effect waves-light btn social google">
                <i className="fab fa-google"></i> Sign in with google</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/linkedin" className="waves-effect waves-light btn social linkedin">
                <i class="fab fa-linkedin"></i> Sign in with linkedin</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href='/auth/facebook'className="waves-effect waves-light btn social facebook">
                <i class="fab fa-facebook"></i> Sign in with facebook</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/instagram" className="waves-effect waves-light btn social instagram">
                <i class="fab fa-instagram"></i> Sign in with instagram</a></li>
            </div>
            
        )
    }

    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                <li><a><i class="far fa-comment-dots"></i> Contact</a></li>,
                <li>
                    <Modal
                        
                        trigger={<a><i className="fas fa-user-circle"></i> Sign In</a>}>
                        <p>{this.renderSocial()}</p>
                    </Modal>
                </li>
                ]
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="3" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ]  
        }
    }

    render(){
        return(
            <div>
            <nav>
                <div className="nav-wrapper pink darken-3">
                < Link to={this.props.auth ? '/surveys' : '/'}><span style={{marginLeft:'60px'}} className="brand-logo hide-on-med-and-down">Emaily</span> <img className="brand-logo" style={{width:'60px', padding:'10px'}} src={Logo} alt={"logo"}/></Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                {this.renderContent()}
                </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><h4 className='center'>Menu</h4></li>
                <hr></hr>
                {this.renderContent()}
            </ul>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{auth: state.auth};
}

export default connect(mapStateToProps)(Header);