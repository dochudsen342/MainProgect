

export type BuildMod = 'production' | 'development'

export interface BuildPath {
    entry:string,
    output:string,
    html:string,
    src:string,
}


export interface BuildOptions{
    mode:BuildMod,
    path:BuildPath,
    isDev:boolean,
    port:number
}

export interface BuildEnv {
    mode:BuildMod,
    port:number
}