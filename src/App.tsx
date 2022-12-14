import React, {useEffect} from 'react';
import './App.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {TickerList, TickerPriceSum} from "./recoil/Ticker";
import TickerDisplay from "./components/TickerDisplay";

function App() {
    const setTickerList = useSetRecoilState(TickerList);
    const tickerSum = useRecoilValue(TickerPriceSum)

    useEffect(() => {
        let interval = setInterval(() => {
            setTickerList([{
                id: 'A',
                marginPrice: Math.random() * 100,
            }, {
                id: 'B',
                marginPrice: Math.random() * 100,
            }])
        }, 1000)
        return () => {
            clearInterval(interval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="App">
            <div>
                {['A', 'B'].map(id => <TickerDisplay key={id} id={id}/>)}
            </div>
            <div>
                {tickerSum}
            </div>
        </div>
    );
}

export default App;
