import React from 'react'
import Layout from '../../shared/Layout'
import Eventslisting from "../../components/Eventslisting"

const MyEventsIndex = ({events}) => {
    console.log(events)
    const paginationData = {
        firstPageUrl: events.first_page_url,
        lastPageUrl: events.last_page_url,
        lastPageNum: events.last_page,
        prevPageUrl: events.prev_page_url,
        nextPageUrl: events.next_page_url,
        baseUrl: events.path,
        activePage: events.current_page,
        totalRecord: events.total,
        recordPerPage: events.per_page,
        lastPage: events.last_page
    };
    return (
        <Layout title="My Events">
            
        </Layout>
    )
}

export default MyEventsIndex
