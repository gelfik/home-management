import React from "react";
import { RequestsServiceConsumer } from "../context/requests-service-context";

const withRequestsService = () => (Wrapped) => {
    return (props) => {
        return (
            <RequestsServiceConsumer>
                {
                    (requestsService) => {
                        return (<Wrapped {...props} requestsService={requestsService}/>)
                    }
                }
            </RequestsServiceConsumer>
        )
    }
}

export default withRequestsService;