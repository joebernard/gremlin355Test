const gremlin = require("gremlin");

exports.handler = async event => {
  console.log(`event: ${JSON.stringify(event)}`);

  const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
  const Graph = gremlin.structure.Graph;

  const dc = new DriverRemoteConnection(
    "wss://<YOUR ENDPOINT HERE>:8182/gremlin",
    {}
  );

  const graph = new Graph();
  const g = graph.traversal().withRemote(dc);
  const __ = gremlin.process.statics;
  const {
    t: { id },
    cardinality: { single }
  } = gremlin.process;

  try {
    await g
      .V(event.id)
      .drop()
      .iterate();

    const newRecord = await g
      .addV("test")
      .property(id, event.id)
      .property(single, "testProp", "hello!")
      .next();

    const projectBy = await g
      .V(event.id)
      .project("testProp")
      .by("testProp")
      .next();

    const projectByValue = await g
      .V(event.id)
      .project("testProp")
      .by(__.values("testProp"))
      .next();

    const valueMap = await g
      .V(event.id)
      .valueMap(true)
      .next();

    dc.close();

    return { newRecord, projectBy, projectByValue, valueMap };
  } catch (error) {
    console.log("ERROR", error);
    dc.close();
  }
};
