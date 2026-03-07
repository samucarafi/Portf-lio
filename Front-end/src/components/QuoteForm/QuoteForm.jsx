import { useState, useEffect } from "react";
function QuoteForm({ selectedService }) {
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: "",
    message: "",
  });
  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({
        ...prev,
        service: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsapp = (e) => {
    e.preventDefault();

    const text = `
Novo orçamento:

Nome: ${form.name}
Empresa: ${form.business}
Serviço: ${form.service}

Mensagem:
${form.message}
`;

    const phone = "5521973402054";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="section">
      <div className="section-title">📩 Solicitar Orçamento</div>

      <p className="output">
        Precisa de um site profissional? Preencha o formulário abaixo para
        receber um orçamento rápido.
      </p>
      <form onSubmit={sendToWhatsapp} className="quote-form">
        <div className="form-group">
          <label>Nome</label>
          <input name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Empresa</label>
          <input name="business" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Serviço</label>
          <select name="service" value={form.service} onChange={handleChange}>
            <option>Escolha um serviço</option>
            <option>Landing Pages</option>
            <option>Sites Institucionais</option>
            <option>E-commerce</option>
          </select>
        </div>

        <div className="form-group">
          <label>Descreva o projeto</label>
          <textarea name="message" onChange={handleChange} />
        </div>

        <button type="submit">Enviar orçamento</button>
      </form>
    </div>
  );
}
export default QuoteForm;
