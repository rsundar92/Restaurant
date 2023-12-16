
import _ from 'lodash';

export const sortBy = (data, key) => {
    return _.orderBy(data, key, 'asc');
}

export const filterItemsByCategory = (data, categoryId) => {
    return _.orderBy(_.filter(data, (item) => item.CategoryID === categoryId));
}

export const filterItemDataByDropdownId = (data, dropDownID) => {
    return _.orderBy(_.filter(data, (item) => item.DropDownID === dropDownID), 'ColumnWiseDisplayOrder');
}

export const formattedData = (data) => {
   const partitionedArr =  _.partition(data, (o) => o.IsHeader === 'Y');
   
    const result = partitionedArr[0].map((d) => d.Name).reduce((acc, key, index) => {
        const value = partitionedArr[1].map((d) => d.Name)[index];
        acc[key] = value;
        return acc;
    }, {});

    return [result];
}
