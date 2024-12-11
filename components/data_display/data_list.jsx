import React from "react";

/**
 * DataList component renders a table with provided headers and data.
 *
 * @param {Object} props - The component props.
 * @param {Array<string>} props.headers - An array of strings representing the table headers.
 * @param {Array<Object>} props.data - An array of data objects to be displayed in the table.
 * @param {Function} props.renderRow - A function that takes a data item and its index, and returns a JSX element representing a table row.
 *
 * @returns {JSX.Element} The rendered table component.
 */
const DataList = ({ headers, data, renderRow }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 text-left text-sm font-medium text-secondary"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr
                                key={index}
                                className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } text-accent`}
                            >
                                {renderRow(item, index)}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={headers.length}
                                className="px-4 py-2 text-center text-accent"
                            >
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataList;
