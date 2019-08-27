import React from 'react';
import axios from 'axios';
import Logo from './logo.jsx';
import SignUp from './Welcome_Components/signup.jsx';
import LoginModal from './Welcome_Components/login.jsx';
export default class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    onSignUpSubmitClick(e){
        // e.preventDefault();
        // this.props.grantUserAccess;
        // axios.post('/mysignup',{
        //     name: this.props.name,
        //     userName: this.props.userName,
        //     password: this.props.password,
        //     email: this.props.email
        // })
        // .then((res)=>{
        // }
        // )
    }


    onLoginSubmitClick(e){
        e.preventDefault();
        axios.get('/mylogin')
        .then(res => {
            // res.data.map(funciton (users){

            // })
        })
        .catch((err) => { console.log(err); });
    }

        render(){

    
        return(
           
            <div id='Homepage'>
                <div className='HomepageButtons'>

                    <button className='SignUpButton' disabled={false} type="button" onClick={this.props.onClickSignUp}>
                        Sign-Up
                    </button>
                    <button className='SignUpButton' onClick={this.props.toggleModal}>
                        Login
                    </button>
                </div>

                <SignUp onSignupSubmitClick={this.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} 
                onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} 
                name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} 
                SignUp={this.props.SignUp} Login={this.props.Login} grantUserAccess={this.props.grantUserAccess}
                />
                    
                <LoginModal userName={this.props.userName} password={this.props.password} onChangeLogin={this.props.onChangeLogin}
                grantUserAccess={this.props.grantUserAccess} toggleModal={this.props.toggleModal} isOpen={this.props.isOpen}/>

                <div className="wrapper">
                    <div className="fixed-bg bg-1">
                        <h1> Even Food Needs Saving </h1>
                    </div>
                    <div className="scroll-bg">
                        <h3> </h3>
                    </div>
                    <div className="fixed-bg bg-2">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <h3> How We Work: Already a user? Welcome Back! First time user? Locate the Sign-Up button to the upper right corner of the web page. Input your information and click submit. Don't worry we wont submit your information to third party applications. </h3>
                    </div>
                    <div className="fixed-bg bg-3">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Once logged in we welcome you to your Pantry dashboard! From here you can add perishable items to your Pantry and remove if needed. You can click the Notification button and it will show you what perishable items you have that will expire within three days! Added bonus your recipe list will recommend recipes that will use your soon to be expired items so that you may use those items first! The more items soon to expire the better fit the recipe will be.</h3>
                    </div>
                    <div className="fixed-bg bg-4">
                        <h1></h1>
                    </div>
                </div>
            </div>
        );
    }
}