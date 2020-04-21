(function () {
    'use strict';

    module.exports = {
        createStudent: createStudent,
        fetchStudents: fetchStudents,
        fetchStudentById: fetchStudentById,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent,
        updateStudents: updateStudents,
        updateSemester: updateSemester
    };

    var StudentModel = require('./student.module')().StudentModel;

    function createStudent(student) {
        return StudentModel.create(student);
    }

    function fetchStudents() {
        return StudentModel.find({})
            .exec();
    }

    function fetchStudentById(studentId) {
        return StudentModel.find({"dni": studentId})
            .exec();
    }

    function updateStudent(studentId, student) {
        return StudentModel
            .findByIdAndUpdate(studentId, student, { new: true })
            .exec();
    }

    function deleteStudent(studentId) {
        return StudentModel
            .findByIdAndRemove(studentId)
            .exec();
    }

    function updateStudents(nota, studentState) {
        return StudentModel
            .updateMany({ "nota": nota }, studentState)
            .exec();
    }

    function updateSemester(semester, studentState) {
        return StudentModel
            .updateMany({ "semester": semester }, studentState)
            .exec();
    }



})();