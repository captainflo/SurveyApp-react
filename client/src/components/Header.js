import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import {Modal} from 'react-materialize';
import Logo from  './images/logo.png';

class Header extends React.Component{
    renderSocial(){
        return(
            <div className="center">
                <h3 style={{paddingBottom: '10px'}}>Login <i className="fas fa-sign-in-alt"></i></h3><hr></hr>
                <ul>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/google" className="waves-effect waves-light btn social google">
                <i className="fab fa-google"></i> Sign in with google</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/linkedin" className="waves-effect waves-light btn social linkedin">
                <i className="fab fa-linkedin"></i> Sign in with linkedin</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href='/auth/facebook'className="waves-effect waves-light btn social facebook">
                <i className="fab fa-facebook"></i> Sign in with facebook</a></li>
                <li style={{listStyle:'none', paddingBottom: '10px'}}><a href="/auth/instagram" className="waves-effect waves-light btn social instagram">
                <i className="fab fa-instagram"></i> Sign in with instagram</a></li>
                </ul>
            </div>
            
        )
    }

    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                <li key="1"><a href={"mailto:lahitte.florian@gmail.com" }><i className="far fa-comment-dots"></i> Contact</a></li>,
                <li key="2">
                    <Modal
                        trigger={<a href='#/'><i className="fas fa-user-circle"></i> Sign In</a>}>
                        <div>{this.renderSocial()}</div>
                    </Modal>
                </li>
                ]
            default:
                return [
                    <li key="3" style={{margin: '0 10px'}}><i className="fas fa-coins"></i> Credits: {this.props.auth.credits}</li>,
                    <li key="1"><a href='#/'><i className="fab fa-cc-stripe"></i> <Payments/></a></li>,
                    <li key="2"><a href="/api/logout"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                ]  
        }
    }

    render(){
        return(
            <div>
            <nav>
                <div className="nav-wrapper pink darken-3">
                < Link to={this.props.auth ? '/surveys' : '/'}><span style={{marginLeft:'60px'}} className="brand-logo hide-on-med-and-down">Emaily</span> <img className="brand-logo" style={{width:'60px', padding:'10px'}} src={Logo} alt={"logo"}/></Link>
                <Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
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