export const LoadingImg = () => {
  return (dispatch) => {
    dispatch({ type: 'loading/img/start' });
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'loading/img/success',
          payload: json,
        });
      });
  };
};
export const LoadingModalImg = (id) => {
  return (dispatch) => {
    dispatch({ type: 'loading/modalImg/start' });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'loading/modalImg/success',
          payload: json,
        }),
      );
  };
};

export function deleteModal() {
  return { type: 'delete/modal' };
}
