// Define o vCardData uma vez fora das funções
const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Felipe Starck
N:Starck;Felipe;;;
TITLE:Desenvolvedor
TEL;TYPE=CELL:15997087195
EMAIL:felipe.starck@email.com
URL:https://github.com/felipestarck
END:VCARD
`.trim();

function saveContact() {
  const blob = new Blob([vCardData], { type: 'text/x-vcard' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Felipe_Starck.vcf';
  link.click();

  displayMessage("O contato foi baixado. Abra o arquivo para adicionar à sua agenda.");
}

function generateQRCode() {
  // Limpa o QR code anterior
  $('#qrcode').empty();

  // Adiciona um console.log para verificar os dados do QR code
  console.log("Gerando QR Code com os dados:", vCardData);

  // Gera o QR code com as informações do vCard
  $('#qrcode').qrcode({
    text: vCardData,
    width: 250, // Largura do QR code
    height: 250 // Altura do QR code
  });
}

function toggleQRCode() {
  // Chama a função para gerar o QR Code
  generateQRCode();

  const qrCodeContainer = document.getElementById('qrcode');
  if (qrCodeContainer.style.display === 'none') {
    qrCodeContainer.style.display = 'block'; // Exibir QR Code
  } else {
    qrCodeContainer.style.display = 'none'; // Ocultar QR Code
  }
}

function displayMessage(text) {
  const existingMessage = document.querySelector('.download-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement('div');
  message.className = 'download-message';
  message.textContent = text;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 5000); // 5 segundos
}
