import React from 'react'
import './TabContainer.css';
import { type } from 'os';
import { throws } from 'assert';

export interface TabInstance 
{
    Title: string
    Content: JSX.Element
}

type Props = {
    
}

type State = {
    Tabs: TabInstance[];
    CurrentTab?: TabInstance | null;
}

export class TabContainer extends React.PureComponent<Props, State>
{
    constructor(props :Props) {
        super(props);
        const exampleTabs: TabInstance[] = [
            { Title: 'Tab1', Content: (<div>Tab1</div>) },
            { Title: 'Tab2', Content: (<div>Tab2</div>) },
            { Title: 'Tab3', Content: (<div>Tab3</div>) },
            { Title: 'Tab4', Content: (<div>Tab4</div>) },
            { Title: 'Tab5', Content: (<div>Tab5</div>) },
            { Title: 'Tab5', Content: (<div>Tab5</div>) },
            { Title: 'Tab5', Content: (<div>Tab5</div>) },
            { Title: 'Tab5', Content: (<div>Tab5</div>) },
            { Title: 'Tab5', Content: (<div>Tab5</div>) },
            { Title: 'Tab6', Content: (<div>Tab6</div>) }
        ]

        this.state = {
            Tabs: exampleTabs,
            CurrentTab: exampleTabs[0]
        }
    }

    renderTabHeader(tab: TabInstance){
        const { CurrentTab, Tabs } = this.state;
        const tabClass = `nav-link flex-container p-0 ${tab === CurrentTab ? 'active' : 'inactive'}`;
        const key = Tabs.indexOf(tab);

        return(
            <li className="nav-item" key={ key }>
                <span className = { tabClass } >
                    <label className="fg-9 m-0 p-1" onClick={() => this.changeTab(tab) }> 
                        {tab.Title} 
                    </label>
                    <button className="fg-1 close" onClick={() => this.closeTab(tab) }>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </span>
            </li>
        );
    }

    changeTab(newTab: TabInstance) {
        const { CurrentTab } = this.state;

        if(CurrentTab === newTab) {
            return;
        }

        this.setState({
            CurrentTab: newTab
        });
    }
    
    closeTab(tab: TabInstance) {
        const { Tabs, CurrentTab } = this.state;

        if (tab === CurrentTab) {
            this.setState({ CurrentTab: null });
        }

        this.setState({
            Tabs: Tabs.filter(it => it !== tab)
        });
    }

    render() {
        const { CurrentTab, Tabs } = this.state;

        return Tabs.length == 0 ? (<></>) : (
            <div className="container-fluid pt-1 pb-1 h-100">
                <div className="row ml-0 mr-0">
                    <div className="nav-tab-headers">    
                        <ul className="nav nav-tabs">
                            { Tabs.map(it => this.renderTabHeader(it)) }
                        </ul>
                    </div>
                    <span className="text-right nav-tab-option" >
                        <button type="button" className="btn btn-info w-100 btn-sm">Info</button>
                    </span>
                </div>
                <div className="container-fluid tab-container" >
                    { CurrentTab?.Content ?? (<></>)}
                </div>
            </div>
        );
    }
}
 
  