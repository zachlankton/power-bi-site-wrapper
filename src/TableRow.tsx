import * as React from "react";

export default function TableRow({ summaryCols, detailCols, row }) {
    const [showDetails, setShowDetails] = React.useState(false);

    const late = new Date() > new Date(row["DUE"]);
    const lateClass = late ? "summary-row late" : "summary-row";

    return (
        <>
            <tr
                className={lateClass}
                onClick={() => setShowDetails(!showDetails)}
            >
                {summaryCols.map((col) => (
                    <td>{row[col.expr.ref]}</td>
                ))}
            </tr>
            {showDetails && (
                <tr>
                    <td colSpan={summaryCols.length}>
                        <div className="details">
                            <h3>Details</h3>
                            {detailCols.map((col) => (
                                <p>
                                    {col.displayName}: {row[col.expr.ref]}
                                </p>
                            ))}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}
