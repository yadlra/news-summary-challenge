function testCanBeInstantiated() {
  var summaryList = new SummaryList();
  assert.isTrue("SummaryList can be instantiated", summaryList instanceof SummaryList);
}

testCanBeInstantiated();
