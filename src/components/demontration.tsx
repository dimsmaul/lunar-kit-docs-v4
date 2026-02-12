import React from 'react'

import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';


export interface DemonstrationProps {
    components: React.ReactNode
    code: React.ReactNode
}

const Demonstration: React.FC<DemonstrationProps> = ({ components, code }) => {
  return (
    <div>
        <Tabs defaultValue="demo" className="w-full" items={['Demo', 'Code']}>
            <Tab value="demo" >
                <div className="p-4">
                    {/* Replace the following with actual demonstration components */}
                    <div>
                        <div className="p-4">
                            {components}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab value="code">
                 <DynamicCodeBlock lang="tsx" code={
`// Example code goes here
import React from 'react';

const ExampleComponent = () => {
    return <div>Hello, World!</div>;
};

export default ExampleComponent;`
                 } />
            </Tab>
        </Tabs> 
    </div>
  )
}

export default Demonstration