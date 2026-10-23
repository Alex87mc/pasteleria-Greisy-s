/* ==========================================================================
   1. CONFIGURACIÓN GENERAL DE GREISY'S CAKES (DATOS DE GOOGLE MAPS)
   ========================================================================== */
const CONFIG = {
    telefonoWhatsApp: "5219621863974",
    telefonoLlamada: "962 186 3974",
    enlaceGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Greisys+Cakes+12a+Avenida+Sur+11C+Tapachula",
    direccionTexto: "12a Avenida Sur 11C, Los Naranjos, Centro, 30700 Tapachula de Córdova y Ordóñez, Chis."
};

/* ==========================================================================
   2. CATÁLOGO DE VITRINA Y PEDIDOS CON ANTICIPACIÓN (20 PRODUCTOS)
   ========================================================================== */
const catalogoProductos = [
    // --- LISTOS EN VITRINA (1 al 6) ---
    {
        id: 1,
        nombre: "Pastel Tres Leches Clásico de Vitrina",
        precio: 380,
        categoria: "vitrina",
        etiqueta: "En vitrina hoy",
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 15 personas", "Pan esponja húmedo 3 leches", "Relleno de fresa o durazno", "Dedicatoria incluida"],
        descripcion: "Pastel fresco del día listo en nuestra vitrina refrigerada para que pases por él cuando gustes."
    },
    {
        id: 2,
        nombre: "Pastel de Chocolate Cremoso",
        precio: 420,
        categoria: "vitrina",
        etiqueta: "Más vendido",
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 15 personas", "Pan de chocolate suave", "Cubierta de fudge y chispas", "Disponible en vitrina"],
        descripcion: "Delicioso pastel de chocolate con cobertura suave, ideal para festejar cualquier cumpleaños."
    },
    {
        id: 3,
        nombre: "Pastel Combinado Vainilla y Chocolate",
        precio: 390,
        categoria: "vitrina",
        etiqueta: "En vitrina hoy",
        imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 personas", "Mitad vainilla y mitad chocolate", "Betún cremoso de la casa", "Decorado con frutas o chocolates"],
        descripcion: "La opción favorita para que todos en la fiesta disfruten de su sabor preferido."
    },
    {
        id: 4,
        nombre: "Chocoflan Imposible Familiar",
        precio: 340,
        categoria: "vitrina",
        etiqueta: "Favorito",
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 rebanadas", "Base de pastel de chocolate", "Flan napolitano cremoso arriba", "Bañado en cajeta con nuez"],
        descripcion: "Receta casera recién horneada que combina la suavidad del flan con pan de chocolate."
    },
    {
        id: 5,
        nombre: "Pastel Fresas con Crema",
        precio: 410,
        categoria: "vitrina",
        etiqueta: "Fresco",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 14 personas", "Crema batida dulce", "Fresas naturales seleccionadas", "Suave y ligero"],
        descripcion: "Decorado con fresas frescas y crema batida artesanal en nuestra vitrina."
    },
    {
        id: 6,
        nombre: "Cheesecake con Fresas o Zarzamora",
        precio: 430,
        categoria: "vitrina",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 porciones", "Queso crema suave", "Mermelada casera de frutos rojos", "Base de galleta dorada"],
        descripcion: "Cremoso pay de queso refrigerado listo para compartir en familia."
    },

    // --- CUPCAKES Y POSTRES EN VITRINA (7 al 11) ---
    {
        id: 7,
        nombre: "Caja de 6 Cupcakes Decorados Greisy's",
        precio: 190,
        categoria: "cupcakes",
        etiqueta: "Especialidad 🧁",
        imagen: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
        detalles: ["6 Cupcakes grandes", "Sabores vainilla, chocolate y red velvet", "Betún cremoso de colores", "Caja lista para regalo"],
        descripcion: "Nuestros clásicos cupcakes recién horneados y decorados a mano como los ves en nuestra vitrina."
    },
    {
        id: 8,
        nombre: "Docena de Cupcakes para Fiesta (12 pzas)",
        precio: 350,
        categoria: "cupcakes",
        etiqueta: "Para compartir",
        imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80",
        detalles: ["12 Cupcakes surtidos", "Puedes elegir colores del betún", "Chispas y toppings incluidos", "Ideal para cumpleaños"],
        descripcion: "Caja de 12 cupcakes suaves y esponjosos para mesas de dulces o festejos."
    },
    {
        id: 9,
        nombre: "Rebanada Individual de Pastel",
        precio: 60,
        categoria: "cupcakes",
        etiqueta: "En vitrina",
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
        detalles: ["Porción individual grande", "Sabor chocolate, 3 leches o zanahoria", "Lista para llevar", "Disponible hasta las 9 PM"],
        descripcion: "¿Se te antojó un postre hoy? Pasa por tu rebanada individual recién salida de nuestra vitrina."
    },
    {
        id: 10,
        nombre: "Cupcakes Personalizados con Frase o Foto",
        precio: 240,
        categoria: "cupcakes",
        etiqueta: "Con anticipación",
        imagen: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
        detalles: ["Caja de 6 piezas", "Letras o figuras en fondant", "Ideales para aniversario o novios", "Pídelos 1 o 2 días antes"],
        descripcion: "Forma una frase especial en tus cupcakes para sorprender a tu pareja o mejor amiga."
    },
    {
        id: 11,
        nombre: "Vasitos de Postre Tres Leches / Carlota",
        precio: 55,
        categoria: "cupcakes",
        etiqueta: "Individual",
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        detalles: ["Vaso individual frío", "Sabores: Carlota de limón, Oreo o Fresas", "Práctico para llevar", "En vitrina"],
        descripcion: "Postres fríos en vaso listos para disfrutar en cualquier momento del día."
    },

    // --- SOBRE PEDIDO CON ANTICIPACIÓN (12 al 16) ---
    {
        id: 12,
        nombre: "Pastel Personalizado con tu Diseño",
        precio: 520,
        categoria: "personalizados",
        etiqueta: "Pídelo con anticipación",
        imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 a 20 personas", "Elige el color, frase y decoración", "Pan 3 leches o casero", "Agenda con 2 a 3 días de anticipación"],
        descripcion: "Mándanos la foto del pastel que te gustó y en Greisy's Cakes lo hacemos realidad para tu festejo."
    },
    {
        id: 13,
        nombre: "Pastel Vintage con Listón y Duyas",
        precio: 550,
        categoria: "personalizados",
        etiqueta: "En tendencia",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 personas", "Decoración vintage en tonos pastel", "Moño o perlas comestibles", "Sobre pedido"],
        descripcion: "El diseño favorito para fotos de cumpleaños, decorado artesanalmente con manga pastelera."
    },
    {
        id: 14,
        nombre: "Bento Cake Mini para Regalo",
        precio: 210,
        categoria: "personalizados",
        etiqueta: "Para 2-4 personas",
        imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
        detalles: ["Tamaño mini individual/pareja", "Lleva el dibujo o meme que quieras", "Vainilla o chocolate", "En cajita para regalo"],
        descripcion: "Detalle divertido y económico personalizado con el mensaje que elijas."
    },
    {
        id: 15,
        nombre: "Pastel con Rosetas en Degradado",
        precio: 490,
        categoria: "personalizados",
        etiqueta: "Para Mamá",
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 a 20 personas", "Cubierto de rosetas de crema", "Color rosa, lila o dorado", "Con dedicatoria"],
        descripcion: "Un diseño hermoso cubierto de flores de betún en los tonos favoritos de la festejada."
    },
    {
        id: 16,
        nombre: "Pastel Drip Cake con Chocolates y Fresas",
        precio: 540,
        categoria: "personalizados",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 a 20 personas", "Efecto chorreado de ganache", "Coronado con chocolates y fresas", "Sobre pedido"],
        descripcion: "Pastel alto decorado con goteo de chocolate y tus dulces o frutas favoritas arriba."
    },

    // --- INFANTILES Y EVENTOS (17 al 20) ---
    {
        id: 17,
        nombre: "Pastel Infantil de Personaje Favorito",
        precio: 590,
        categoria: "eventos",
        etiqueta: "Niños y Niñas",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 20 a 25 personas", "Impresión comestible o toppers", "Colores vibrantes", "Agenda con anticipación"],
        descripcion: "Diseñamos el pastel con la caricatura, superhéroe o princesa favorita de tus pequeños."
    },
    {
        id: 18,
        nombre: "Paquete Fiesta (Pastel 20 pers + 12 Cupcakes)",
        precio: 850,
        categoria: "eventos",
        etiqueta: "Paquete ahorro",
        imagen: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
        detalles: ["1 Pastel para 20 personas", "12 Cupcakes haciendo juego", "Misma temática y colores", "Pídelo con 3 días de anticipación"],
        descripcion: "Combo completo para que tu mesa principal luzca coordinada y alcance para todos tus invitados."
    },
    {
        id: 19,
        nombre: "Pastel de 2 Pisos para XV Años o Bautizo",
        precio: 1350,
        categoria: "eventos",
        etiqueta: "Eventos",
        imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 40 a 50 personas", "Dos niveles decorados", "Sabores a elegir en cada piso", "Aparta tu fecha con anticipación"],
        descripcion: "Pastel elegante de dos pisos ideal para bautizos, primeras comuniones, bodas o XV años."
    },
    {
        id: 20,
        nombre: "Pastel Rectangular para 30-40 Personas",
        precio: 890,
        categoria: "eventos",
        etiqueta: "Familiar / Escolar",
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 35 a 40 rebanadas", "Pan 3 leches o tradicional", "Amplio espacio para dedicatoria o dibujo", "Sobre pedido"],
        descripcion: "Excelente rendimiento para convivios escolares, reuniones familiares grandes o eventos de oficina."
    }
];

