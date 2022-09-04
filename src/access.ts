export default (initialState: API.PatientInfo) => {
  initialState = initialState || {};
  return {
    canAdmin: initialState.role === 'admin',
  }
};
