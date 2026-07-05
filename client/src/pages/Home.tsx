import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, Briefcase, Users, TrendingUp, Shield } from "lucide-react";

/**
 * Landing Page: Plano de Emergência - Currículo Inteligente com IA
 * Design: Minimalismo Corporativo Elegante
 * 
 * Paleta de cores:
 * - Azul escuro (#0F172A): Confiança, profissionalismo
 * - Verde (#22C55E): Ação, crescimento
 * - Branco (#FFFFFF): Clareza, espaço
 * - Amarelo suave (#FFF7D6): Destaque, atenção
 * 
 * Tipografia:
 * - Montserrat ExtraBold/Bold: Títulos
 * - Poppins SemiBold: Subtítulos
 * - Inter Regular: Corpo
 */

const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/ccBNpy4";

const handleKiwifyRedirect = () => {
  window.location.href = KIWIFY_CHECKOUT_URL;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663309329653/5rSdxrHAYRVQ9GkJdPMPdS/hero-background-h5Ha58XJ8W4rzdHDayvNsK.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663309329653/uYMVpDdSDtIuwxjw.png" 
              alt="Sistema Emprego Inteligente com IA" 
              className="w-32 h-auto"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Currículo Inteligente com IA
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-400 mb-12 font-semibold">
            O emprego mudou. A forma de conquistá-lo também.
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Sistema passo a passo para transformar seu currículo, LinkedIn e preparação para entrevistas utilizando Inteligência Artificial.
          </p>

          {/* Benefits highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg font-medium">Currículo otimizado</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg font-medium">LinkedIn profissional</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg font-medium">Entrevistas com IA</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg font-medium">Plano de 7 dias</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="cta-button text-lg px-12 py-6 font-semibold"
              onClick={handleKiwifyRedirect}
            >
              QUERO COMEÇAR AGORA
            </Button>
          </div>

          {/* Badge */}
          <div className="inline-block px-6 py-3 rounded-full text-sm font-semibold" style={{ backgroundColor: '#FFF7D6', color: '#0F172A' }}>
            ✓ Acesso Imediato
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: IDENTIFICAÇÃO */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Você está passando por alguma destas situações?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Envia currículos e não recebe retorno",
              "Não sabe o que melhorar no currículo",
              "Não possui LinkedIn profissional",
              "Não consegue se destacar dos concorrentes",
              "Fica inseguro em entrevistas",
              "Não sabe usar IA a seu favor"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: O PROBLEMA */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            O problema não é falta de capacidade.
          </h2>
          
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            A maioria dos candidatos possui experiência suficiente para diversas vagas. O problema é que não consegue apresentar seu valor profissional da forma correta.
          </p>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Currículo Fraco", icon: "📄", desc: "Falta de estrutura e clareza" },
              { title: "LinkedIn Incompleto", icon: "🔗", desc: "Perfil desorganizado e pouco profissional" },
              { title: "Busca Desorganizada", icon: "🔍", desc: "Candidaturas aleatórias sem estratégia" },
              { title: "Falta de Preparação", icon: "🎯", desc: "Insegurança em entrevistas" }
            ].map((problem, idx) => (
              <div key={idx} className="premium-card">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: APRESENTAÇÃO DA SOLUÇÃO */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Um sistema completo para aumentar sua empregabilidade.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Currículo Inteligente com IA", icon: BookOpen },
              { title: "LinkedIn Profissional", icon: Users },
              { title: "Sistema de Busca de Vagas", icon: Briefcase },
              { title: "Treinamento de Entrevistas com IA", icon: TrendingUp }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className="premium-card text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: O QUE EXISTE DENTRO */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            O que existe dentro do plano
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Módulo 1 – Análise de Perfil e Planejamento Profissional: Descubra seus pontos fortes, identifique oportunidades e defina uma estratégia clara para sua recolocação.",
              "Módulo 2 – Currículo Profissional de Alto Impacto: Aprenda a criar um currículo moderno, atrativo e alinhado às exigências do mercado.",
              "Módulo 3 – Inteligência Artificial Aplicada ao Emprego: Utilize ferramentas de IA para otimizar seu currículo, cartas de apresentação e candidaturas.",
              "Módulo 4 – LinkedIn e Busca Inteligente de Vagas: Construa um perfil profissional forte e aprenda a encontrar oportunidades de forma estratégica.",
              "Módulo 5 – Entrevistas e Processo Seletivo: Prepare-se para entrevistas, responda com confiança e aumente suas chances de aprovação.",
              "Módulo 6 – Plano de Execução da Recolocação: Transforme o conhecimento em ação com um método organizado para aplicar tudo o que aprendeu."
            ].map((module, idx) => (
              <div key={idx} className="premium-card">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-gray-900 font-medium text-sm leading-relaxed">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: BÔNUS PREMIUM */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-12 text-center">
            <div className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: '#FFF7D6', color: '#0F172A' }}>
              ⭐ BÔNUS PREMIUM
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Plano de Acompanhamento de 30 Dias
            </h2>

            <p className="text-lg text-gray-700 mb-12">
              Você receberá um sistema completo de acompanhamento para garantir que você execute o plano e alcance resultados reais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "✓ Metas semanais estruturadas",
                "✓ Controle de candidaturas",
                "✓ Controle de entrevistas",
                "✓ Painel de progresso",
                "✓ Sistema de acompanhamento",
                "✓ Suporte via email"
              ].map((benefit, idx) => (
                <div key={idx} className="text-left">
                  <p className="text-gray-900 font-medium text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="inline-block px-6 py-3 rounded-full text-sm font-semibold" style={{ backgroundColor: '#FFF7D6', color: '#0F172A' }}>
              Valor percebido muito superior ao preço do produto
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: TRANSFORMAÇÃO */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            A transformação que você vai vivenciar
          </h2>

          {/* Before/After image */}
          <div className="mb-16">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309329653/5rSdxrHAYRVQ9GkJdPMPdS/transformation-before-after-8dVjcbX7o84kLWMcmKGcQT.webp"
              alt="Transformação Antes e Depois"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ANTES</h3>
              <ul className="space-y-4">
                {[
                  "Currículo ignorado",
                  "Perfil incompleto",
                  "Candidaturas aleatórias",
                  "Insegurança"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DEPOIS</h3>
              <ul className="space-y-4">
                {[
                  "Currículo profissional",
                  "LinkedIn otimizado",
                  "Sistema organizado",
                  "Preparação para entrevistas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: VALOR */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Veja o valor que você está recebendo
          </h2>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="space-y-4 mb-8">
              {[
                { name: "Currículo Inteligente", price: "R$97" },
                { name: "LinkedIn Profissional", price: "R$67" },
                { name: "Treinamento de Entrevistas", price: "R$97" },
                { name: "Sistema de Busca de Vagas", price: "R$67" },
                { name: "Plano de Execução", price: "R$47" },
                { name: "Bônus de 30 Dias", price: "R$47" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="text-gray-900 font-bold">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">R$422</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-4">Hoje você paga apenas:</p>
            <p className="text-6xl font-extrabold text-green-600 mb-8">R$47</p>
            <p className="text-lg text-gray-600">Economize R$375 (89% de desconto)</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: GARANTIA */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg p-12 text-center shadow-lg border-2 border-green-200">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia de 7 Dias
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Se você não ficar satisfeito com o produto nos primeiros 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
            <p className="text-lg font-semibold text-green-600">
              Comprar sem risco
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: CTA FINAL */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663309329653/5rSdxrHAYRVQ9GkJdPMPdS/hero-background-h5Ha58XJ8W4rzdHDayvNsK.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Sua próxima oportunidade pode depender das ações que você toma hoje.
          </h2>

          <p className="text-xl text-gray-200 mb-12">
            Não deixe para depois. Comece agora mesmo seu plano de transformação profissional.
          </p>

          <Button 
            size="lg"
            className="cta-button text-2xl px-16 py-8 font-semibold"
            onClick={handleKiwifyRedirect}
          >
            QUERO ACESSAR O PLANO AGORA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Sistema Emprego Inteligente com IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