/* ==========================================================================
   3. LÓGICA DEL CATÁLOGO, BUSCADOR EN VIVO, FILTROS Y MODAL
   ========================================================================== */
const gridCatalogo = document.getElementById("catalogo-grid");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const inputBuscador = document.getElementById("input-buscador");
const modal = document.getElementById("modal-ramo");
const btnCerrarModal = document.getElementById("cerrar-modal");

let categoriaActual = "todos";

const nombresCategorias = {
    vitrina: "Listos en Vitrina",
    cupcakes: "Cupcakes y Postres",
    personalizados: "Sobre Pedido con Anticipación",
    eventos: "Infantiles y Eventos"
};

function mostrarProductos(lista) {
    gridCatalogo.innerHTML = "";

    if (lista.length === 0) {
        gridCatalogo.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px; font-weight:600;">No encontramos ese sabor en la lista, ¡pero podemos prepararlo sobre pedido por WhatsApp! 🧁</p>`;
        return;
    }

    lista.forEach((item) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-pastel";

        const etiquetaHTML = item.etiqueta 
            ? `<span class="etiqueta-estado">${item.etiqueta}</span>` 
            : "";

        tarjeta.innerHTML = `
            <div class="img-contenedor">
                ${etiquetaHTML}
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
                <span class="burbuja-precio">$${item.precio}</span>
            </div>
            <div class="info-pastel">
                <div>
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                </div>
                <button class="btn-ancho-pastel">Ver porciones y pedir 🧁</button>
            </div>
        `;

        tarjeta.addEventListener("click", () => abrirModal(item));
        gridCatalogo.appendChild(tarjeta);
    });
}

