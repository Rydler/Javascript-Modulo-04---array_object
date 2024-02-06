const propiedades_venta = [ 
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: 'Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false 
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true 
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true 
    },
    {
        nombre: 'Casa espectacular en la zona costera',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Esta casa ofrece vista exclusiva al mar, restorant cercanos y mucha vegetacion nativa',
        ubicacion: 'Hacienda Loma Verde, Parcela 329, Algarrobo',
        habitaciones: 4,
        costo: 10000,
        smoke: false,
        pets: true 
    }
]


const propiedades_alquiler = [ {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true 
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true 
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false 
    }
]

const paginaOrigen = document.referrer;
const ultimosCaracteres = paginaOrigen.slice(paginaOrigen.length - 10); // Obtiene los últimos 3 caracteres
console.log(ultimosCaracteres); // Imprime "ndo"


if (document.querySelector("#venta") != null){

    // Selecciona la seccion donde introduciremos el objeto 
    var matches_venta = document.querySelector("#venta");
    var html = ""
    var smoke = ""
    var pets = ""
    
   if (paginaOrigen)

    for(let i=0; i < propiedades_venta.length; i++){

        if(propiedades_venta[i].smoke == true){
            smoke = `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`
        } else {
            smoke = `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
        }

        if(propiedades_venta[i].pets == true){
            pets = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
        } else {
            pets = `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
        }

        html += `<div class="col-md-4 mb-4">
                    <div class="card">
                        <img src=${propiedades_venta[i].src}
                        class="card-img-top"
                        alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${propiedades_venta[i].nombre}</h5>
                            <p class="card-text">${propiedades_venta[i].descripcion}</p>
                            <p><i class="fas fa-map-marker-alt"></i>${propiedades_venta[i].ubicacion}</p>
                            <p>
                                <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones}
                                <i class="fas fa-bath"></i> 4 Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i>${propiedades_venta[i].costo}</p>
                            ${smoke}
                            ${pets}
                            
                        </div>
                    </div>
                </div>`
    }

    matches_venta.innerHTML = `<h2>Propiedades en venta</h2>
                                <div class="row">${html}</div>
                                <a href="propiedades_venta.html" class="btn btn-dark">Ver todas las propiedades en venta</a>`

}

if(document.querySelector("#alquiler") != null){

    // Selecciona la seccion donde introduciremos el objeto 
    var matches_alquiler = document.querySelector("#alquiler");
    var html = ""
    var smoke = ""
    var pets = ""

    for(let i=0; i < propiedades_alquiler.length; i++){

        if(propiedades_alquiler[i].smoke == true){
            smoke = `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`
        } else {
            smoke = `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
        }

        if(propiedades_alquiler[i].pets == true){
            pets = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
        } else {
            pets = `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
        }

        html += `<div class="col-md-4 mb-4">
                    <div class="card">
                        <img src=${propiedades_alquiler[i].src}
                        class="card-img-top"
                        alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${propiedades_alquiler[i].nombre}</h5>
                            <p class="card-text">${propiedades_alquiler[i].descripcion}</p>
                            <p><i class="fas fa-map-marker-alt"></i>${propiedades_alquiler[i].ubicacion}</p>
                            <p>
                                <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones}
                                <i class="fas fa-bath"></i> 4 Baños
                            </p>
                            <p><i class="fas fa-dollar-sign"></i>${propiedades_alquiler[i].costo}</p>
                            ${smoke}
                            ${pets}
                        </div>
                    </div>
                </div>`
    }

    matches_alquiler.innerHTML = `<h2>Propiedades en alquiler</h2>
                                <div class="row">${html}</div>
                                <a href="propiedades_alquiler.html" class="btn btn-dark">Ver todas las propiedades en alquiler</a>`

}


