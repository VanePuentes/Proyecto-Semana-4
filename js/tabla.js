
function logica() {
    var alumnosmat  =   [
                        {   
                            "rut" : "'1-9",
                            "nombre" : "Pedro",
                            "apellido" : "Pérez",
                            "cod_curso" : ["AE600"],
                            "descripcion" : ["Algoritmos y Estructura de datos"]
                        },
                        {   
                            "rut" : "'2-7",
                            "nombre" : "Juan",
                            "apellido" : "Jara",
                            "cod_curso" : [
                                "BD253",
                                "AE600"
                            ],
                            "descripcion" : [
                                "Bases de datos",
                                "Algoritmos y Estructura de datos"
                            ]
                        },
                        {   "rut" : "3-5",
                            "nombre" : "Diego",
                            "apellido" : "Díaz",
                            "cod_curso" : ["BD253"],
                            "descripcion" : ["Bases de datos"]
                        },
                        {
                            "rut" : "'4-4",
                            "nombre" : "María",
                            "apellido" : "Martínez",
                            "cod_curso" : ["BD253"],
                            "descripcion" : ["Bases de datos"]
                        },
     ]
     
    
     for (let i = 0; i < alumnosmatriculados.length; i++) {
        console.log(alumnosmatriculados[i])
    }
    for (let i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i])
    }
    for (let i = 0; i < curso.length; i++) {
    console.log(curso[i])
    }
    for (let i = 0; i < matricula.length; i++) {
        console.log(matricula[i])
    }

}