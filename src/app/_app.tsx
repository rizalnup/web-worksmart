"use client";

import { useEffect } from "react"

export default function App() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, [])

    return (<></>)
}
