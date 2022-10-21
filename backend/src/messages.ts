import type { ErrorDb } from './types';

export const targetNotFound:ErrorDb = {
    errorMsg: ['Hum... Não encontramos esse livro em nosso banco de dados.', 'Que tal registrar ele e depois voltar aqui?'],
    code: 'target-not-found'
}
