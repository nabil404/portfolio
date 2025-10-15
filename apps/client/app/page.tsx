"use client"

import {useEffect, useState} from "react";

export default function Home() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log("Event Data: ",event.data);

            if (event.origin !== "http://localhost:5173") return;
            setToken(event.data)
            event.source?.postMessage({ type: "TOKEN_RECEIVED", ok: true }, { targetOrigin:event.origin } );
            // const { type, token } = event.data;
            // if (type === "AUTH_TOKEN" && token) {
            //     console.log("Iframe received token:", token);
            //     setToken(token);
            //     event.source?.postMessage({ type: "TOKEN_RECEIVED", ok: true }, { targetOrigin:event.origin } );
            // }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    const fetchProtectedData = async () => {
        if (!token) return alert("No token yet!");
        console.log("Protected data:", token);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Iframe App</h2>
            {token ? (
                <div>
                    <p>✅ Token received from parent {token}</p>
                    <button onClick={fetchProtectedData}>Fetch Protected Data</button>
                </div>
            ) : (
                <p>Waiting for token...!!</p>
            )}
        </div>
    )
}
