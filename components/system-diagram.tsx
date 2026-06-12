"use client"

import ReactFlow, { Background, Controls, Edge, Node, Position } from "reactflow"
import type { DiagramEdge, DiagramNode } from "@/lib/types"

const groupColor: Record<string, string> = {
  training: "var(--diagram-training)",
  alignment: "var(--diagram-alignment)",
  compression: "var(--diagram-compression)",
  inference: "var(--diagram-inference)",
  evaluation: "var(--diagram-evaluation)"
}

export function SystemDiagram({ nodes, edges }: { nodes: DiagramNode[]; edges: DiagramEdge[] }) {
  const flowNodes: Node[] = nodes.map((node, index) => ({
    id: node.id,
    data: { label: node.label },
    position: { x: (index % 3) * 220, y: Math.floor(index / 3) * 130 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      border: "1px solid rgb(var(--color-line))",
      background: groupColor[node.group] ?? "rgb(var(--color-panel))",
      color: "rgb(var(--color-ink))",
      borderRadius: 0,
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      width: 160
    }
  }))

  const flowEdges: Edge[] = edges.map((edge) => ({
    id: `${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    animated: true,
    style: { stroke: "rgb(var(--color-accent))" },
    labelStyle: { fill: "rgb(var(--color-muted))", fontSize: 10 }
  }))

  return (
    <div className="h-[320px] border border-lab-line bg-lab-panel sm:h-[380px] lg:h-[420px]">
      <ReactFlow nodes={flowNodes} edges={flowEdges} fitView minZoom={0.4} maxZoom={1.6} aria-label="System architecture diagram">
        <Background color="rgb(var(--color-line))" gap={18} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
