"use client";

import { useState, useRef } from "react";
import { Send, FileDown, Check, Upload } from "lucide-react";
import { Button } from "./Button";
import CustomSelect from "./CustomSelect";
import { masterAssetPath } from "@/src/data/paths";

const parceirosOptions = [
  "ADEPPE Pernambuco",
  "ADEPE-SE",
  "AGEPE Goiás",
  "ABEPE",
  "AEPE-PI",
  "ADPERJ",
  "ADEP-ES",
  "ADEP-MG",
  "ADEP-MS",
  "ADEP-RO",
  "ADEP-TO",
  "ADEP-RN",
  "ADEP-PR",
  "ADEP-AC",
  "ADEP-AM",
  "ADEP-AL",
  "ADEP-BA",
  "ADEP-CE",
  "ADEP-MA",
  "ADEP-PB",
  "ADEP-SC",
  "ADEP-PE",
  "ADEP-AP",
  "ADEP-RS",
  "ADEP-SP",
  "ADEP-DF",
  "ADEP-RR",
  "ADEP-PA",
  "AGEPE-MT",
  "Outro",
];

const tipoDocumentoOptions = [
  { value: "nif", label: "NIF (Alunos Europeus)" },
  { value: "cpf", label: "CPF (Brasileiro)" },
  { value: "dni", label: "DNI (Espanhóis)" },
  { value: "ci", label: "CI/Cédula de Identidade (Portugal)" },
  { value: "passaporte", label: "Passaporte (Outros)" },
  { value: "outro", label: "Outro" },
];

const paises = [
  "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola",
  "Antígua e Barbuda", "Arábia Saudita", "Argélia", "Argentina", "Armênia",
  "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrein", "Bangladesh",
  "Barbados", "Bélgica", "Belize", "Benin", "Bielorrússia", "Bolívia",
  "Bósnia e Herzegovina", "Botsuana", "Brasil", "Brunei", "Bulgária",
  "Burkina Faso", "Burundi", "Butão", "Cabo Verde", "Camarões", "Camboja",
  "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre",
  "Colômbia", "Comores", "Congo", "Coreia do Norte", "Coreia do Sul",
  "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca", "Djibouti",
  "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador",
  "Eritreia", "Eslováquia", "Eslovênia", "Espanha", "Estados Unidos",
  "Estônia", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", "Gabão",
  "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala", "Guiana",
  "Guiné", "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria",
  "Iêmen", "Ilhas Marshall", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda",
  "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Kiribati",
  "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia",
  "Liechtenstein", "Lituânia", "Luxemburgo", "Macedônia do Norte",
  "Madagascar", "Malásia", "Malauí", "Maldivas", "Mali", "Malta", "Marrocos",
  "Maurício", "Mauritânia", "México", "Mianmar", "Micronésia", "Moçambique",
  "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Namíbia", "Nauru",
  "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia",
  "Omã", "Países Baixos", "Palau", "Panamá", "Papua-Nova Guiné", "Paquistão",
  "Paraguai", "Peru", "Polônia", "Portugal", "Quênia", "Quirguistão",
  "Reino Unido", "República Centro-Africana", "República Checa",
  "República Democrática do Congo", "República Dominicana", "Romênia",
  "Ruanda", "Rússia", "Salomão", "Samoa", "San Marino", "Santa Lúcia",
  "São Cristóvão e Neves", "São Tomé e Príncipe", "São Vicente e Granadinas",
  "Senegal", "Serra Leoa", "Sérvia", "Seychelles", "Singapura", "Síria",
  "Somália", "Sri Lanka", "Suazilândia", "Sudão", "Sudão do Sul", "Suécia",
  "Suíça", "Suriname", "Tailândia", "Taiwan", "Tajiquistão", "Tanzânia",
  "Timor-Leste", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia",
  "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai",
  "Uzbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietnã", "Zâmbia",
  "Zimbábue",
];