function filtrarYBuscar() {
    const texto = inputBuscador.value.toLowerCase().trim();

    const filtrados = catalogoProductos.filter((item) => {
        const coincideCategoria = categoriaActual === "todos" || item.categoria === categoriaActual;
        const coincideTexto = item.nombre.toLowerCase().includes(texto) || 
                              item.descripcion.toLowerCase().includes(texto) ||
                              item.detalles.some(d => d.toLowerCase().includes(texto));
        return coincideCategoria && coincideTexto;
    });

    mostrarProductos(filtrados);
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");
        categoriaActual = boton.getAttribute("data-categoria");
        filtrarYBuscar();
    });
});

inputBuscador.addEventListener("input", filtrarYBuscar);

function abrirModal(item) {
    document.getElementById("modal-img").src = item.imagen;
    document.getElementById("modal-titulo").textContent = item.nombre;
    document.getElementById("modal-precio").textContent = `$${item.precio} MXN`;
    document.getElementById("modal-descripcion").textContent = item.descripcion;
    document.getElementById("modal-categoria").textContent = nombresCategorias[item.categoria] || "Greisy's Cakes";

    const etiquetaModal = document.getElementById("modal-etiqueta");
    if (item.etiqueta) {
        etiquetaModal.textContent = item.etiqueta;
        etiquetaModal.style.display = "inline-block";
    } else {
        etiquetaModal.style.display = "none";
    }

    const listaDetalles = document.getElementById("modal-flores");
    listaDetalles.innerHTML = "";
    item.detalles.forEach((detalle) => {
        const li = document.createElement("li");
        li.textContent = `• ${detalle}`;
        listaDetalles.appendChild(li);
    });

    const mensaje = `Hola Greisy's Cakes, vi en su catálogo web el *${item.nombre}* ($${item.precio} MXN) y me gustaría consultar disponibilidad.`;
    document.getElementById("modal-btn-whatsapp").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    modal.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    modal.classList.remove("activo");
    document.body.style.overflow = "auto";
}

btnCerrarModal.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });

function inicializarEnlacesContacto() {
    const msgGeneral = "Hola Greisy's Cakes, vi su catálogo web y tengo una consulta.";
    const urlGeneral = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgGeneral)}`;
    document.getElementById("btn-whatsapp-flotante").href = urlGeneral;

    const msgPersonalizado = "Hola Greisy's Cakes, quiero cotizar un pastel personalizado con anticipación.";
    const urlPersonalizado = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgPersonalizado)}`;
    document.getElementById("btn-whatsapp-personalizado").href = urlPersonalizado;
    document.getElementById("btn-hero-whatsapp").href = urlPersonalizado;

    document.getElementById("btn-google-maps").href = CONFIG.enlaceGoogleMaps;
    document.getElementById("texto-direccion").textContent = CONFIG.direccionTexto;

    const numeroLimpio = CONFIG.telefonoLlamada.replace(/\s+/g, "");
    document.getElementById("btn-llamar").href = `tel:+52${numeroLimpio}`;
    document.getElementById("numero-visible").textContent = CONFIG.telefonoLlamada;
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarEnlacesContacto();
    mostrarProductos(catalogoProductos);
});