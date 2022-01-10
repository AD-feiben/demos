// JavaScript
// LeetCode210 课程表II
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var edge = [];
    var inDeg = [];
    for (let i = 0; i < numCourses; i++) {
        edge[i] = [];
        inDeg[i] = 0;
    }


    var addEdge = function(x, y) {
        edge[x].push(y);
        inDeg[y]++;
    }


    var topsort = function() {
        var q = [];
        var order = [];
        for (let i = 0; i < numCourses; i++)
            if (inDeg[i] == 0) q.push(i);
        while (q.length > 0) {
            let x = q.shift();
            order.push(x);
            for (const y of edge[x]) {
                inDeg[y]--;
                if (inDeg[y] == 0) q.push(y);
            }
        }
        if (order.length == numCourses) return order;
        return [];
    }


    for (const pre of prerequisites) {
        addEdge(pre[1], pre[0]);
    }
    return topsort();
};
