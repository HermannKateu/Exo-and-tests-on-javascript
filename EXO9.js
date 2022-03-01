const filteredArray = (array,...precisedValues) => {
    return array.filter(elementOfArray => precisedValues.every(element => element !== elementOfArray));
}