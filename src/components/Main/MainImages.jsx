import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingImg, LoadingModalImg } from '../../redux/actions';

function MainImages() {
  const loading = useSelector((state) => state.loadingImg);
  const itemsImg = useSelector((state) => state.itemsImg);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadingImg());
  }, [dispatch]);

  return (
    <div className="mainContent">
      <div className="containerImg">
        {loading ? (
          <div>Идет загрузка...</div>
        ) : (
          itemsImg.map((item) => {
            return (
              <img
                onClick={() => dispatch(LoadingModalImg(item.id))}
                key={item.id}
                src={item.url}
                alt={"img"}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MainImages;
