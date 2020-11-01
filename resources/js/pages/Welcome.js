import React from 'react'
import Layout from '../shared/Layout'

export default function Welcome(props){
    return (
        <Layout title="Welcome">
        <div>
            Hello there {props.name} how are you
        </div>
        </Layout>

    )
}
