import React from 'react';
import styled from 'styled-components';

// Sizing information from Adidas: https://www.adidas.co.uk/help/size_charts

const SizeGuideStyle = styled.div`
.table {
    margin: auto;
    border-spacing: 0;
    border-collapse: collapse;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 2em;
}

.table-header {
    background-color: darkred;
    color: white;
}

.table tbody tr:nth-of-type(even) {
    background-color: lightgray;
  }

th, td {
    padding: 1em;
}

td:nth-child(1) {
    background-color: darkred;
    color: white;
}

ol {
    margin: 0 5%;
    list-style-position: inside;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: lightgray;
    padding-left: 0;
}
li {
    flex: 0 1 25%;
    padding: 1em;
}
li span {
    font-weight: normal;
}

h3 {
    padding-top: 1em;
}

@media (max-width: 1024px) {
    li {
        flex: 0 1 100%;
    }
}
`;

const Help = () => {
    return(
        <>
            <SizeGuideStyle>
                <h3>SIZE GUIDE</h3>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Heel-toe</th>
                            <th>24.2 cm</th>
                            <th>25.0 cm</th>
                            <th>25.9 cm</th>
                            <th>26.7 cm</th>
                            <th>27.6 cm</th>
                            <th>28.4 cm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>UK</strong></td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td><strong>EU</strong></td>
                            <td>39 1/3</td>
                            <td>40 2/3</td>
                            <td>42</td>
                            <td>43 1/3</td>
                            <td>44 2/3</td>
                            <td>46</td>
                        </tr>
                    </tbody>
                </table>

                <div id="between-sizes">
                    <h3><em>In between sizes?</em></h3>
                    <p>For a tight fit - go one size down.</p>
                    <p>For a loose fit - go one size up.</p>
                </div>

                <div id="how-to-measure">
                    <h3><em>How to measure</em></h3>
                    <ol>
                        <li>
                            <span>Step on а piece of paper with your heel slightly touching a wall behind.</span>
                        </li>
                        <li>
                            <span>Мark the end of your longest toe on the paper (you might need a friend to help you) and measure from the wall to the marking.</span>
                        </li>
                        <li>
                            <span>Do the same for the other foot and compare measurements with our size chart to get the right size.</span>
                        </li>
                    </ol>
                </div>

                <div id="returns">
                    <h3><em>Not the right size or colour?</em></h3>
                    <p>No problem, we offer free size exchanges for 60 days and we have free return service.</p>
                </div>
            </SizeGuideStyle>
        </>
    )
}

export default Help;