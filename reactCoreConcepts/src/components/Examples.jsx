import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";




export default function Examples() {
    // React hooks (useState) must be called in a component and Top level which means you can't use it inside another function in the component.
    const [ selectedTopic , setSelectedTopic ] = useState()


  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  let tabContent = <p>Please select a tab</p>

  if(selectedTopic) {
    tabContent =    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
  }

    return (
        <Section id={'examples'} title={'Examples'}>
            <Tabs 
            buttons={
                    <>
                        <TabButton 
                    isSelected={selectedTopic === 'components'} 
                    onClick={() => clickHandler('components')}>
                    Components
                    </TabButton>
                    <TabButton 
                    isSelected={selectedTopic === 'jsx'} 
                    onClick={() => clickHandler('jsx')}>
                    JSX
                    </TabButton>
                    <TabButton 
                    isSelected={selectedTopic === 'props'} 
                    onClick={() => clickHandler('props')}>
                    Props
                    </TabButton>
                    <TabButton 
                    isSelected={selectedTopic === 'state'} 
                    onClick={() => clickHandler('state')}>
                    State
                    </TabButton>
                    
                    </>
                }> {tabContent}       
            </Tabs>
          
          
        </Section>
    )
};