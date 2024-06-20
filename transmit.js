module.exports = function (RED) {
    function TransmitNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on(' input', fuction(msg){
            node.send(msg);
        });
    }
    RED.nodes.registerType("transmit", TransmitNode);
}
