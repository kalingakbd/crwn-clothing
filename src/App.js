import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";
import { auth, createUser } from './firebase/firebase.utils';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user});
            // console.log(user);
           if(userAuth){
               const userRef = await createUser(userAuth);
               userRef.onSnapshot(snapshot => {
                   this.setState({
                       currentUser: {
                           id: snapshot.id,
                           ...snapshot.data()
                       }
                   }, () => {console.log("State updated with user")})
               })
           }
        })
    }

    componentWillUnmount() {
        //todo need to check this
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/sign-in' component={SignInPage} />
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
