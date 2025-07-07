const path = require("path");

const mergeSort = require(path.resolve(
  `${process.env.SOLUTION_PATH || ""}`,
  "src/mergeSort"
));

describe('Student Sorting', () => {

  test('handles an empty array', () => {
        const students = [];
        const sortedStudents = mergeSort(students);
        expect(sortedStudents).toEqual([]);
    });

    test('sorts array of students by grade in descending order', () => {
        const students = [
            { name: "Alice", grade: 90 },
            { name: "Bob", grade: 85 },
            { name: "Charlie", grade: 95 }
        ];
        const sortedStudents = mergeSort(students);
        expect(sortedStudents).toEqual([
            { name: "Charlie", grade: 95 },
            { name: "Alice", grade: 90 },
            { name: "Bob", grade: 85 }
        ]);
    });

    test('sorts students with the same grade alphabetically by name', () => {
        const students = [
            { name: "Charlie", grade: 90 },
            { name: "Bob", grade: 90 },
            { name: "Alice", grade: 90 }
        ];
        const sortedStudents = mergeSort(students);
        expect(sortedStudents).toEqual([
            { name: "Alice", grade: 90 },
            { name: "Bob", grade: 90 },
            { name: "Charlie", grade: 90 }
        ]);
    });

    test('correctly sorts a large mixed array', () => {
        const students = [
            { name: "Charlie", grade: 85 },
            { name: "Alice", grade: 95 },
            { name: "Eve", grade: 85 },
            { name: "Dave", grade: 90 },
            { name: "Bob", grade: 95 },
            { name: "Frank", grade: 85 }
        ];
        const sortedStudents = mergeSort(students);
        expect(sortedStudents).toEqual([
            { name: "Alice", grade: 95 },
            { name: "Bob", grade: 95 },
            { name: "Dave", grade: 90 },
            { name: "Charlie", grade: 85 },
            { name: "Eve", grade: 85 },
            { name: "Frank", grade: 85 }
        ]);
    });
});
