import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from "recoil";
import RecoilDebugger from "./recoil/Debugger";
import AppJotai from "./AppJotai";
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const WithRecoilRoot = () => {
    return (
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    )
}
const WithJotai = () => {
    return <AppJotai/>
}
const Main = () => {
    return <div>
        <ul>
            <Link to={'/recoil'}>Recoil</Link>
            <Link to={'/jotai'}>Jotai</Link>
        </ul>
        <Outlet/>
    </div>
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>index</div>}/>
                <Route path={'/recoil'} element={<WithRecoilRoot/>}/>
                <Route path={'/jotai'} element={<WithJotai/>}/>
            </Routes>
            <Main/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
