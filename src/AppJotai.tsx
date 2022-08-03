import React, {useEffect} from 'react';
import './App.css';
import {TickerList, TickerPriceSum} from "./recoil/TickerJotai";
import TickerDisplay from "./components/TickerDisplayJotai";
import {useAtom, useAtomValue} from "jotai";

function App() {
    const [, setTickerList] = useAtom(TickerList);
    const tickerSum = useAtomValue(TickerPriceSum)
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
