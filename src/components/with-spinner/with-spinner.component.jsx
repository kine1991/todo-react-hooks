import React from 'react'
import Spinner from '../spinner/spinner.component'

// const WithSpinner = () => <Spinner/>

const WithSpinner = (WrappedComponent) => ({loading, ...props}) => {
    console.log(loading, props)
    return (
        loading ? <Spinner/> : <WrappedComponent {...props}/>
    )
}

export default WithSpinner
