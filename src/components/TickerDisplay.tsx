import React from "react";
import {Ticker} from "../recoil/Ticker";
import {useRecoilValue} from "recoil";

const TickerDisplay: React.FC<{ id: string }> = ({id}) => {
    const ticker = useRecoilValue(Ticker(id));
    return <div>
        <h1>{ticker.id}</h1>
        <p>{ticker.marginPrice}</p>
    </div>
}
export default TickerDisplay