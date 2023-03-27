const url_srv = "http://localhost:8098/api/";

// Tabla: NavBar
export const url_navbar_browse = url_srv + "NavBar/Browse";
export const url_navbar_browse_hijos = url_srv + "NavBar/BrowseHijos/"; // {padre}
export const url_navbar_read = url_srv + "NavBar/Read/"; // {id}
export const url_navbar_write = url_srv + "NavBar/Write";
export const url_navbar_delete = url_srv + "NavBar/Delete/"; // {id}

// Tabla: NavBar_Imagenes
export const url_navbar_imagenes_browse = url_srv + "NavBarImagenes/Browse";
export const url_navbar_imagenes_read = url_srv + "NavBarImagenes/Read/"; // {id}
export const url_navbar_imagenes_write = url_srv + "NavBarImagenes/Write";
export const url_navbar_imagenes_update = url_srv + "NavBarImagenes/Update/"; // {id}
export const url_navbar_imagenes_delete = url_srv + "NavBarImagenes/Delete/"; // {id}

// Tabla: NavBar_Textos
export const url_navbar_textos_browse = url_srv + "NavBarTextos/Browse";
export const url_navbar_textos_read = url_srv + "NavBarTextos/Read/"; // {id}/{tipo}/{serial}
export const url_navbar_textos_write = url_srv + "NavBarTextos/Write";
export const url_navbar_textos_update = url_srv + "NavBarTextos/Update/"; // {id}/{tipo}/{serial}
export const url_navbar_textos_delete = url_srv + "NavBarTextos/Delete/"; // {id}/{tipo}/{serial}

// Tabla: NavBar_Vinculos
export const url_navbar_vinculos_browse = url_srv + "NavBarVinculos/Browse";
export const url_navbar_vinculos_read = url_srv + "NavBarVinculos/Read/"; // {id}/{tipo}
export const url_navbar_vinculos_write = url_srv + "NavBarVinculos/Write";
export const url_navbar_vinculos_update = url_srv + "NavBarVinculos/Update/"; // {id}/{tipo}
export const url_navbar_vinculos_delete = url_srv + "NavBarVinculos/Delete/"; // {id}/{tipo}

// Stored: NavBar.Opciones
export const url_navbar_opciones = url_srv + "NavBarOpciones/Opciones/"; // {padre}

// Stored: NavBar.Opciones_Vinculos
export const url_navbar_opciones_vinculos =
  url_srv + "NavBarOpcionesVinculos/OpcionesVinculos/"; // {id_Opcion} / {id_Tipo_Textos}

// Stored: NavBar.Opciones_Acciones
export const url_navbar_opciones_acciones =
  url_srv + "NavBarOpcionesAcciones/OpcionesAcciones/"; // {id_Opcion} / {id_Tipo_Textos}
