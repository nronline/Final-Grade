const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (grade1 + grade2 + grade3) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Testing Grades
console.log(finalGrade(10, 10, 10)); // Should print 'F'
console.log(finalGrade(70, 70, 50)); // Should print 'D'
console.log(finalGrade(79, 79, 79)); // Should print 'C'
console.log(finalGrade(89, 89, 89)); // Should print 'B'
console.log(finalGrade(99, 92, 95)); // Should print 'A'
