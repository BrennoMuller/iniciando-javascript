// middle pattern (chain of responsability)

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'md1'
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'md2'
    next()
}

const passo3 = ctx => {ctx.valor3 = 'mid3'}

//cristofer alexander criou o padrão de projeto

const exec = (ctx, ...middleware) => {

  
    const execPasso = indice => {
        middleware && indice < middleware.length && middleware[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)
console.log(ctx)