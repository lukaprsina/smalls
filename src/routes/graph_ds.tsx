import Graph from "graphology";
import Sigma from "sigma";

function GraphDS() {
    let container: HTMLDivElement | undefined;
    const graph = new Graph();

    graph.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
    graph.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });

    graph.addEdge("John", "Mary");

    if (typeof container === "undefined") return <div>Test</div>
    const renderer = new Sigma(graph, container);

    return <>
        <div ref={container} /></>
}

export default GraphDS