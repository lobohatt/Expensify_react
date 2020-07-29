// Higher Order Component (HOC) - A component (HOC) that renders another component 
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
 <div>
  <h1>Info</h1>
  <p>The info is: {props.info}</p>
 </div>
); 

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    <p>This is private info. Please don't share!</p>
      {props.isAdmin && <p>React Js OP!</p>}
    <p>{props.a}</p>
    <WrappedComponent {...props} />
    </div>
  )

};



const AdminInfo =  withAdminWarning(Info);

 
ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" a="hello" />,document.getElementById('app'));


/*const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>Challenge</p>
      {props.isAuthenticated ?
        (< WrappedComponent {...props} />) : (
          <p>Please login to view the Info </p>
        )}

    </div>
  )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" a="hello" />, document.getElementById('app'));*/