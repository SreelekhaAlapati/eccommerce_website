import React from "react";
import showResults from "./showResults";
import RequestForServices from "./RequestForServices";

export default function FinalRedux (){
    return(
       <>
        <RequestForServices onSubmit={showResults} />
       </>
    )
}
