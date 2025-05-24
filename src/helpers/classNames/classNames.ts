

type Mode = Record<string,boolean | string>



export function classNames (cls:string,mods:Mode,additional:string[]):string {

    const modeCls = Object.entries(mods).map(item => {
            if(item[1]) return item[0]
        })

    return [
        cls,
        ...additional,
        ...modeCls
    ]
    .join(' ')
}

classNames('app',{hovered:true,selected:false},['add','axa'])