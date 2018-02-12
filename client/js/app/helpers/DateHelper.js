class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
     //spreed operator (...) - cada ponto representa um parametro seguindo a posição do array
        //map = cria um novo array apartir do array onde ele esta sendo usado
        //arrow functions = omite a palavra  function e quando existe apenas uma linha de retorno omite o return
        /**exemplo antes da arrow function:
         * let data = new Date(
            ...this._inputData.value
                .split('-')
                .map(function (item, indice) {
                    return item - indice % 2;
                })
        );
         * 
         */
    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
             
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}