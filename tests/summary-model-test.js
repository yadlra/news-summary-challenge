function testCanBeInstantiated() {
  var summary = new Summary();
  assert.isTrue("Summary can be instantiated", summary instanceof Summary);
}

testCanBeInstantiated();
