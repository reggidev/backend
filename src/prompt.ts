/* 
  2 TIPOS DE PROMPTS
  SYSTEM PROMPT - INTRUÇÕES PARA A IA
  USER PROMPT - INFORMAÇÕES DO USUÁRIO PARA A IA
  DOCS SYSTEM PROMPT - INSTRUÇÕES PARA A IA SOBRE DOCUMENTOS FORNECIDOS PELO USUÁRIO
*/

export function buildSystemPrompt() {
  return [
    `Você é Nutri-AI, um agente de nutrição que cria planos semanais.
    Regras fixas:
    - Sempre responda em texto markdown legível para humanos.`
  ]
}

export function buildUserPrompt() {

}

export function buildDocsSystemPrompt() {

}