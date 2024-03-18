import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Información de Contacto:</h2>
            <p className="text-gray-700">Nombre: Alejandro Rodríguez</p>
            <p className="text-gray-700">Teléfono: +1234567890</p>
            <p className="text-gray-700">Correo Electrónico: ejemplo@correo.com</p>
            <p className="text-gray-700">Dirección: 123 Calle Ejemplo, Ciudad, País</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
