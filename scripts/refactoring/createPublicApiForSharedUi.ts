import path from 'path'
import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()
const sharedPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(sharedPath)
const componentsDirs = sharedUiDirectory?.getDirectories()

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  if (layers.some((layer) => value.startsWith(layer))) {
    return true
  }
}

componentsDirs?.forEach((dir) => {
  const indexFilePath = dir.getPath() + '/index.ts'
  const indexFile = dir.getSourceFile(indexFilePath)
  if (!indexFile) {
    const sourceCode = `
        import * from './${dir.getBaseName()}'
    `
    const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true })
    file.save()
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '')
    const segmets = valueWithoutAlias.split('/')

    const isSharedLayer = segmets?.[0] === 'shared'
    const isUiSlice = segmets?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/')
      importDeclaration.setModuleSpecifier(`@/${result}`)
    }
  })
})

project.save()
