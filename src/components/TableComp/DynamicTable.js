import React, { useEffect, useState } from 'react';
import { formattedData } from '../../utils';
import './Table.css'; 

const DynamicTable = ({ data, itemData }) => {

    // data = data.map((d) => [{...d, action: ''}])
    
    //-------------------------------------------------------------------------------
    const array1 = data.filter((d) => d.IsHeader === 'Y');
    const array2 = data.filter((d) => d.IsHeader === 'N');

    console.log('arra1arra2',array1.map((d) => d.Name), array2.map((d) => d.Name))

    const result = array1.map((d) => d.Name).reduce((acc, key, index) => {
        const value = array2.map((d) => d.Name)[index];
        acc[key] = value;
        // acc['delete'] = '';
        return acc;
    }, {});

    const finalResult = [result];
    console.log('finalResult',finalResult);
    //--------------------------------------------------------------------------------

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(finalResult);
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
            <>
              <td key={key}><>{value}</></td>
            </>
          ))}
        </tr>
      );
    });
  };

  const addRow  = () => {
      console.log('Last data',tableData[tableData.length-1]);
      console.log('adding row');

      setTableData([...tableData, {...tableData[tableData.length-1]}])
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
        <button onClick={() => addRow()}>+Add</button>
      </table>
    </div>
  );
};

export default DynamicTable;
