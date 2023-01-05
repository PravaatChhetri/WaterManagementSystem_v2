import ResponsiveDrawer from '../components/DashboardDrawer';
import React from "react"
import ReactFlow, {MiniMap,Background,Panel,Controls} from 'reactflow';
import 'reactflow/dist/style.css';


const nodeColor = (color) => {
    switch(color.class){
        case 'source':
            return 'blue';
        case 'flowrate':
            return 'red';
        case 'node':
            return 'green';
        default:    
            break;
    }
}
const initialNodes =[
    {
        id:'source',
        class:'source',
        data:{label:'Source'},
        type:'input',
        position:{x:260, y:10},
    },
    {
        id:'v1-fr',
        class:'flowrate',
        data:{label:'S-V1'},
        type:'default',
        position:{x:360, y:75},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'right',
          targetPosition: 'left',
    },
    {
        id:'FT-fr',
        class:'flowrate',
        data:{label:'S-FT'},
        type:'default',
        position:{x:240, y:75},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'left',
          targetPosition: 'right',
    },
    {
        id:'v1',
        class:'node',
        data:{label:'V1'},
        type:'default',
        position:{x:418, y:120},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'FT',
        class:'node',
        data:{label:'Filter Tank'},
        type:'default',
        position:{x:240, y:200},
        style: { backgroundColor: '#FFFFFF', width: 175, height: 90 },
        
    },
    {
        id:'ph',
        data:{label:'pH'},
        type:'default',
        position:{x:12, y:35},
        parentNode: 'FT',
        
    },
    {
        id:'royal',
        class:'node',
        data:{label:'Royal'},
        type:'default',
        position:{x:2, y:335},
        
    },
    {
        id:'v4-fr',
        class:'flowrate',
        data:{label:'r-V4'},
        type:'default',
        position:{x:44, y:400},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          
    },
    {
        id:'v4',
        class:'node',
        data:{label:'V4'},
        type:'output',
        position:{x:50, y:440},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v2-fr',
        class:'flowrate',
        data:{label:'FT-V2'},
        type:'default',
        position:{x:350, y:330},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          targetPosition: 'left',
    },
    {
        id:'v3-fr',
        class:'flowrate',
        data:{label:'FT-V3'},
        type:'default',
        position:{x:230, y:326},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          targetPosition: 'right',
    },
    {
        id:'v2',
        class:'node',
        data:{label:'V2'},
        type:'default',
        position:{x:360, y:372},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v3',
        class:'node',
        data:{label:'V3'},
        type:'default',
        position:{x:230, y:370},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'r2',
        class:'node',
        data:{label:'Reservior2'},
        type:'default',
        position:{x:245, y:455},
    },
    {
        id:'r2-fr',
        class:'flowrate',
        data:{label:'r2-V5'},
        type:'default',
        position:{x:286, y:521},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v5',
        class:'node',
        data:{label:'V5'},
        type:'default',
        position:{x:293, y:565},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v6-fr',
        class:'flowrate',
        data:{label:'V5-V6'},
        type:'default',
        position:{x:135, y:628},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          targetPosition:'right',
          sourcePosition:'left'
    },
    {
        id:'v7-fr',
        class:'flowrate',
        data:{label:'V5-V7'},
        type:'default',
        position:{x:197, y:676},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v8-fr',
        class:'flowrate',
        data:{label:'V5-V8'},
        type:'default',
        position:{x:287, y:676},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v9-fr',
        class:'flowrate',
        data:{label:'V5-V9'},
        type:'default',
        position:{x:346, y:628},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          targetPosition:'left',
          sourcePosition:'right'
    },
    {
        id:'v6',
        class:'node',
        data:{label:'V6'},
        type:'output',
        position:{x:53, y:620},
        style: {
            padding: 5,
            width:50,
            height:35
          },
        targetPosition: 'right',
    },
    {
        id:'v7',
        class:'node',
        data:{label:'V7'},
        type:'output',
        position:{x:202, y:722},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v8',
        class:'node',
        data:{label:'V8'},
        type:'output',
        position:{x:292, y:722},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v9',
        class:'node',
        data:{label:'V9'},
        type:'default',
        position:{x:424, y:622},
        style: {
            padding: 5,
            width:50,
            height:35
          },
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    {
        id:'v10-fr',
        class:'flowrate',
        data:{label:'V9-V10'},
        type:'default',
        position:{x:490, y:690},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v11-fr',
        class:'flowrate',
        data:{label:'V9-V11'},
        type:'default',
        position:{x:563, y:688},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v10',
        class:'node',
        data:{label:'V10'},
        type:'output',
        position:{x:492, y:722},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v10-v11-fr',
        class:'flowrate',
        data:{label:'V10-V11'},
        type:'default',
        position:{x:523, y:631},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'right',
          targetPosition: 'left',
    },
    {
        id:'v11',
        class:'node',
        data:{label:'V11'},
        type:'output',
        position:{x:565, y:722},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v11-v12-fr',
        class:'flowrate',
        data:{label:'V11-V12'},
        type:'default',
        position:{x:608, y:634},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'right',
          targetPosition: 'left',
    },
    {
        id:'v12-fr',
        class:'flowrate',
        data:{label:'V9-V12'},
        type:'default',
        position:{x:656, y:692},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v12',
        class:'node',
        data:{label:'V12'},
        type:'output',
        position:{x:660, y:722},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v13-fr',
        class:'flowrate',
        data:{label:'V9-V13'},
        type:'default',
        position:{x:696, y:635},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'right',
          targetPosition: 'left',
    },
    {
        id:'v13',
        class:'node',
        data:{label:'V13'},
        type:'default',
        position:{x:770, y:628},
        style: {
            padding: 5,
            width:50,
            height:35
          },
        targetPosition: 'left',
        sourcePosition: 'right',
    },
    {
        id:'v14-fr',
        class:'flowrate',
        data:{label:'V13-V14'},
        type:'default',
        position:{x:810, y:690},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
    },
    {
        id:'v15-fr',
        class:'flowrate',
        data:{label:'V13-V15'},
        type:'default',
        position:{x:861, y:637},
        fontSize: 5,
        style: {
            padding: 0,
            width:60,
            height:20
          },
          sourcePosition: 'right',
          targetPosition: 'left',
    },
    {
        id:'v14',
        class:'node',
        data:{label:'V14'},
        type:'output',
        position:{x:812, y:720},
        style: {
            padding: 5,
            width:50,
            height:35
          },
    },
    {
        id:'v15',
        class:'node',
        data:{label:'V15'},
        type:'output',
        position:{x:933, y:630},
        style: {
            padding: 5,
            width:50,
            height:35
          },
        targetPosition: 'left',
    }
];

const initialEdges = [
    {
        id:'s-v1-fr',
        source: 'source',
        target:'v1-fr',
        type:'step',
        animated: true
    },
    {
        id:'s-v1',
        source: 'v1-fr',
        target:'v1',
        type:'smoothstep',
        animated: true
    },
    {
        id:'s-FT-fr',
        source: 'source',
        target:'FT-fr',
        type:'step',
        animated: true
    },
    {
        id:'s-FT',
        source: 'FT-fr',
        target:'FT',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v1-FT',
        source: 'v1',
        target:'FT',
        type:'smoothstep',
        animated: true
    },
    {
        id:'FT-r',
        source: 'FT',
        target:'royal',
        type:'smoothstep: { offset: 0, borderRadius: 90 }, default: { curvature: 90}',
        animated: true
    },
    {
        id:'r-v4-fr',
        source: 'royal',
        target:'v4-fr',
        type:'straight',
        animated: true
    },
    {
        id:'r-v4',
        source: 'v4-fr',
        target:'v4',
        type:'straight',
        animated: true
    },
    {
        id:'FT-v2-fr',
        source: 'FT',
        target:'v2-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'FT-v2',
        source: 'v2-fr',
        target:'v2',
        type:'straight',
        animated: true
    },
    {
        id:'FT-v3-fr',
        source: 'FT',
        target:'v3-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'FT-v3',
        source: 'v3-fr',
        target:'v3',
        type:'straight',
        animated: true
    },
    {
        id:'V2-r2',
        source: 'v2',
        target:'r2',
        type:'smoothstep',
        animated: true
    },
    {
        id:'V3-r2',
        source: 'v3',
        target:'r2',
        type:'smoothstep',
        animated: true
    },
    {
        id:'r2-v5',
        source: 'r2',
        target:'v5',
        type:'straight',
        label:'r2 to V5',
        animated: true
    },
    {
        id:'v5-v6-fr',
        source: 'v5',
        target:'v6-fr',
        type:'step',
        animated: true
    },
    {
        id:'v5-v6',
        source: 'v6-fr',
        target:'v6',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v5-v7-fr',
        source: 'v5',
        target:'v7-fr',
        type:'step',
        animated: true
    },
    {
        id:'v5-v7',
        source: 'v7-fr',
        target:'v7',
        type:'straight',
        animated: true
    },
    {
        id:'v5-v8-fr',
        source: 'v5',
        target:'v8-fr',
        type:'straight',
        animated: true
    },
    {
        id:'v5-v8',
        source: 'v8-fr',
        target:'v8',
        type:'straight',
        animated: true
    },
    {
        id:'v5-v9-fr',
        source: 'v5',
        target:'v9-fr',
        type:'step',
        animated: true
    },
    {
        id:'v5-v9',
        source: 'v9-fr',
        target:'v9',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v10-fr',
        source: 'v9',
        target:'v10-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v10-v11-fr-',
        source: 'v9',
        target:'v10-v11-fr',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v10',
        source: 'v10-fr',
        target:'v10',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v11-fr',
        source: 'v9',
        target:'v11-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v9-v11',
        source: 'v11-fr',
        target:'v11',
        type:'straight',
        animated: true
    },
    {
        id:'v11-v12-fr-',
        source: 'v10-v11-fr',
        target:'v11-v12-fr',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v12-fr',
        source: 'v11-v12-fr',
        target:'v12-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v9-v12',
        source: 'v12-fr',
        target:'v12',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v13-fr',
        source: 'v11-v12-fr',
        target:'v13-fr',
        type:'straight',
        animated: true
    },
    {
        id:'v9-v13',
        source: 'v13-fr',
        target:'v13',
        type:'straight',
        animated: true
    },
    {
        id:'v13-v14-fr',
        source: 'v13',
        target:'v14-fr',
        type:'smoothstep',
        animated: true
    },
    {
        id:'v13-v14',
        source: 'v14-fr',
        target:'v14',
        type:'straight',
        animated: true
    },
    {
        id:'v13-v15-fr',
        source: 'v13',
        target:'v15-fr',
        type:'straight',
        animated: true
    },
    {
        id:'v13-v15',
        source: 'v15-fr',
        target:'v15',
        type:'straight',
        animated: true
    },
    
];


const rfStyle = {
    backgroundColor: '#eef0f2',
  };

const SCADADisp = () => {
  const ScadaDispContent = (
    <div style={{ height: '80vh', width:'100%' }}>
    <ReactFlow
    defaultEdges={initialEdges}
    defaultNodes={initialNodes}
    style={rfStyle}
    fitView
    > 
    <MiniMap nodeColor={nodeColor} position = {('top-left')} /> 
    <Controls />
    <Background variant={'line'} />
    <Panel position="top-right">
        V = valve(on/off)
        X = flowrate
    </Panel>
    </ReactFlow>
</div>
  );
  return (
    <ResponsiveDrawer box={ScadaDispContent}/>
  )
}

export default SCADADisp;