(function () {
    'use strict';

    module.exports = {
        addStudent: addStudent,
        getStudents: getStudents,
        getStudentById: getStudentById,
        modifyStudent: modifyStudent,
        removeStudent: removeStudent,
        updateStudents: updateStudents,
        fetchAverage: fetchAverage,
        updateSemester: updateSemester
    };

    var StudentService = require('./student.module')().StudentService;

    function addStudent(req, res, next) {

        StudentService.createStudent(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getStudents(req, res, next) {

        StudentService.fetchStudents()
            .then(success)
            .catch(failure);

        function success(data) {
            data = data.map((data) => {return {dni: data.dni, firstName: data.firstName, email: data.email, phoneNumber: data.phoneNumber, state: data.state, nota: data.nota, semester: data.semester}});
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getStudentById(req, res, next) {

        StudentService.fetchStudentById(req.params.studentId)
            .then(success)
            .catch(failure);

        function success(data) {
            data = data[0];
            req.response = [{dni: data.dni, firstName: data.firstName, email: data.email, phoneNumber: data.phoneNumber, state: data.state, nota: data.nota, semester: data.semester}];
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyStudent(req, res, next) {
        StudentService.updateStudent(req.params.studentId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeStudent(req, res, next) {

        StudentService.deleteStudent(req.params.studentId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

    function updateStudents(req, res, next) {

        StudentService.updateStudents(req.params.nota, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }


    function updateSemester(req, res, next) {

        StudentService.updateSemester(req.params.semester, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }


      
    
    var StudentModel = require('./student.module')().StudentModel;

    function fetchAverage(req, res, next) {
        StudentModel.countDocuments({})
            .then(count => {
                req.response = count
                StudentModel.find({})
                    .then(data => {
                        let suma = 0
                        data.map((std)=>{
                            suma = std.nota + suma;
                        })
                        let average = suma/count;
                        req.response = [{average: average}]
                        next();

                    })
                    .catch(err => {
                        next(err);                       
                    });
            })
            .catch((err) => {
                next(err);
            });
    }

})();
