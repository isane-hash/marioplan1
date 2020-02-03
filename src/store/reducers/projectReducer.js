const initState = {
  projects: [
    {id: '1', title: 'The first post', content: 'hello everyone'},
    {id: '2', title: 'Hello the second post', content: 'hello how are you today'},
    {id: '3', title: 'Hello again the third post', content: 'hello again '}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;