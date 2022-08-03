import React from "react";
import {Ticker} from "../recoil/TickerJotai";
import {useAtomValue} from "jotai";

const TickerDisplay: React.FC<{ id: string }> = ({id}) => {
    const ticker = useAtomValue(Ticker(id));
    return <div>
        <h1>{ticker.id}</h1>
        <p>{ticker.marginPrice}</p>
    </div>
}
export default TickerDisplay