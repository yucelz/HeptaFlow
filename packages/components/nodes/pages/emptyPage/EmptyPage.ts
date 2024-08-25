import { INode } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { Calculator } from '@langchain/community/tools/calculator'

class EmptyPage_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]

    constructor() {
        this.label = 'Empty Page'
        this.name = 'EmptyPage'
        this.version = 1.0
        this.type = 'EmptyPage'
        this.icon = 'emptyPage.svg'
        this.category = 'Pages'
        this.description = 'Empty Page'
        this.baseClasses = [this.type, ...getBaseClasses(Calculator)]
    }

    async init(): Promise<any> {
        return new Calculator()
    }
}

module.exports = { nodeClass: EmptyPage_Tools }
