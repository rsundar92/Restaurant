import React, { useEffect, useState } from 'react';
import { formattedData } from '../../utils';
import './Table.css'; 

const DynamicTable = ({ data }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(formattedData(data));
    }, []);

  const renderTableHeader = () => {
    data = data.filter((d) => d.IsHeader === 'Y');
    if (!data.length) return null;
    
    const header = data.map((d) => d.Name)

    return ['', ...header].map((key, index) => <th key={index}>{key.toUpperCase()}</th> );
  };

  const deleteRow = (index) => {
     setTableData(tableData.filter((_, dindex) => index !== dindex)); 
  };

  const renderTableRows = () => {
    return tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{index === 0 ? '' :
                <button onClick={() => deleteRow(index)}>{ 'Delete'}</button>}
          </td>
          {Object.entries(row).map(([key, value], index) => (
              <td key={index}><>{value}</></td>
          ))}
        </tr>
      );
    });
  };

  const addRow  = () => {
      setTableData([...tableData, {...tableData[tableData.length-1]}])
  }

  return (
    <div className="table-container">
        {tableData.length > 0 &&
        <table className="table">
            <thead>
            <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
            <button onClick={() => addRow()}>+Add</button>
        </table>
      }
    </div>
  );
};

export default DynamicTable;
