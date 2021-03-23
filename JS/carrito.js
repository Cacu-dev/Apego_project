// ***** TRABAJO A REALIZAR *****
// 1- CREAR UN CARRITO (ARRAY)
// 2- Funcion que se ejecute cuando haces click en agregar al carrito

//CREAR CARRITO
let miCarrito = [];

/**Local Storage que tiene los productos seleccionados para que cuando se cierre/actualice la pagina,
esten en el carrito*/
let verStorage = localStorage.getItem("carritoCompras");

let jsonCarrito = JSON.parse(verStorage);

if (jsonCarrito) {
    miCarrito = jsonCarrito;
    for (i = 0; i < jsonCarrito.length; i++) {
        $("#contenedorModal").append(
            `<div class="border style"><img src=${jsonCarrito[i].imgSrc} alt="Logotipo de Apego2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>$9999</span><button id=${jsonCarrito[i].id} type="submit" class="btn btn-light botoncito eliminar-producto">Eliminar</button></div>`
        );
    }
    var idThis = "";
    $(".eliminar-producto").click(function() {
        idThis = $(this).attr("id");
        $(this).parent().fadeOut(2000);

        miCarrito = miCarrito.filter(function(producto) {
            return producto.id != idThis;
        });
        let comprasStorage = JSON.stringify(miCarrito);
        localStorage.setItem("carritoCompras", comprasStorage);
    });

}

// FUNCTION QUE SE EJECUTA CUANDO HACES CLICK PARA OBTENER OBJETO Y AGREGARLO AL CARRITO.
$.ajax({
    url: "/json/miArchivo.json",
    dataType: "json",
    success: function(data) {
        arrayMuniecos = data;
        for (i = 0; i < arrayMuniecos.length; i++) {
            $("#contenedorJS").append(`<div class="border style"><img src=${arrayMuniecos[i].imgSrc} alt="Logotipo de Apego2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>$9999</span><button id=${arrayMuniecos[i].id} type="submit" class="btn btn-light botoncito agregar-carrito">Comprar</button></div>`);

        }
        $(".agregar-carrito").html("Añadir al carrito");

        let ID = "";

        //AGREGAR PRODUCTOS AL CARRITO

        $(".agregar-carrito").click(function() {
            let ID = $(this).attr("id");
            for (let i = 0; i < arrayMuniecos.length; i++) {
                if (arrayMuniecos[i].id == ID) {
                    $("#contenedorModal").append(
                        `<div class="border style"><img src=${arrayMuniecos[i].imgSrc} alt="Logotipo de Apego2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>$9999</span><button id=${arrayMuniecos[i].id} type="submit" class="btn btn-light botoncito eliminar-producto">Eliminar</button></div>`
                    );
                    miCarrito.push(arrayMuniecos[i]);
                    let comprasStorage = JSON.stringify(miCarrito);
                    localStorage.setItem("carritoCompras", comprasStorage);
                }
            }

            //ELIMINAR PRODUCTOS DEL CARRITO

            var idThis = "";
            $(".eliminar-producto").click(function() {
                idThis = $(this).attr("id");
                console.log($(this)); //$(".eliminar-producto").click() le agrega el onclick a todos los botones, y con $(this) agarras al que le hiciste click, $(this).parent().remove()
                $(this).parent().fadeOut(2000);

                miCarrito = miCarrito.filter(function(producto) {
                    return producto.id != idThis;
                });
                let comprasStorage = JSON.stringify(miCarrito);
                localStorage.setItem("carritoCompras", comprasStorage);

                console.log(miCarrito.length);
            });
        });
    }

});

//VACIAR CARRITO

$("#vaciarCarrito").click(function() {
    $("#contenedorModal div").remove();
    localStorage.clear()
    console.log(miCarrito.length);
});