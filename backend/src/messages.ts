import type { ErrorDb } from './types';

export const targetNotFound:ErrorDb = {
    errorMsg: ['Hum... Não encontramos esse livro em nosso banco de dados.', 'Que tal registrar ele e depois voltar aqui?'],
    code: 'target-not-found'
}

export const notValidBookObj: ErrorDb = {
    errorMsg: ['This is an invalid Book object.', 'The Book object is {title: string; genre: string[]; author: string; keywords: string[]'],
    code: 'object-is-not-book'
}

export const bookAlreadyExist: ErrorDb = {
    errorMsg: ['Esse livro já está cadastrado em nosso sistema, vá até a barra de pesquisa para encontrá-lo.'],
    code: 'book-already-exist'
}
