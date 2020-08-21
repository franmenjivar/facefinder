import React from 'react';



const Navigation = ({onRouteChange, isSignedIn}) =>{
    
        if(isSignedIn){
             console.log(isSignedIn)
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=> onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign Out</p>
                </nav>
            );
        } else{
            console.log(isSignedIn)
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=> onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign In</p>
                <p onClick={()=> onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p>
                </nav>
                
                
            );
    }
}
    


export default Navigation;