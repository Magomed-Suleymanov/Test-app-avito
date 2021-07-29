import React from 'react';
import { useSelector } from 'react-redux';

function Comments() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const popUpLoading = useSelector((state) => state.loadingModal);
  const modalImg = useSelector((state) => state.modalImg);

  return (
    <div className="wrapComms">
      {popUpLoading ? (
        ''
      ) : modalImg.comments.length !== 0 ? (
        modalImg.comments.map((item) => {
          return (
            <div key={item.id} className="comments">
              <div className="date">
                {`0${day}`}.{`0${month}`}.{year}
              </div>
              <div className="text-comms">{item.text}</div>
            </div>
          );
        })
      ) : (
        <div className="comment">Комментариев нет</div>
      )}
    </div>
  );
}

export default Comments;