const documents = [
  { id: "foto", label: "Enviar Foto", hint: "Esta imagem será utilizada para elaboração de material gráfico para divulgação em redes sociais referente ao curso escolhido.", accept: "image/*" },
  { id: "documentoPessoal", label: "1. Documento Pessoal", hint: "Passaporte para brasileiros e NIF ou NIE para europeus.", accept: "image/*,.pdf" },
  { id: "comprovanteResidencia", label: "2. Comprovante de Residência", hint: "", accept: "image/*,.pdf" },
  { id: "diploma", label: "3. Diploma Universitário", hint: "Fotocópia autenticada do diploma universitário oficial ou equivalente. Para garantir a veracidade do documento todos os diplomas devem ser apresentados com a apostila de Haia, independente do país de origem.", accept: "image/*,.pdf" },
  { id: "historico", label: "4. Histórico Escolar", hint: "Certificado final das notas de cada aluno (histórico) - com o modelo fornecido pela Universidade. Documento em PDF.", accept: ".pdf" },
  { id: "cartaOrdem", label: "5. Carta da Ordem/Carteira Profissional", hint: "Carta da ordem (para alunos europeus) ou carteira profissional do conselho correspondente (para alunos brasileiros).", accept: "image/*,.pdf" },
  { id: "curriculo", label: "6. Curriculum Vitae", hint: "", accept: "image/*,.pdf" },
  { id: "antecedentes", label: "7. Certificado de Antecedentes Criminais", hint: "Certificado de Antecedentes Criminais. Recentemente datado. Este documento deve ser emitido no site da Polícia Federal.", accept: ".pdf" },
];

