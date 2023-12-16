import React from 'react';
import { filterItemDataByDropdownId } from '../../utils';
import './Table.css'; 

const Table = ({ data, itemData }) => {

  const renderTableHeader = () => {
    if (!data.length) return null;

    const header = Object.keys(data[0]);

    return header.map((key, index) => { key === 'Name' ||  key==='InputID' && <th key={index}>{key.toUpperCase()}</th>} );
  };

  const renderTableRows = () => {
    return data.map((row, index) => {

      return (
        <tr key={index}>
          {Object.entries(row).map(([key, value]) => (
            <>
              <td key={key}>
                 {key === 'Name' && <>{value}</>}
                 {key === 'InputID' && value === 1 && <input value={row['Value']} />}
                 {key === 'InputID' && value === 2 && <input type="number" value={row['Value']} />}
                 {key === 'InputID' && value === 7 && <label>{row['Value']}</label>}
                 {key === 'InputID' && value === 3 && (
                  <select>
                    {filterItemDataByDropdownId(itemData, row['DropDownID']).map((item, index) => (
                      <option value={item.DropDownValueID}>{item.ListItemName}</option>
                    ))}
                  </select>
              )}
              </td>
            </>
          ))}
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
