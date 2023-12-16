
import _ from 'lodash';

export const sortBy = (data, key) => {
    console.log('sorted By Display order', _.orderBy(data, key, 'asc'))
    return _.orderBy(data, key, 'asc');
}

export const filterItemsByCategory = (data, categoryId) => {
    console.log('Filtered By category', _.filter(data, (item) => item.CategoryID === categoryId))
    return _.orderBy(_.filter(data, (item) => item.CategoryID === categoryId));
}

export const filterItemDataByDropdownId = (data, dropDownID) => {
    console.log('Filtered By itemData', _.orderBy(_.filter(data, (item) => item.DropDownID === dropDownID), 'ColumnWiseDisplayOrder'));
    return _.orderBy(_.filter(data, (item) => item.DropDownID === dropDownID), 'ColumnWiseDisplayOrder');
}

export const formattedData = (data) => {
    const array1 = data.filter((d) => d.IsHeader === 'Y');
    const array2 = data.filter((d) => d.IsHeader === 'N');

    console.log('arra1arra2',array1.map((d) => d.Name), array2.map((d) => d.Name))

    const result = array1.map((d) => d.Name).reduce((acc, key, index) => {
        const value = array2.map((d) => d.Name)[index];
        acc[key] = value;
        return acc;
    }, {});

    console.log('resultresult', result)

    const finalResult = [result];
    console.log('finalResult123', finalResult)
    return finalResult;
    // console.log('finalResult',finalResult);
}
