import { useState, useEffect } from "react"

const withSplashScreen = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true)        

        const loadingStyle = {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            textAlign: 'center'
        }

        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 1500)
        }, []) // only run once

        return (

            <>
                {isLoading && <div style={{ ...loadingStyle }}><h4 style={{margin: '0 auto'}}>loading...</h4></div>}

                {!isLoading && <WrappedComponent {...props}/>} 
            </>

        )

    }








}

export default withSplashScreen