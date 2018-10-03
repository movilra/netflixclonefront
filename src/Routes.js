import React, { Component } from 'react';
import {Route, 
    BrowserRouter as Router, Redirect} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo'
import client from './graphql'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import isAuthenticated from './resolvers/isAuthenticated'
import MovieDetail from './components/Home/MovieDetail/MovieDetail'
import Me from '.components/Me/Me'

class Routes extends Component{
    render(){



        const PrivateRoutes = ({component:Component, ...rest}) => (
            <Route {...rest} render= {(props) => (
                isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to="/login"/>
                //console.log('Esta logeado: ' , isAuthenticated())
            )} />
        )



        return(
            <Router>
                <ApolloProvider client={client}>
                <main>
                    <PrivateRoutes exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <PrivateRoutes exact path='/movie/:id' component={MovieDetail}/>
                    <PrivateRoute exact path="/me" component={Me} ></PrivateRoute>
                    
                </main>
                </ApolloProvider>
            </Router>
        )
    }
}

export default Routes;