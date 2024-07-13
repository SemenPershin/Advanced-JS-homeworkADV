

export function orderByProps (obj, props) {
    let keyArr = Object.keys(obj);
    let sortArr = [];

    keyArr.sort();

    for (const element of keyArr) {
        if (!props.includes(element)) {
            props.push(element)
        }
    }

    for (const element of props) {
        sortArr.push({key: element, value: obj[element]})
    }

    return sortArr;
}
