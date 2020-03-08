export class SolicitudModel{
    id:String;
    id_propiedad: String;
    tipo_solicitud: Number;
    tipo_inmueble: String;
    id_creador:String;
    id_cliente:String;
    direccion: String;
    ciudad: String;
    valor: Number;
    fecha_solicitud: String;
    estado_solicitud: Number;
    foto: String;
    dispo: boolean;
    comentarios: String;
}