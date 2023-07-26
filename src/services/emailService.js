const baseURL = 'http://localhost:3500'; // Reemplaza con la URL de tu backend

const emailService = {
  sendEmail: async (emailData) => {
    try {
      const response = await fetch(`${baseURL}/api/send-email`, {
        method: 'POST',
        body: emailData,
      });

      if (!response.ok) {
        throw new Error('Error al enviar el correo');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default emailService;
