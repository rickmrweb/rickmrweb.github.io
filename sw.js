/* Espera 11 minutos después de hacer los cambios en tu sitio, para después
 * actualizar este archivo. */
const CACHE = "rickmrweb-1.2.12";

/** Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "b_sw.html",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "site.webmanifest",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "c_html/10_html.html",
  "c_html/11_head.html",
  "c_html/12_codificacion.html",
  "c_html/13_viewport.html",
  "c_html/14_title.html",
  "c_html/15_body.html",
  "c_html/16_fraseo.html",
  "c_html/17_h1.html",
  "c_html/18_p.html",
  "c_html/19_cierran_p.html",
  "c_html/1_SGML.html",
  "c_html/20_footer.html",
  "c_html/21_referencias.html",
  "c_html/22_manos.html",
  "c_html/22_resumen.html",
  "c_html/2_comentarios.html",
  "c_html/3_doctype.html",
  "c_html/4_elementos.html",
  "c_html/5_atributos.html",
  "c_html/6_con_contenido.html",
  "c_html/7_sin_contenido.html",
  "c_html/8_padres.html",
  "c_html/9_hijos.html",
  "c_html/src/10_hola_mundo_html.html",
  "c_html/src/11_hola_mundo_head.html",
  "c_html/src/12_hola_mundo_codificacion.html",
  "c_html/src/13_hola_mundo_viewport.html",
  "c_html/src/14_hola_mundo_title.html",
  "c_html/src/15_hola_mundo_body.html",
  "c_html/src/16_hola_mundo_h1.html",
  "c_html/src/17_hola_mundo_p.html",
  "c_html/src/18_hola_mundo_footer.html",
  "c_html/src/19_hola_mundo_referencia.html",
  "c_html/src/1_hola_mundo.html",
  "c_html/src/2_hola_mundo_comentario.html",
  "c_html/src/3_hola_mundo_doctype.html",
  "c_html/src/4_hola_mundo_elementos.html",
  "c_html/src/5_hola_mundo_atributos.html",
  "c_html/src/6_hola_mundo_con_contenido.html",
  "c_html/src/7_hola_mundo_sin_contenido.html",
  "c_html/src/8_hola_mundo_padres.html",
  "c_html/src/9_hola_mundo_hijos.html",
  "d_css/10_color.html",
  "d_css/11_background-color.html",
  "d_css/12_fondo.html",
  "d_css/13_custom.html",
  "d_css/14_resumen.html",
  "d_css/1_CSS.html",
  "d_css/2_style.html",
  "d_css/3_comentarios.html",
  "d_css/4_ej_trans.html",
  "d_css/4_reglas.html",
  "d_css/5_selectores.html",
  "d_css/6_propiedades.html",
  "d_css/7_fonts.html",
  "d_css/8_font-family.html",
  "d_css/9_colores.html",
  "d_css/src/10_fondo.html",
  "d_css/src/11_custom.html",
  "d_css/src/1_hola_mundo.html",
  "d_css/src/1_trans.html",
  "d_css/src/2_hola_mundo_style.html",
  "d_css/src/3_hola_mundo_comentario.html",
  "d_css/src/4_hola_mundo_reglas.html",
  "d_css/src/5_hola_mundo_selectores.html",
  "d_css/src/6_hola_mundo_propiedades.html",
  "d_css/src/7_hola_mundo_font-family.html",
  "d_css/src/8_hola_mundo_color.html",
  "d_css/src/9_hola_mundo_backgroud-color.html",
  "e_cajas/10_margenes.html",
  "e_cajas/11_ejemplo_margenes.html",
  "e_cajas/12_relleno.html",
  "e_cajas/13_ejemplo_relleno.html",
  "e_cajas/14_partes_borde.html",
  "e_cajas/15_bordes.html",
  "e_cajas/16_esquinas_redondas.html",
  "e_cajas/17_ejemplo_borde.html",
  "e_cajas/1_div.html",
  "e_cajas/2_span.html",
  "e_cajas/3_display.html",
  "e_cajas/4_ejemplo_display.html",
  "e_cajas/5_tamanos.html",
  "e_cajas/6_cajas.html",
  "e_cajas/7_ejemplo_cajas.html",
  "e_cajas/8_box-sizing.html",
  "e_cajas/9_ejemplo-box-sizing.html",
  "e_cajas/src/1_display.html",
  "e_cajas/src/2_cajas.html",
  "e_cajas/src/3_box-sizing.html",
  "e_cajas/src/4_margenes.html",
  "e_cajas/src/5_relleno.html",
  "e_cajas/src/6_borde.html",
  "f_posicionamiento/1_propiedades.html",
  "f_posicionamiento/2_position.html",
  "f_posicionamiento/3_ejemplo_fixed.html",
  "f_posicionamiento/4_ejemplo_relative.html",
  "f_posicionamiento/5_ejemplo_absolute.html",
  "f_posicionamiento/6_ejemplo_sticky.html",
  "f_posicionamiento/src/1_fixed.html",
  "f_posicionamiento/src/2_relative.html",
  "f_posicionamiento/src/3_absolute.html",
  "f_posicionamiento/src/4_sticky.html",
  "g_selectores/10_focus.html",
  "g_selectores/1_todos.html",
  "g_selectores/2_id.html",
  "g_selectores/3_class.html",
  "g_selectores/4_hijo.html",
  "g_selectores/5_descendiente.html",
  "g_selectores/6_siguiente.html",
  "g_selectores/7_posterior.html",
  "g_selectores/8_lista.html",
  "g_selectores/9_active.html",
  "g_selectores/src/10_active.html",
  "g_selectores/src/11_focus.html",
  "g_selectores/src/2_todos.html",
  "g_selectores/src/3_id.html",
  "g_selectores/src/4_class.html",
  "g_selectores/src/5_hijo.html",
  "g_selectores/src/6_descendiente.html",
  "g_selectores/src/7_siguiente.html",
  "g_selectores/src/8_posterior.html",
  "g_selectores/src/9_lista.html",
  "h_formularios/1_recomendaciones.html",
  "h_formularios/2_formulario.html",
  "h_formularios/src/3_formulario.html",
  "h_formularios/src/7_switch_default.html",
  "img/icono1024.png",
  "img/icono2048.png",
  "img/icono256.png",
  "i_firebase/10_doc.html",
  "i_firebase/11_add.html",
  "i_firebase/12_snapshot_doc.html",
  "i_firebase/13_get_ref.html",
  "i_firebase/14_set.html",
  "i_firebase/15_delete.html",
  "i_firebase/16_storage.html",
  "i_firebase/17_arch.html",
  "i_firebase/18_put.html",
  "i_firebase/19_url_arch.html",
  "i_firebase/1_intro_fire.html",
  "i_firebase/20_del_arch.html",
  "i_firebase/2_autenticacion.html",
  "i_firebase/3_authProvider.html",
  "i_firebase/4_google_auth_provider.html",
  "i_firebase/5_auth.html",
  "i_firebase/6_firestore.html",
  "i_firebase/7_colecciones.html",
  "i_firebase/8_snapshot_col.html",
  "i_firebase/9_get_col.html",
  "js/config.js",
  "j_bd/10_footer.html",
  "j_bd/11_progreso.html",
  "j_bd/12_util.html",
  "j_bd/13_init.html",
  "j_bd/14_index.html",
  "j_bd/15_CtrlSesion.html",
  "j_bd/16_fabrica.html",
  "j_bd/17_seguridad.html",
  "j_bd/18_nav.html",
  "j_bd/19_chat.html",
  "j_bd/1_intro_bd.html",
  "j_bd/20_CtrlChat.html",
  "j_bd/21_pasatiempos.html",
  "j_bd/22_CtrlPasatiempos.html",
  "j_bd/23_pasatiempoNuevo.html",
  "j_bd/24_CtrlPasatiempoNuevo.html",
  "j_bd/25_navegacion.html",
  "j_bd/26_pasatiempo.html",
  "j_bd/27_CtrlPasatiempo.html",
  "j_bd/28_usuarios.html",
  "j_bd/29_CtrlUsuarios.html",
  "j_bd/2_casos.html",
  "j_bd/30_usuarioNuevo.html",
  "j_bd/31_CtrlUsuarioNuevo.html",
  "j_bd/32_usuario.html",
  "j_bd/33_CtrlUsuario.html",
  "j_bd/34_js_usuarios.html",
  "j_bd/35_storage.html",
  "j_bd/36_estilos.html",
  "j_bd/37_listas.html",
  "j_bd/38_footer_css.html",
  "j_bd/39_nav_css.html",
  "j_bd/3_er.html",
  "j_bd/40_favicon.html",
  "j_bd/41_README.html",
  "j_bd/42_LICENSE.html",
  "j_bd/4_no_rel.html",
  "j_bd/5_ejemplo.html",
  "j_bd/6_instrucciones.html",
  "j_bd/7_archivos.html",
  "j_bd/8_tipos.html",
  "j_bd/9_tiposFire.html",
  "j_bd/img/casos_bd.svg",
  "j_bd/img/entidad_relacion.svg",
  "j_bd/img/favicon.ico",
  "j_bd/img/no_sql.svg",
  "j_bd/img/pp.gif",
  "j_bd/img/qk.gif",
  "j_bd/src/init.js",
  "j_bd/src/LICENSE.html",
  "k_juegos/10_custom.html",
  "k_juegos/11_asociaciones.html",
  "k_juegos/12_polimorfismo.html",
  "k_juegos/1_sprites.html",
  "k_juegos/2_anima_horizontal.html",
  "k_juegos/3_anima_recta.html",
  "k_juegos/4_ondula.html",
  "k_juegos/5_gira.html",
  "k_juegos/6_mueve_botones.html",
  "k_juegos/7_choques.html",
  "k_juegos/8_sonrie.html",
  "k_juegos/9_mueve_aleatorio.html",
  "k_juegos/src/1_asociaciones.html",
  "k_juegos/src/1_custom.html",
  "k_juegos/src/1_polimorfismo.html",
  "k_juegos/src/1_sprite.html",
  "k_juegos/src/2_anima_horizontal.html",
  "k_juegos/src/3_anima_recta.html",
  "k_juegos/src/3_sonrie.html",
  "k_juegos/src/4_mueve_aleatorio.html",
  "k_juegos/src/4_mueve_botones.html",
  "k_juegos/src/4_ondula.html",
  "k_juegos/src/5_gira.html",
  "k_juegos/src/8_choca.html",
  "lib/layout-cajon.js",
  "lib/layout-cajon_shadow.js",
  "lib/mi-footer.js",
  "lib/muestra-codigo.js",
  "lib/muestra-codigo_shadow.js",
  "lib/utilHtml.js",
  "lib/css/estilos.css",
  "lib/css/gentium-book-basic-v11-latin-700.woff",
  "lib/css/gentium-book-basic-v11-latin-700.woff2",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-italic.woff",
  "lib/css/gentium-book-basic-v11-latin-italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-regular.woff",
  "lib/css/gentium-book-basic-v11-latin-regular.woff2",
  "lib/css/gentium-book-basic.css",
  "lib/css/material-icons.css",
  "lib/css/MaterialIcons-Regular.codepoints",
  "lib/css/MaterialIcons-Regular.ttf",
  "lib/css/mi-footer.css",
  "lib/css/prueba.css",
  "lib/css/ubuntu-mono-v10-latin-700.woff",
  "lib/css/ubuntu-mono-v10-latin-700.woff2",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-italic.woff",
  "lib/css/ubuntu-mono-v10-latin-italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-regular.woff",
  "lib/css/ubuntu-mono-v10-latin-regular.woff2",
  "lib/css/ubuntu-mono.css",
  "lib/css/ubuntu-v15-latin-700.woff",
  "lib/css/ubuntu-v15-latin-700.woff2",
  "lib/css/ubuntu-v15-latin-700italic.woff",
  "lib/css/ubuntu-v15-latin-700italic.woff2",
  "lib/css/ubuntu-v15-latin-italic.woff",
  "lib/css/ubuntu-v15-latin-italic.woff2",
  "lib/css/ubuntu-v15-latin-regular.woff",
  "lib/css/ubuntu-v15-latin-regular.woff2",
  "lib/css/ubuntu.css",
  "l_adornos/1_recta.html",
  "l_adornos/2_espiral.html",
  "l_adornos/src/4_adorno_gira.html",
  "l_adornos/src/4_adorno_recta.html",
  "/"
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  // @ts-ignore
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  // @ts-ignore
  if (evt.request.method === "GET") {
    // @ts-ignore
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