export default function EnrollmentForm({ masterSlug, editalUrl, contratoUrl }: { masterSlug: string; editalUrl?: string; contratoUrl?: string }) {
  const [sent, setSent] = useState(false);
  const [especializacao, setEspecializacao] = useState<string>("");
  const [liEdital, setLiEdital] = useState(false);
  const [liContrato, setLiContrato] = useState(false);
  const [liPrivacidade, setLiPrivacidade] = useState(false);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [submitting, setSubmitting] = useState(false);
  const [parceiro, setParceiro] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [pais, setPais] = useState("");

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFiles((prev) => ({ ...prev, [id]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simula envio
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setSubmitting(false);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center">
          <Check size={28} className="text-gold" />
        </div>
        <h3 className="text-xl font-bold header-text">Inscrição enviada com sucesso!</h3>
        <p className="text-secondary text-sm max-w-md">
          Recebemos seus dados e entraremos em contato em breve. Caso tenha dúvidas, entre em contato pelo WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* DADOS PESSOAIS */}
      <SectionTitle title="Dados Pessoais" />

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Nome Completo *" required />
        <InputField label="Nome e Sobrenome usado Profissionalmente *" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Telefone *" type="tel" placeholder="12 123456789" required />
        <div>
          <InputField label="Contato do Responsável Financeiro (Celular) *" type="tel" placeholder="12 123456789" required />
          <p className="text-xs text-muted mt-1">Caso seja você mesmo o responsável, por gentileza, repetir o número informado anteriormente.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="E-mail *" type="email" placeholder="seu@email.com" required />
        <CustomSelect label="Parceiros/Indicação *" required options={parceirosOptions} value={parceiro} onChange={setParceiro} />
      </div>

      <InputField label="Perfil do Instagram *" placeholder="@perfil_do_instagram" required />

      <div className="grid sm:grid-cols-2 gap-4">
        <CustomSelect label="Tipo de Documento *" required options={tipoDocumentoOptions.map((o) => o.label)} value={tipoDocumento} onChange={setTipoDocumento} />
        <InputField label="Número do CPF/NIF/DNI *" required />
      </div>

      <InputField label="Morada/Endereço/Número *" required />

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField label="Freguesia/Bairro/Complemento *" required />
        <InputField label="CEP/Código Postal *" required />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <InputField label="Cidade *" required />
        <InputField label="Estado/Província *" required />
        <CustomSelect label="País *" required options={paises} value={pais} onChange={setPais} />
      </div>

      <InputField label="Graduação em: *" required />

      <div>
        <label className="block text-sm font-medium text-secondary mb-3">
          Possui algum curso de Especialização? *
        </label>
        <div className="flex gap-6">
          <RadioOption
            name="especializacao"
            value="Sim"
            checked={especializacao === "Sim"}
            onChange={setEspecializacao}
          />
          <RadioOption
            name="especializacao"
            value="Não"
            checked={especializacao === "Não"}
            onChange={setEspecializacao}
          />
        </div>
      </div>

      {/* DOCUMENTAÇÃO */}
      <SectionDivider />
      <SectionTitle title="Documentação" />

      <div className="grid sm:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <FileField
            key={doc.id}
            id={doc.id}
            label={doc.label}
            hint={doc.hint}
            accept={doc.accept}
            file={files[doc.id] || null}
            onChange={(e) => handleFileChange(doc.id, e)}
          />
        ))}
      </div>

      {/* CONTRATO, LEITURA DO EDITAL E TERMOS */}
      <SectionDivider />
      <SectionTitle title="Contrato, Leitura do Edital e Termos" />

      <div className="rounded-xl border border-border bg-background p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <a
            href={editalUrl || masterAssetPath(masterSlug, "edital.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            <FileDown size={16} />
            BAIXAR EDITAL
          </a>
          <span className="text-xs text-muted">(Clique para baixar o edital do mestrado)</span>
        </div>

        <CheckboxField
          label={<span>Li e Concordo com o Edital do Mestrado <span className="text-muted font-normal">*</span></span>}
          checked={liEdital}
          onChange={setLiEdital}
        />
        <p className="text-xs text-muted -mt-2">Para confirmar a sua matrícula no curso escolhido, é obrigatório marcar este campo.</p>

        <div className="border-t border-border pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={contratoUrl || masterAssetPath(masterSlug, "contrato.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              <FileDown size={16} />
              BAIXAR CONTRATO
            </a>
            <span className="text-xs text-muted">(Clique para baixar o contrato do mestrado)</span>
          </div>

          <CheckboxField
            label={<span>Li e concordo com os termos deste contrato <span className="text-muted font-normal">*</span></span>}
            checked={liContrato}
            onChange={setLiContrato}
          />
          <p className="text-xs text-muted -mt-2">Para confirmar a sua matrícula no curso escolhido, é obrigatório marcar este campo.</p>
        </div>

        <div className="border-t border-border pt-4">
          <InputField
            label="Assinatura de Aceite do Contrato *"
            placeholder="Digite seu nome completo como assinatura"
            required
          />
        </div>
      </div>

      {/* PRIVACIDADE */}
      <div className="rounded-xl border border-border bg-background p-5">
        <CheckboxField
          checked={liPrivacidade}
          onChange={setLiPrivacidade}
          label={
            <span>
              Estou ciente e concordo com o{" "}
              <a
                href="/politica-de-privacidade"
                className="text-gold hover:underline"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                Termo de Uso e Privacidade de Dados
              </a>
            </span>
          }
        />
        <p className="text-xs text-muted mt-2 ml-6">
          Seus dados pessoais serão utilizados exclusivamente para fins de inscrição e comunicação
          referente ao mestrado, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </div>

      {/* SUBMIT */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          size="lg"
          icon={submitting ? undefined : <Send size={16} />}
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Enviar Inscrição"}
        </Button>
      </div>
    </form>
  );
}

/* Sub-components */

function SectionTitle({ title }: { title: string }) {
  return <h3 className="text-lg font-bold header-text">{title}</h3>;
}

function SectionDivider() {
  return <div className="border-t border-border pt-6" />;
}

function InputField({
  label,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-secondary mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}

function RadioOption({
  name,
  value,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      role="radio"
      aria-checked={checked}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <span
        className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          checked
            ? "border-gold"
            : "border-border group-hover:border-gold/50"
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-gold" />}
      </span>
      <span className="text-sm text-secondary">{value}</span>
    </button>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: React.ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className="flex items-start gap-3 cursor-pointer group"
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <span
        className={`mt-0.5 h-5 w-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
          checked
            ? "bg-gold border-gold"
            : "border-border group-hover:border-gold/50"
        }`}
      >
        {checked && <Check size={14} className="text-black" strokeWidth={3} />}
      </span>
      <span className="text-sm text-secondary">{label}</span>
    </div>
  );
}

function FileField({
  id,
  label,
  hint,
  accept,
  file,
  onChange,
}: {
  id: string;
  label: string;
  hint: string;
  accept: string;
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label className="block text-sm font-medium text-secondary mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 cursor-pointer hover:border-gold/50 transition-colors w-full text-left"
      >
        <Upload size={16} className="text-muted shrink-0" />
        <span className="text-sm text-muted truncate flex-1">
          {file ? file.name : "Selecionar arquivo..."}
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
      {hint && <p className="text-xs text-muted mt-1">{hint}</p>}
    </div>
  );
}
