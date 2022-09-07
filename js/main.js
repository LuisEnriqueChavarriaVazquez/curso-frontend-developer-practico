const correoText = document.querySelector('#correoText');
const iconMobileMenu = document.querySelector('#iconMobileMenu');
const iconCarritoCompras = document.querySelector('#iconCarrito');
const desktop_menu = document.querySelector('#desktop_menu');
const mobile_menu = document.querySelector('#mobile_menu');
const carritoCompras = document.querySelector('#carritoCompras');

let screenWidth = screen.width;
let menuMobileAttribute = mobile_menu.getAttribute('class', 'inactive');
let carritoMobileAttribute = carritoCompras.getAttribute('class', 'inactive');


correoText.addEventListener('click', mostrarMenuDesktop);
iconMobileMenu.addEventListener('click', mostrarMenuMobile);
iconCarritoCompras.addEventListener('click', mostrarCarritoCompras);

function mostrarMenuDesktop() {
    desktop_menu.classList.toggle('inactive');
}

function mostrarMenuMobile() {
    mobile_menu.classList.toggle('inactive');
    if ((screen.width <= 640) && (menuMobileAttribute.indexOf('inactive') != -1)) {
        carritoCompras.classList.add('inactive');
    }
}

function mostrarCarritoCompras() {
    carritoCompras.classList.toggle('inactive');
    if ((screen.width <= 640) && (carritoMobileAttribute.indexOf('inactive') != -1)) {
        mobile_menu.classList.add('inactive');
    }
}

//Codigo para agregar el contenido de la tienda con los array
/*

    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>

*/

//Arrays para los datos (base de datos)
const precios = [500, 1000, 400, 1500];
const productos = ['Bike', 'Hoverboard', 'Skateboard', 'Llanta'];
const desc = ['desc1 ddsnjkdsjdsjn', 'desc2 ddsnjkdsjdsjn', 'desc3 ddsnjkdsjdsjn', 'desc4 ddsnjkdsjdsjn'];
const imagenes = ['https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOBRfnptnLllaX1k4rj-6C5OHaDR_QmDP7DDn-Al160YxLjeGppqghUFy9HN5d5fdIa0&usqp=CAU',
    'https://www.fundeu.es/wp-content/uploads/2021/02/skate.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWP2QvR8-WaCLslJq4fSv5fPhuz6Di5cQrIC4cer2JKFn20FF2Sevj6x2ruqZtMRQt8yQ&usqp=CAU'];
const alt = ['imagen 1', 'imagen 2', 'imagen 3'];
//Caja padre 
let contenedorCajasProductos = document.querySelector('.cards-container');

//Elementos
let productCard, imagenCard, productInfo, divInfo, pPrice, pProduct, figureCard, imgIconCard;

function iniciarlizarElementos() {
    for (var i = 0; i < productos.length; i++) {
        //Asignar valores
        productCard = document.createElement('div');
        imagenCard = document.createElement('img');
        productInfo = document.createElement('div');
        divInfo = document.createElement('div');
        pPrice = document.createElement('p');
        pProduct = document.createElement('p');
        figureCard = document.createElement('figure');
        imgIconCard = document.createElement('img');

        //Proceso de inserción
        contenedorCajasProductos.appendChild(productCard);
        productCard.appendChild(imagenCard);
        productCard.appendChild(productInfo);
        productInfo.appendChild(divInfo);
        productInfo.appendChild(figureCard);
        divInfo.appendChild(pPrice);
        divInfo.appendChild(pProduct);
        figureCard.appendChild(imgIconCard);

        //Asignación de atributos
        productCard.classList.add('product-card');
        contenedorCajasProductos.classList.add('indexBajo_2');
        productInfo.classList.add('product-info');
        imagenCard.setAttribute('src',imagenes[i]);
        imagenCard.setAttribute('alt',alt[i]);
        imagenCard.setAttribute('class','imagenDeLaCardProducto');
        //Agrega contador de elementos
        let imagenCardClass = document.querySelectorAll('.imagenDeLaCardProducto');
        for(var k = 0; k < imagenCardClass.length; k++){
            imagenCardClass[k].classList.add(k);
        }
        //Continua la asignación
        imgIconCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        pPrice.innerText = '$' + precios[i];
        pProduct.innerText = productos[i];
    }

}

iniciarlizarElementos();

//Click de los detalles del producto
/* 
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike">
    <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.
        </p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>
*/

const imagenDeLaCardProducto = document.querySelectorAll('.imagenDeLaCardProducto');
const detallesCajaPadre = document.querySelector('#detallesCajaPadre');

let descPrice, descName, descDescription, descPicture;
descPrice = document.querySelector('#descPrice');
descName = document.querySelector('#descName');
descDescription = document.querySelector('#descDescription');
descPicture = document.querySelector('#descPicture');

if(detallesCajaPadre.classList.contains('inactive')){
    let j = 0;
    imagenDeLaCardProducto.forEach(imagenCard => {
        imagenCard.addEventListener('click', mostrarDetallesProducto);
        numeroDeImagenCard = imagenCard.getAttribute('class', j);
       
        descPrice.innerText = precios[j];
        descName.innerText = productos[j];
        descDescription.innerText = desc[j];
        descPicture.setAttribute('src', imagenes[j]);
        //Modificación de los texto
        j++;
    });
}


function mostrarDetallesProducto(){
    detallesCajaPadre.classList.toggle('inactive');
    //Bandera de activo
    detallesCajaPadre.classList.toggle('holdedOn');
}




