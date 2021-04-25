/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol type="A">
        <li>
          <p><a href="/index.html">Inicio</a></p>
        </li>
        <li>
          <p><a href="/b_sw.html">Software a instalar</a></p>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a HTML5</h3>
            </summary>
            <ol>
              <li><p><a href="/c_html/1_SGML.html">SGML</a></p></li>
              <li>
                <p><a href="/c_html/2_comentarios.html">Comentarios</a></p>
              </li>
              <li><p><a href="/c_html/3_doctype.html">DOCTYPE</a></p></li>
              <li><p><a href="/c_html/4_elementos.html">Elementos</a></p></li>
              <li><p><a href="/c_html/5_atributos.html">Atributos</a></p></li>
              <li>
                <p>
                  <a href="/c_html/6_con_contenido.html">Elementos con
                    contenido</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/7_sin_contenido.html">Elementos sin
                    contenido</a>
                </p>
              </li>
              <li>
                <p><a href="/c_html/8_padres.html">Elementos padres</a></p>
              </li>
              <li><p><a href="/c_html/9_hijos.html">Elementos hijos</a></p></li>
              <li>
                <p>
                  <a href="/c_html/10_html.html">El elemento
                    <strong>html</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/11_head.html">El elemento
                    <strong>head</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/12_codificacion.html">Codificación de
                    caracteres</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/13_viewport.html">El metadato
                    <strong>viewport</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/14_title.html">El elemento
                    <strong>title</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/15_body.html">El elemento
                    <strong>body</strong></a>
                </p>
              </li>
              <li>
                <p><a href="/c_html/16_fraseo.html">Elementos de fraseo</a></p>
              </li>
              <li>
                <p>
                  <a href="/c_html/17_h1.html">El elemento
                    <strong>h1</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/18_p.html">El elemento <strong>p</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/19_cierran_p.html">Elementos que cierran
                    <strong>p</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/20_footer.html">El elemento
                    <strong>footer</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/21_referencias.html">Referencias de
                    caracteres</a>
                </p>
              </li>
              <li><p><a href="/c_html/22_manos.html">Manos a la obra</a></p></li>
              <li><p><a href="/c_html/22_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/d_css/1_CSS.html">CSS</a></p></li>
              <li>
                <p>
                  <a href="/d_css/2_style.html">El Elemento <strong>style</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/3_comentarios.html">Comentarios</a></p></li>
              <li><p><a href="/d_css/4_reglas.html">Reglas de estilo</a></p></li>
              <li><p><a href="/d_css/5_selectores.html">Selector de tipo</a></p></li>
              <li><p><a href="/d_css/6_propiedades.html">Propiedades</a></p></li>
              <li><p><a href="/d_css/7_fonts.html">Fonts</a></p></li>
              <li>
                <p>
                  <a href="/d_css/8_font-family.html">La propiedad
                    <strong>font-family</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/9_colores.html">Colores en CSS</a></p></li>
              <li>
                <p>
                  <a href="/d_css/10_color.html">La propiedad
                    <strong>color</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/d_css/11_background-color.html">La propiedad
                    <strong>background-color</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/12_fondo.html">Fondo de la página</a></p></li>
              <li><p><a href="/d_css/13_custom.html">Custom properties</a></p></li>
              <li><p><a href="/d_css/14_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Modelo de cajas de CSS</h3>
            </summary>
            <ol>
              <li><p><a href="/e_cajas/1_div.html">El elemento <strong>div</strong></a></li>
              <li><p><a href="/e_cajas/2_span.html">El elemento <strong>span</strong></a></li>
              <li><p><a href="/e_cajas/3_display.html">La propiedad <strong>display</strong></a></li>
              <li><p><a href="/e_cajas/4_ejemplo_display.html">Ejemplo de <strong>display</strong></a></li>
              <li><p><a href="/e_cajas/5_tamanos.html">Tamaños y distancias en CSS</a></li>
              <li><p><a href="/e_cajas/6_cajas.html">Cajas</a></li>
              <li><p><a href="/e_cajas/7_ejemplo_cajas.html">Ejemplo de cajas</a></li>
              <li><p><a href="/e_cajas/8_box-sizing.html">La propiedad <strong>box-sizing</strong></a></li>
              <li><p><a href="/e_cajas/9_ejemplo-box-sizing.html">Ejemplo de <strong>box-sizing</strong></a></li>
              <li><p><a href="/e_cajas/10_margenes.html">Márgenes</a></li>
              <li><p><a href="/e_cajas/11_ejemplo_margenes.html">Ejemplo de márgenes</a></li>
              <li><p><a href="/e_cajas/12_relleno.html">Relleno</a></li>
              <li><p><a href="/e_cajas/13_ejemplo_relleno.html">Ejemplo de relleno</a></li>
              <li><p><a href="/e_cajas/14_partes_borde.html">Partes de un borde</a></li>
              <li><p><a href="/e_cajas/15_bordes.html">Propiedades para bordes</a></li>
              <li><p><a href="/e_cajas/16_esquinas_redondas.html">Esquinas redondas</a></li>
              <li><p><a href="/e_cajas/17_ejemplo_borde.html">Ejemplo de borde</a></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Posicionamiento con CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/f_posicionamiento/1_propiedades.html">Propiedades de posicionamiento</a></p></li>
              <li><p><a href="/f_posicionamiento/2_position.html">La propiedad <strong>position</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/3_ejemplo_fixed.html">Ejemplo de <strong>fixed</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/4_ejemplo_relative.html">Ejemplo de <strong>relative</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/5_ejemplo_absolute.html">Ejemplo de <strong>absolute</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/6_ejemplo_sticky.html">Ejemplo de <strong>sticky</strong></a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Selectores de CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/g_selectores/1_todos.html">Selector <strong>*</strong></a></p></li>
              <li><p><a href="/g_selectores/2_id.html">Selector <strong>#</strong>identificador</a></p></li>
              <li><p><a href="/g_selectores/3_class.html">Selector <strong>.</strong>clase</a></p></li>
              <li><p><a href="/g_selectores/4_hijo.html">Selector <em>sel1</em> <strong>&gt;</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/5_descendiente.html">Selector con descendientes</a> <em>sel1</em> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/6_siguiente.html">Selector <em>sel1</em> <strong>+</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/7_posterior.html">Selector <em>sel1</em> <strong>~</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/8_lista.html">Lista de selectores <em>sel1</em> <strong>,</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/9_active.html">Selector <strong>:active</strong></a></p></li>
              <li><p><a href="/g_selectores/10_focus.html">Selector <strong>:focus</strong></a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Formularios</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/h_formularios/1_recomendaciones.html">Recomendaciones</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_formularios/2_formulario.html">Formulario</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a Firebase</h3>
            </summary>
            <ol>
              <li><p><a href="/i_firebase/1_intro_fire.html">Introducción a Firebase</a></p></li>
              <li><p><a href="/i_firebase/2_autenticacion.html">Autenticación</a></p></li>
              <li><p><a href="/i_firebase/3_authProvider.html">AuthProvider</a></p></li>
              <li><p><a href="/i_firebase/4_google_auth_provider.html">Google auth provider</a></p></li>
              <li><p><a href="/i_firebase/5_auth.html">Sistema Auth</a></p></li>
              <li><p><a href="/i_firebase/6_firestore.html">Sistema Firestore</a></p></li>
              <li><p><a href="/i_firebase/7_colecciones.html">Colecciones</a></p></li>
              <li><p><a href="/i_firebase/8_snapshot_col.html">Snapshot de colecciones</a></p></li>
              <li><p><a href="/i_firebase/9_get_col.html">get de colecciones</a></p></li>
              <li><p><a href="/i_firebase/10_doc.html">Referencias a documentos</a></p></li>
              <li><p><a href="/i_firebase/11_add.html">Agregar documentos</a></p></li>
              <li><p><a href="/i_firebase/12_snapshot_doc.html">Snapshot de documentos</a></p></li>
              <li><p><a href="/i_firebase/13_get_ref.html">get de documentos</a></p></li>
              <li><p><a href="/i_firebase/14_set.html">Modificar documentos</a></p></li>
              <li><p><a href="/i_firebase/15_delete.html">Eliminar documentos</a></p></li>
              <li><p><a href="/i_firebase/16_storage.html">Sistema Storage</a></p></li>
              <li><p><a href="/i_firebase/17_arch.html">Referencias a archivos</a></p></li>
              <li><p><a href="/i_firebase/18_put.html">Subir archivos</a></p></li>
              <li><p><a href="/i_firebase/19_url_arch.html">URL de descarga</a></p></li>
              <li><p><a href="/i_firebase/20_del_arch.html">Eliminar archivos</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Ejemplo de bases de datos</h3>
            </summary>
            <ol>
              <li><p><a href="/j_bd/1_intro_bd.html">Ejemplo de bases de datos</a></p></li>
              <li><p><a href="/j_bd/2_casos.html">Casos de Uso</a></p></li>
              <li><p><a href="/j_bd/3_er.html">Diagrama Entidad Relación</a></p></li>
              <li><p><a href="/j_bd/4_no_rel.html">Diseño no Relacional</a></p></li>
              <li><p><a href="/j_bd/5_ejemplo.html">Datos de Ejemplo</a></p></li>
              <li><p><a href="/j_bd/6_instrucciones.html">Instrucciones</a></p></li>
              <li><p><a href="/j_bd/7_archivos.html">Archivos</a></p></li>
              <li><p><a href="/j_bd/8_tipos.html">js/tipos.js</a></p></li>
              <li><p><a href="/j_bd/9_tiposFire.html">lib/tiposFire.js</a></p></li>
              <li><p><a href="/j_bd/10_footer.html">cmp/mi-footer.js</a></p></li>
              <li><p><a href="/j_bd/11_progreso.html">cmp/mi-progreso.js</a></p></li>
              <li><p><a href="/j_bd/12_util.html">lib/util.js</a></p></li>
              <li><p><a href="/j_bd/13_init.html">js/init.js</a></p></li>
              <li><p><a href="/j_bd/14_index.html">index.html</a></p></li>
              <li><p><a href="/j_bd/15_CtrlSesion.html">js/CtrlSesion.js</a></p></li>
              <li><p><a href="/j_bd/16_fabrica.html">lib/fabrica.js</a></p></li>
              <li><p><a href="/j_bd/17_seguridad.html">js/seguridad.js</a></p></li>
              <li><p><a href="/j_bd/18_nav.html">cmp/mi-nav.js</a></p></li>
              <li><p><a href="/j_bd/19_chat.html">chat.html</a></p></li>
              <li><p><a href="/j_bd/20_CtrlChat.html">js/CtrlChat.js</a></p></li>
              <li><p><a href="/j_bd/21_pasatiempos.html">pasatiempos.html</a></p></li>
              <li><p><a href="/j_bd/22_CtrlPasatiempos.html">js/CtrlPasatiempos.js</a></p></li>
              <li><p><a href="/j_bd/23_pasatiempoNuevo.html">pasatiempoNuevo.html</a></p></li>
              <li><p><a href="/j_bd/24_CtrlPasatiempoNuevo.html">js/CtrlPasatiempoNuevo.js</a></p></li>
              <li><p><a href="/j_bd/25_navegacion.html">js/navegacion.js</a></p></li>
              <li><p><a href="/j_bd/26_pasatiempo.html">pasatiempo.html</a></p></li>
              <li><p><a href="/j_bd/27_CtrlPasatiempo.html">js/CtrlPasatiempo.js</a></p></li>
              <li><p><a href="/j_bd/28_usuarios.html">usuarios.html</a></p></li>
              <li><p><a href="/j_bd/29_CtrlUsuarios.html">js/CtrlUsuarios.js</a></p></li>
              <li><p><a href="/j_bd/30_usuarioNuevo.html">usuarioNuevo.html</a></p></li>
              <li><p><a href="/j_bd/31_CtrlUsuarioNuevo.html">js/CtrlUsuarioNuevo.js</a></p></li>
              <li><p><a href="/j_bd/32_usuario.html">usuario.html</a></p></li>
              <li><p><a href="/j_bd/33_CtrlUsuario.html">js/CtrlUsuario.js</a></p></li>
              <li><p><a href="/j_bd/34_js_usuarios.html">js/usuarios.js</a></p></li>
              <li><p><a href="/j_bd/35_storage.html">lib/storage.js</a></p></li>
              <li><p><a href="/j_bd/36_estilos.html">css/estilos.css</a></p></li>
              <li><p><a href="/j_bd/37_listas.html">css/listas.css</a></p></li>
              <li><p><a href="/j_bd/38_footer_css.html">css/mi-footer.css</a></p></li>
              <li><p><a href="/j_bd/39_nav_css.html">css/mi-nav.css</a></p></li>
              <li><p><a href="/j_bd/40_favicon.html">favicon.ico</a></p></li>
              <li><p><a href="/j_bd/41_README.html">README.md</a></p></li>
              <li><p><a href="/j_bd/42_LICENSE.html">LICENSE</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Juegos con Emojis</h3>
            </summary>
            <ol>
              <li><p><a href="/k_juegos/1_sprites.html">Sprites</a></p></li>
              <li><p><a href="/k_juegos/2_anima_horizontal.html">Animación horizontal</a></p></li>
              <li><p><a href="/k_juegos/3_anima_recta.html">Animación recta</a></p></li>
              <li><p><a href="/k_juegos/4_ondula.html">Ondula</a></p></li>
              <li><p><a href="/k_juegos/5_gira.html">Gira</a></p></li>
              <li><p><a href="/k_juegos/6_mueve_botones.html">Mueve con botones</a></p></li>
              <li><p><a href="/k_juegos/7_choques.html">Detecta colisiones</a></p></li>
              <li><p><a href="/k_juegos/8_sonrie.html">Haz algo si chocas</a></p></li>
              <li><p><a href="/k_juegos/9_mueve_aleatorio.html">Que se mueva como quiera</a></p></li>
              <li><p><a href="/k_juegos/10_custom.html">Custom elements</a></p></li>
              <li><p><a href="/k_juegos/11_asociaciones.html">Asociaciones</a></p></li>
              <li><p><a href="/k_juegos/12_polimorfismo.html">Polimorfismo</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Adornos</h3>
            </summary>
            <ol>
              <li><p><a href="/l_adornos/1_recta.html">Adorno horizontal</a></p></li>
              <li><p><a href="/l_adornos/2_espiral.html">Adorno en espiral</a></p></li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);