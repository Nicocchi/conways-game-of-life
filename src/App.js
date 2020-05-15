import React, { useState, Fragment, useCallback, useRef } from "react";
import "./App.css";
import produce from "immer";

const numRows = 70;
const numCols = 70;

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
};

const randomGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(
            Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
        );
    }

    return rows;
};

// const simulate = (g) => {
//     let gridCopy = g.map((k) => k);
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             let neighbors = 0;
//             operations.forEach(([x, y]) => {
//                 const newI = i + x;
//                 const newJ = j + y;
//                 if (
//                     newI >= 0 &&
//                     newI < numRows &&
//                     newJ >= 0 &&
//                     newJ < numCols
//                 ) {
//                     neighbors += g[newI][newJ];
//                 }
//             });

//             if (neighbors < 2 || neighbors > 3) {
//                 gridCopy[i][j] = 0;
//             } else if (g[i][j] === 0 && neighbors === 3) {
//                 gridCopy[i][j] = 1;
//             }
//         }
//     }

//     return gridCopy;
// }

function App() {
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid();
    });

    const [running, setRunning] = useState(false);

    const [gridDisplay, showGrid] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        // Simulate
        // setGrid((g) => simulate(g));
        setGrid((g) => {
            return produce(g, (gridCopy) => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if (
                                newI >= 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols
                            ) {
                                neighbors += g[newI][newJ];
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        } else if (g[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            });
        });

        setTimeout(runSimulation, 100);
    }, []);

    return (
        <Fragment>
            <div className="header">
                <button
                    className="button"
                    onClick={() => {
                        setRunning(!running);
                        if (!running) {
                            runningRef.current = true;
                            runSimulation();
                        }
                    }}
                >
                    {running ? "stop" : "start"}
                </button>
                <button
                    className="button"
                    onClick={() => {
                        setRunning(false);
                        setGrid(generateEmptyGrid());
                    }}
                >
                    Clear
                </button>
                <button
                    className="button"
                    onClick={() => {
                        setGrid(randomGrid());
                    }}
                >
                    Random
                </button>
                <button
                    className="button"
                    onClick={() => {
                        showGrid(!gridDisplay)
                    }}
                >
                    Toggle Grid
                </button>
            </div>

            <div className="game-area">
                <div
                    className="flex-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${numCols}, 10px)`,
                    }}
                >
                    {grid.map((rows, i) =>
                        rows.map((col, j) => (
                            <div
                                className="col"
                                key={`${i}-${j}`}
                                onClick={() => {
                                    const newGrid = produce(
                                        grid,
                                        (gridCopy) => {
                                            gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                        }
                                    );
                                    setGrid(newGrid);
                                }}
                                style={{
                                    backgroundColor: grid[i][j]
                                        ? "#408697"
                                        : undefined,
                                    border: gridDisplay ? '1px solid #8D8C8A' : 'none'
                                }}
                            />
                        ))
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default App;
