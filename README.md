# student-service

students-services
Acontinuación se indica la forma de consumir una API REST desarrollada utilizando nodejs, express y mongodb. La aplicación corre localmente utilizando el puerto 3000. 

> localhost:3000/students

Para correr la aplicación

> npm start

# CONSUMO DE LA API

## Crear un registro estudiante

Petición POST a la url localhost:3000/students

Cuerpo de la petición:

```
{
	"dni": "1",
	"firstName": "Jorge",
	"lastName": "Hiler",
	"email": "jorgehiler@udea.edu.co",
	"phoneNumber": 1234445,
	"state": "cursando",
	"nota": "4",
	"semester": "3",
	"state":"normal"
}
``` 

## Consultar un estudiante

Petición GET a la url localhost:3000/students/:dni

## Consultar lista de estudiantes

Petición GET a la url localhost:3000/students

## Modificar todos los registros que cumplan con un criterio

Para actualizar campos de todos los estudiantes que pertenecen a un semestre determinado:

Petición PUT a la url localhost:3000/students/semester/:semester

Cuerpo de la petición:

```
{
	"semester": "6"
}
``` 


Para actualizar campos de todos los estudiantes que tengan una nota determinada:

Petición PUT a la url localhost:3000/students/nota/:nota

Cuerpo de la petición:

```
{
	"state": "becario"
}
``` 
## Obtener el promedio de notas  de todos los estudiantes

Petición GET a la url localhost:3000/students/average
