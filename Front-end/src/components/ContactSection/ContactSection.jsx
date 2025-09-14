const ContactSection = () => {
  const contacts = [
    { icon: "📧", label: "Email:", value: "samucarafino@gmail.com" },
    {
      icon: "💼",
      label: "LinkedIn:",
      value: "/in/SamuelRafino",
    },
    { icon: "🐙", label: "GitHub:", value: "github.com/samucarafi" },
    {
      icon: "📞",
      label: "Whatsapp",
      value: "21973402054",
    },
    // { icon: "🌐", label: "Website:", value: "xxx" },
  ];

  return (
    <div className="section">
      <div className="section-title">📞 CONTATO</div>
      <div className="contact-info">
        {contacts.map((contact, index) => (
          <a
            target="_blank"
            href={`https://${
              contact.label === "LinkedIn:"
                ? `www.linkedin.com${contact.value}`
                : contact.label === "Whatsapp"
                ? `wa.me/55${contact.value}?text=Ol%C3%A1!%20Tenho%20um%20projeto%20de%20site/landing%20page%20e%20gostaria%20de%20uma%20proposta.%20Quando%20podemos%20conversar%3F`
                : contact.value
            }`}
            key={index}
            className="contact-item"
          >
            <span className="contact-icon">{contact.icon}</span>
            <div>
              <strong>{contact.label}</strong>
              <br />
              {contact.value}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default ContactSection;
