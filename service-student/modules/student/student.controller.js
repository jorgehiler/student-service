(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var StudentMiddleware = require('./student.module')().StudentMiddleware;


    router.get('/average',
        StudentMiddleware.fetchAverage,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.post('/',
        StudentMiddleware.addStudent,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        StudentMiddleware.getStudents,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:studentId',
        StudentMiddleware.getStudentById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:studentId',
        StudentMiddleware.modifyStudent,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:studentId',
        StudentMiddleware.removeStudent,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/nota/:nota',
        StudentMiddleware.updateStudents,
        function (req, res) {
            res.status(200).json(req.response)
        }
    );

    router.put('/semester/:semester',
        StudentMiddleware.updateSemester,
        function (req, res) {
            res.status(200).json(req.response)
        }
    );





    module.exports = router;

})();