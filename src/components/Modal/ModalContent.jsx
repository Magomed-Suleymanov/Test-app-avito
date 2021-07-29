import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments';
import InputForms from './InputForms';
import { deleteModal } from '../../redux/actions';
import { ImCross } from 'react-icons/all'

function ModalContent() {
  const loadingModal = useSelector((state) => state.loadingModal);
  const modalImg = useSelector((state) => state.modalImg);

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="deactivation"
        onClick={() => dispatch(deleteModal())}
      ></div>
      <div className="modalImg">
        <div className="PicsAndCommentsAndDelete">
          <div className="pics">
            {loadingModal ? 'Loading...' : <img src={modalImg.url} alt="" />}
          </div>
          <Comments />
          <div className="delete" onClick={() => dispatch(deleteModal())}>
            <ImCross />
          </div>
        </div>
        <InputForms />
      </div>
    </div>
  );
}

export default ModalContent;
