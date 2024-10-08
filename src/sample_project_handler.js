definition = {
  name: 'Sample Code Project JavaScript',
  description: 'Sample code project description.',
  version: "0.0.1",
  workflows:[
    {
      name: 'sampleWorkflow1',
      label: 'Sample workflow 1',
      description: 'Sample workflow 1 description.',
      tasks: [
        {
          name: 'sampleTask1',
          label: 'Sample task',
          perform: () => {
            console.log('Sample from code workflow javascript task1!!!');

            return 'Sample from code workflow javascript task1!!!';
          }
        }
      ]
    }
  ]
}