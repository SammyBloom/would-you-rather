import React from 'react'

//Stateless Functional Component is used as we're using only render method
const ErrorPage = () => {
    return(
        <div>
            <div className='page-404' style={{textAlign:'center'}}>
                <p>404</p>
                <h3 style={{fontSize:32,marginBottom:'20px',fontWeight:400}}>4 0 4... I am sorry.</h3>
                <small style={{fontSize:16,fontWeight:200,lineHeight:'30px'}}>
                    Sorry, the page or question you're looking for doesn't exist.
                    <br/>
                    Going back to <a href='/'>Home</a> will be a good idea. And have fun voting more questions ? It's fun :)
                    <br/>
                </small>
            </div>
        </div>
    )
}
export default ErrorPage