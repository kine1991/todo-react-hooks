import React from 'react'
import Spinner from '../spinner/spinner.component'

const WithSpinner = (WrappedComponent) => ({loading, ...props}) => {
    return (
        loading ? <Spinner/> : <WrappedComponent {...props}/>
    )
}

export default WithSpinner
