import React from 'react'
import Layout from '../../shared/Layout'

const Details = ({event}) => {
    console.log(event)
    return (
        <Layout title={event.title}>
            {JSON.stringify(event,null,2)}
        </Layout>
    )
}

export default Details
