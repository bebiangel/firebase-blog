export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.id;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName ? profile.firstName : "",
        authorLastName: profile.lastName ? profile.lastName : "",
        authorId: authorId ? authorId : "",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
