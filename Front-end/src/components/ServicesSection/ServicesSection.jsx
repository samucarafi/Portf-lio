function ServicesSection({ onSelectService }) {
  const services = [
    {
      title: "Landing Pages",
      description:
        "Página moderna para apresentar seu serviço ou produto e receber contatos diretamente pelo WhatsApp.",
      price: "A partir de R$600",
    },
    {
      title: "Sites Institucionais",
      description:
        "Site profissional para sua empresa com informações, serviços, localização e contato direto pelo WhatsApp.",
      price: "A partir de R$900",
    },
    {
      title: "E-commerce",
      description:
        "Loja virtual completa com catálogo de produtos, gerenciamento de estoque e pagamentos online seguros através do Mercado Pago",
      price: "A partir de R$1500",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">🧰 Serviços</div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => onSelectService(service.title)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* <span className="price">{service.price}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServicesSection;
