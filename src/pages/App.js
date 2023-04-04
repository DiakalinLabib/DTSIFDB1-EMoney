import React, { useState } from "react";
import "./App.css";
import { prepareMoneyFrom, prepareMoneyTo } from "../utils/helpers";

const App = () => {
    const [from, setFrom] = useState('idr');
    const filteredFrom = prepareMoneyFrom();
    const filteredTo = prepareMoneyTo(from);

    return (
        <>
            <main>
                <form>
                    <label htmlFor="from">From</label>
                    <select className="input" name="from" id="from" onChange={e => setFrom(e.target.value)}>
                        {filteredFrom.map(e =>
                            <option
                                value={e.from}
                                selected={e.from == from ? true : false}
                            >
                                {e.from.toUpperCase()}
                            </option>
                        )}
                    </select>

                    <br />

                    <label htmlFor="to">To</label>
                    <select className="input" name="to" id="to">
                        {filteredTo.map(e =>
                            <option value={e.to}>
                                {e.to.toUpperCase()}
                            </option>
                        )}
                    </select>

                    <br />

                    <label htmlFor="amount">Amount</label>
                    <input className="input" type="number" name="amount" id="amount" />

                    <br />

                    <button id="info">Info</button>
                    <button type="reset">Clear</button>
                    <button id="swap">Swap</button>
                    <button id="convert">Convert</button>
                </form>
            </main>
            <div className="result-display">
                <p id="result">{from}</p>
            </div>
        </>
    );
};

export default App;