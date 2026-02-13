'use client'

import React from 'react'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { PillTabs } from './pill-tabs';


export interface DemonstrationProps {
    components: React.ReactNode
    code: string
}

const Demonstration: React.FC<DemonstrationProps> = ({ components, code }) => {
    const [tab, setTab] = React.useState<string>('Demo')
    return (
        <div>
            <PillTabs items={['Demo', 'Code']} active={tab} onChange={setTab} />
            <div className='mt-4'>
                {
                    tab === 'Demo' ? (
                        <div className="p-4 min-h-52 flex items-center justify-center border rounded-lg bg-fd-background ">
                            {components}
                        </div>
                    ) : (
                        <DynamicCodeBlock lang="tsx" code={code} />
                    )
                }
            </div>

        </div>
    )
}

export default Demonstration