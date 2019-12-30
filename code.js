// Graph

let graph = {};

graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// Costs graph

let costs = {};

costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// Parents

let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["in"] = NaN;

// Processed

let processed = [];

// Before

console.log(graph, costs, parents);

// Function for find lowest in object



function find_lowest(costs) {
    let lowest_cost = Infinity;
    let lowest_cost_node = NaN;

    for(let node in costs) {
        let cost = costs[node];
        if(cost < lowest_cost && !processed.includes(node)) {
        lowest_cost = cost;
        lowest_cost_node = node;
        }
    }
    
    return lowest_cost_node; 
}

// Find optimal road

function find_optimal_road(graph, costs, parents) {
    let node = find_lowest(costs);
    while(node) {
        let cost = costs[node];
        let neighbors = graph[node];
        for(let n in neighbors) {
        let new_cost = cost + neighbors[n];
        if(costs[n] > new_cost) {
            costs[n] = new_cost;
            parents[n] = node;
        }
        }
        processed.push(node);
        node = find_lowest(costs);
    }
}

find_optimal_road(graph, costs, parents);


// After

console.log(graph, costs, parents);