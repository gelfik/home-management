import React from "react";

const {
    Provider: RequestsServiceProvider,
    Consumer: RequestsServiceConsumer
} = React.createContext();

export {RequestsServiceProvider, RequestsServiceConsumer}