export class SolicitudModel{
    id:String;
    tipo_solicitud: Number;
    tipo_inmueble: String;
    id_creador:String;
    id_cliente:String;
    direccion: String;
    valor: Number;
    fecha_solicitud: String;
    estado_solicitud: Number;
    foto: String;
    dispo: boolean;
}