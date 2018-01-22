import superagent from 'superagent';

// sync actions
export const setActions = (sections) => ({
  type: 'SECTIONS_SET',
  payload: sections
});

export const createAction = ({title}) => ({
  type: 'SECTION_CREATE',
  payload : {
    title,
    id: btoa(Math.random()),
    createdOn: new Date(),
  }
});

export const updateAction = (section) => ({
  type : 'SECTION_UPDATE',
  payload : section,
});

export const removeAction = (section) => ({
  type : 'SECTION_REMOVE',
  payload : section,
});

// async actions
export const getSections = () => (store) => {
  //return superagent.get('http://localhost:3000/api/child')
  return superagent.get('http://localhost:3000/api/lists')
  .then(response => {
    console.log(RESPONSE, response)
    store.dispatch(setActions(response));
    return response
  })
}

export const uploadSection = (section) => (store) => {
  return superagent.post('http://localhost:3000/sections')
  .send(section)
  .then(response => {
    store.dispatch(createAction(response));
    return response
  })
}