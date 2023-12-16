import logo from './logo.svg';
import './App.css';
import Table from './components/TableComp';
import Mock from './mock.json';
import { filterItemsByCategory, sortBy } from './utils';
import DynamicTable from './components/TableComp/DynamicTable';

function App() {
  const { Category: categories, Item:items, ItemData, InputID  } = Mock;

  const sortedCategory = sortBy(categories, 'DisplayOrder');

  return (
    <div className="App">     
      {sortedCategory.map((category) => (
        <div className='marginbtm-20'>
          <div>{category.CategoryName}</div>
          {!category.IsCollection 
            ? <Table data={sortBy(filterItemsByCategory(items, category.CategoryID), 'RowWiseDisplayOrder')} itemData={ItemData} /> 
            : <DynamicTable data={sortBy(filterItemsByCategory(items, category.CategoryID))} itemData={ItemData} />}
          
        </div>
      ))} 
    </div>
  );
}

export default App;
