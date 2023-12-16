
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
    const array1 = data.filter((d) => d.IsHeader === 'Y');
    const array2 = data.filter((d) => d.IsHeader === 'N');

    const result = array1.map((d) => d.Name).reduce((acc, key, index) => {
        const value = array2.map((d) => d.Name)[index];
        acc[key] = value;
        return acc;
    }, {});

    const finalResult = [result];
    return finalResult;
}
