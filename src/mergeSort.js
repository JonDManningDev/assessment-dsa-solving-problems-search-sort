function mergeSort(students) {
    if (students.length <= 1) return students;

    const middle = Math.floor(students.length / 2);
    const left = students.slice(0, middle);
    const right = students.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].grade > right[rightIndex].grade) {
            results.push(left[leftIndex]);
            leftIndex++;
        } else if (left[leftIndex].grade === right[rightIndex].grade) {
            if (left[leftIndex].name < right[rightIndex].name) {
                results.push(left[leftIndex]);
                leftIndex++;
            } else {
                results.push(right[rightIndex]);
                rightIndex++;
            }
        } else {
            results.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
